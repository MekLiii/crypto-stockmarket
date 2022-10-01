import { createContext, useContext, useState, useReducer } from "react";

interface ICrypto {
  id: number;
  name: string;
}

type Action =
  | { type: "ADD"; payload: ICrypto }
  | { type: "DELETE"; payload: number }
  | { type: "UPDATE"; payload: ICrypto };
type Dispatch = (action: Action) => void;
type State = Array<ICrypto>;

export const CryptoContext = createContext<{
  state: State;
  dispatch: Dispatch;
}>({
  state: [],
  dispatch: () => null,
});

const crytoReducer = (state: State, action: Action) => {
  switch (action.type) {
    case "ADD":
        localStorage.setItem("cryptoItems", JSON.stringify([...state, action.payload]));
      return [...state, action.payload];
    case "DELETE":
      //@ts-ignore
      return state.filter((crypto: ICrypto) => crypto.id !== action.payload);
    default:
      return state;
  }
};

type TProps = {
  children: JSX.Element;
};
export const CryptoContexProvider = ({ children }: TProps) => {
  const getItemsFromLocalStorage = JSON.parse(localStorage.getItem("cryptoItems") as string);
  console.log(getItemsFromLocalStorage);
  const [state, dispatch] = useReducer(crytoReducer, getItemsFromLocalStorage || []);
  const value = { state, dispatch };
  return (
    <CryptoContext.Provider value={value}>{children}</CryptoContext.Provider>
  );
};
