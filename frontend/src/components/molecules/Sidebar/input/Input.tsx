import { useState, useContext, useCallback } from "react";
import { Container, StyledInput, Button, Img } from "./style";
import { CryptoContext } from "./index";
import { useQuery } from "@tanstack/react-query";


const AddCryptoInput = () => {
  const [value, setValue] = useState("");
  const [isSendAvalible, setIsSendAvalible] = useState(false);
  const { state, dispatch } = useContext(CryptoContext);

  const fetchInfoAboutCrypto = useCallback(async () => {
    return fetch(`/infoAboutCrypto/${value}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.data) {
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
        setIsSendAvalible(false);
        setValue("");
        return data;
      });
  }, [value]);

 useQuery([`cryptoItem`], fetchInfoAboutCrypto, {
    enabled: isSendAvalible,
  });
  const addNewCrypto = () => {
    if (value.length === 0) return;
    if (state.find((el) => el.name === value)) return;
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
        placeholder="Type symbol of crypto currency"
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
