import { useState, useContext } from "react";
import { Container, StyledInput, Button, Img } from "./style";
import { CryptoContext } from "./index";

type TProps = {
  // value: string;
  // onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  // onButtonClick: () => void;
};

const AddCryptoInput = () => {
  const [value, setValue] = useState("");
  const { state, dispatch } = useContext(CryptoContext);

  const addNewCrypto = () => {
    if(value.length === 0) return; 
    if(state.find(el => el.name === value)) return;
    dispatch({
      type: "ADD",
      payload: {
        id: state[state.length - 1]?.id + 1 || 1,
        name: value,
      },
    });
    setValue("");
  };
  return (
    <Container>
      <StyledInput
        type="text"
        value={value}
        onChange={({ target }) => setValue(target.value)}
        placeholder="Type write symbol of crypto currency"
      />
      <Button onClick={addNewCrypto}>
        <Img
          src="https://cdn.iconscout.com/icon/free/png-256/accept-123-475072.png"
          alt="icon to submit"
        />
      </Button>
    </Container>
  );
};
export default AddCryptoInput;
