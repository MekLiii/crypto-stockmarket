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
        <AddCryptoInput />
        <CryptoList />
      </Bar>
    </Box>
  );
};

export default Sidebar;
