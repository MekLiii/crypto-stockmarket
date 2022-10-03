import { Box, BoxWithName, BoxWithIcons, Icon, Img } from "./style";
import { Settings, TrashCan } from "./index";
import { CryptoContext } from "./index";
import { useContext } from "react";

type TProps = {
  name: string;
  id: number;
};

const CryptoListItem = ({ name, id }: TProps) => {
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
        <p>{name}</p>
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
