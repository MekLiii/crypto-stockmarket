import { IProps } from "./types";
import { useFetch } from "../../../hooks/useFetch";
import { useState } from "react";
import { Card } from "./styles";
import { Spinner } from "./index";

const CryptoAtom = ({ id, name,onRemove }: IProps) => {
  const { data, isLoading, error } = useFetch(name, "USDT");
  let cryptoPrice = 0;
  if (data.p) {
    cryptoPrice = data.p.slice(0, 8);
  }

  return (
    <Card
      layout
      initial={{ scale: 0.9 }}
      animate={{
        scale: 1,
        transition: { delay: 0.5, type: "spring" },
      }}
      exit={{
        opacity: 0,
        transition: { delay: 0.5 },
      }}
      onClick={onRemove}
    >
      {isLoading && (
        <Spinner />
      )}
      {error && (
        <div>
          <h1>Error...</h1>
        </div>
      )}
      {!isLoading && !error && (
        <>
          <h1>{cryptoPrice}</h1>
          {name}
        </>
      )}
    </Card>
  );
};

export default CryptoAtom;
