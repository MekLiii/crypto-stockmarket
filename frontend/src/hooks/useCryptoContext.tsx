import { createContext, useContext, useState, useReducer } from "react";

interface ICrypto {
  id: number;
  symbol: string;
  name: string;
  logo?: string;

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
      localStorage.setItem(
        "cryptoItems",
        JSON.stringify([...state, action.payload])
      );
      return [...state, action.payload];
    case "DELETE":
      //@ts-ignore
      localStorage.setItem(
        "cryptoItems",
        JSON.stringify(state.filter((el) => el.id !== action.payload))
      );
      return state.filter((crypto: ICrypto) => crypto.id !== action.payload);
    case "UPDATE":
      return state.map((crypto: ICrypto) => {
        // crypto.name = action.payload.name;
        // crypto.symbol = action.payload.symbol;
        if (crypto.symbol === action.payload.symbol) {
          crypto.name = action.payload.name;
          return crypto;
        }
        return crypto;
      });
    default:
      return state;
  }
};

type TProps = {
  children: JSX.Element;
};
export const CryptoContexProvider = ({ children }: TProps) => {
  const getItemsFromLocalStorage = JSON.parse(
    localStorage.getItem("cryptoItems") as string
  );
  const [state, dispatch] = useReducer(
    crytoReducer,
    getItemsFromLocalStorage || []
  );
  const value = { state, dispatch };
  return (
    <CryptoContext.Provider value={value}>{children}</CryptoContext.Provider>
  );
};
