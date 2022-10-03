import { Box, Bar } from "./style";
import { useState, useContext } from "react";
import { CryptoContext } from "./index";
import { AddCryptoInput } from "./index";
import { CryptoList } from "./index";

type TProps = {
  onClose: () => void;
};

const Sidebar = ({ onClose }: TProps) => {
  const [value, setValue] = useState("");
  const { state, dispatch } = useContext(CryptoContext);
  return (
    <Box
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <Bar
        initial={{ x: -100 }}
        animate={{ x: 0 }}
        transition={{ duration: 0.5 }}
        exit={{ x: -100 }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* <input
          placeholder="Please write symbol of crypto currency"
          
        />
        <button
          onClick={() =>
            dispatch({
              type: "ADD",
              payload: {
                id: state[state.length - 1]?.id + 1 || 1,
                name: value,
              },
            })
          }
        >
          Submit
        </button> */}
        <AddCryptoInput
          // value={value}
          // onChange={({ target }) => setValue(target.value)}
          // onButtonClick={() =>
          //   dispatch({
          //     type: "ADD",
          //     payload: {
          //       id: state[state.length - 1]?.id + 1 || 1,
          //       name: value,
          //     },
          //   })
          // }
        />
        <CryptoList />
      </Bar>
    </Box>
  );
};

export default Sidebar;
