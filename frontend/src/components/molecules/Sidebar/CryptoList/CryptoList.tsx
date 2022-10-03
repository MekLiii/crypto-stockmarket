import { CryptoListWrapper } from "./style";
import { CryptoContext } from "./index";
import { CryptoListItem } from "./index";
import { useState, useContext } from "react";

const CryptoList = () => {
  const { state, dispatch } = useContext(CryptoContext);
  return (
    <CryptoListWrapper>
      {state.map((el) => {
        return (
          <CryptoListItem name={el.name} key={el.id} id={el.id}/>
        );
      })}
    </CryptoListWrapper>
  );
};
export default CryptoList;
