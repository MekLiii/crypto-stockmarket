import { useQuery } from "@tanstack/react-query";
import { useCallback } from "react";
import { IProps } from "./types";
import { useOpenWebSocket } from "../../../hooks/useOpenWebSocket";
import { useState, useEffect, useContext } from "react";
import {
  Card,
  CardLogoSection,
  CardPriceSection,
  CardItem,
  Name,
} from "./styles";
import { Spinner } from "./index";
import { CryptoContext } from "./index";

const CryptoAtom = ({ id, name, symbol }: IProps) => {
  const [symbolOfCrypto, setSymbolOfCrypto] = useState<string>("");
  const { data, isLoading, error } = useOpenWebSocket(symbol, "USDT");
  const [timeOfLoadingData, setTimeOfLoading] = useState<number>(0);
  const cryptoPrice = data.p ? data.p.slice(0, 8) : 0;
  // if (data.p) {
  //   cryptoPrice = data.p.slice(0, 8);
  // }
  const { state, dispatch } = useContext(CryptoContext);

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
        if (data) {
          // dispatch({
          //   type: "ADD",
          //   payload: {
          //     symbol: data.data.symbol,
          //     name: data.data.name,
          //     id: id,
          //     logo: data.data.logo,
          //   },
          // });
        }

        // dispatch({
        //   type: "UPDATE",
        //   payload: {
        //     symbol: data.data.symbol,
        //     name: data.data.name,
        //     id: id,
        //     logo: data.data.logo,
        //   },
        // });
        return data;
      });
  }, []);

  const {
    isLoading: infoIsLoading,
    isError: infoIsError,
    data: infoData,
    error: infoError,
  } = useQuery([`cryptoItem${name}`], fetchInfoAboutCrypto);

  const getCryptoName = () => {
    if (infoData.data) {
      return infoData.data.name;
    }
    return name;
  };

  const getDataStatus = () => {
    if (isLoading || infoIsLoading) {
      return "loading";
    }
    if (
      error ||
      infoIsError ||
      timeOfLoadingData === 20 ||
      data.data === null
    ) {
      return "error";
    }
    return "success";
  };

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
    >
      {getDataStatus() === "loading" && (
        <div style={{display: "flex",flexDirection:"column",height: "100%",width: "100%",alignItems: "center"}}>
          <Spinner />
          <Name>{name}</Name>
        </div>
      )}
      {getDataStatus() === "error" && (
        <div>
          <h1>Error...</h1>
          <p>{name}</p>
        </div>
      )}
      {getDataStatus() === "success" && (
        <CardItem>
          <CardLogoSection>
            <img
              src={
                infoData?.data?.logo || state.find((el) => el.id === id)?.logo
              }
              alt="icons of crypto"
              style={{ width: "50px", height: "auto" }}
            />
            <Name>{getCryptoName()}</Name>
          </CardLogoSection>
          <CardPriceSection>
            <h1>{cryptoPrice}</h1>
          </CardPriceSection>
        </CardItem>
      )}
    </Card>
  );
};

export default CryptoAtom;
