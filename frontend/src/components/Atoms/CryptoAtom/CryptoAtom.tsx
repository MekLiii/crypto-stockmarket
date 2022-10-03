import { IProps } from "./types";
import { useOpenWebSocket } from "../../../hooks/useOpenWebSocket";
import { useState, useEffect } from "react";
import { Card } from "./styles";
import { Spinner } from "./index";
import { useQuery } from "@tanstack/react-query";
import { useCallback } from "react";

const CryptoAtom = ({ id, name, onRemove }: IProps) => {
  const { data, isLoading, error } = useOpenWebSocket(name, "USDT");
  const [timeOfLoadingData, setTimeOfLoading] = useState(0);
  const [testData, setTestData] = useState<any>(null);
  let cryptoPrice = 0;
  if (data.p) {
    cryptoPrice = data.p.slice(0, 8);
  }
  useEffect(() => {
    if (isLoading && timeOfLoadingData < 20) {
      const timeOfLoading = setTimeout(() => {
        setTimeOfLoading(timeOfLoadingData + 1);
      }, 1000);
      return () => clearTimeout(timeOfLoading);
    }

    return () => null;
  }, [timeOfLoadingData]);
  useEffect(() => {}, []);

  const fetchInfoAboutCrypto = useCallback(async () => {
    return fetch(`/infoAboutCrypto/${name}`, {
      // fetch("/api", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        return data;
      });
  }, []);

  const {
    isLoading: infoIsLoading,
    isError: infoIsError,
    data: infoData,
    error: infoError,
  } = useQuery([`cryptoItem${name}`], fetchInfoAboutCrypto);

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
      {isLoading && timeOfLoadingData < 20 && <Spinner />}
      {(error || timeOfLoadingData === 20) && (
        <div>
          <h1>Error...</h1>
          <p>{name}</p>
        </div>
      )}
      {!isLoading && !error && timeOfLoadingData < 20 && (
        <>
          <h1>{cryptoPrice}</h1>
          {name}
          <img src={infoData?.data?.logo} alt="icons of crypto" />
        </>
      )}
    </Card>
  );
};

export default CryptoAtom;
