import { useState, useContext, useCallback } from "react";
import { Container, StyledInput, Button, Img } from "./style";
import { CryptoContext } from "./index";
import { useQuery } from "@tanstack/react-query";

type TProps = {
  // value: string;
  // onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  // onButtonClick: () => void;
};

const AddCryptoInput = () => {
  const [value, setValue] = useState("");
  const [isSendAvalible, setIsSendAvalible] = useState(false);
  const { state, dispatch } = useContext(CryptoContext);

  const fetchInfoAboutCrypto = useCallback(async () => {
    console.log(value);
    return fetch(`/infoAboutCrypto/${value}`, {
      // fetch("/api", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);

        if (data.data) {
          console.log(data.data.symbol);
          console.log(state);
          // dispatch({
          //   type: "ADD",
          //   payload: {
          //     symbol: data.data.symbol,
          //     name: data.data.name,
          //     id: id,
          //     logo: data.data.logo,
          //   },
          // });
          dispatch({
            type: "ADD",
            payload: {
              id: data.data.id,
              name: data.data.name,
              symbol: data.data.symbol,
              logo: data.data.logo,
            },
          });
        }

        // dispatch({
        //   type: "UPDATE",
        //   payload: {
        //     symbol: data.data.symbol,
        //     name: data.data.name,
        //     id: id,
        //     logo: data.data.logo,
        //   },
        // });
        setIsSendAvalible(false);
        setValue("");
        return data;
      });
  }, [value]);

  const {
    isLoading: infoIsLoading,
    isError: infoIsError,
    data,
    error: infoError,
  } = useQuery([`cryptoItem`], fetchInfoAboutCrypto, {
    enabled: isSendAvalible,
  });
  const addNewCrypto = () => {
    if (value.length === 0) return;
    if (state.find((el) => el.name === value)) return;
    if (data) {
    }
    console.log(value);
    if (value) {
      setIsSendAvalible(true);
    }
  };
  return (
    <Container>
      <StyledInput
        type="text"
        value={value}
        onChange={({ target }) => setValue(target.value)}
        placeholder="Type write symbol of crypto currency"
      />
      <Button onClick={() => addNewCrypto()}>
        <Img
          src="https://cdn.iconscout.com/icon/free/png-256/accept-123-475072.png"
          alt="icon to submit"
        />
      </Button>
    </Container>
  );
};
export default AddCryptoInput;
