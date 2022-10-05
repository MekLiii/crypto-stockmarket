import { CryptoListWrapper } from "./style";
import { CryptoContext } from "./index";
import { CryptoListItem } from "./index";
import { useContext } from "react";

const CryptoList = () => {
  const { state } = useContext(CryptoContext);
  return (
    <CryptoListWrapper>
      {state.map((el) => {
        return (
          <CryptoListItem name={el.name as string} key={el.id} id={el.id} logo={el.logo as string}/>
        );
      })}
    </CryptoListWrapper>
  );
};
export default CryptoList;
