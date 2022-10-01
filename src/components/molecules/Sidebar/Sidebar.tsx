import { Box, Bar } from "./style";
import { useState,useContext } from "react";
import {CryptoContext} from '../../../hooks/useCryptoContext'

type TProps = {
  onClose: () => void;
};

const Sidebar = ({ onClose }: TProps) => {
  const [value, setValue] = useState("");
  const {state,dispatch} = useContext(CryptoContext)
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
        <input placeholder="Please write symbol of crypto currency" value={value} onChange={({target}) => setValue(target.value)}/>
        <button
          onClick={() => dispatch({ type: "ADD", payload: {id:10,name:value} })}
        >Submit</button>
      </Bar>
    </Box>
  );
};

export default Sidebar;
