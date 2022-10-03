import {useEffect,useState} from 'react';

export const useOpenWebSocket = (cryptoPairSymbols: string,pairTo:string) => {
  const [data, setData] = useState<any>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);
  useEffect(() => {
    const webSocket = new WebSocket(
      `wss://stream.binance.com:9443/ws/${cryptoPairSymbols.toLowerCase()}${pairTo.toLocaleLowerCase()}@trade`
    );
    webSocket.onmessage = (event) => {
        const data = JSON.parse(event.data);
        setData(data);
        setIsLoading(false);
    }
    webSocket.onerror = (error) => {
      console.log(error);
      setError(true);
    }
  }, []);
  
  return { isLoading, error, data };
};
