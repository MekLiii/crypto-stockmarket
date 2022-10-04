import { Box, BoxWithName, BoxWithIcons, Icon, Img,Name } from "./style";
import { Settings, TrashCan } from "./index";
import { CryptoContext } from "./index";
import { useContext } from "react";

type TProps = {
  name: string;
  id: number;
  logo: string;
};

const CryptoListItem = ({ name, id,logo }: TProps) => {
  const { dispatch } = useContext(CryptoContext);
  const deleteCrypto = () => {
    dispatch({
      type: "DELETE",
      payload: id,
    });
  };
  return (
    <Box
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      exit={{ opacity: 0 }}
      layout
    >
      <BoxWithName>
        <img src={logo} alt="logo" style={{width:"25px",height:"auto"}}/>
        <Name>{name}</Name>
      </BoxWithName>
      <BoxWithIcons>
        <Icon bgc="rgba(0,0,0,0.3)" onClick={deleteCrypto}>
          <Img src={TrashCan} alt="icon for deleting item" />
        </Icon>
        <Icon bgc="rgba(0,0,0,0.6)" onClick={() => null}>
          <Img src={Settings} alt="icon for deleting item" />
        </Icon>
      </BoxWithIcons>
    </Box>
  );
};
export default CryptoListItem;
