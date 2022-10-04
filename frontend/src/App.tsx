import { GridComponent, Container } from "./index";
import { CryptoAtom } from "./index";
import { Hamburger } from "./index";
import { AnimatePresence } from "framer-motion";
import Sidebar from "./components/molecules/Sidebar/Sidebar";
import { useState, useContext } from "react";
import { CryptoContext } from "./hooks/useCryptoContext";
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from "@tanstack/react-query";

const queryClient = new QueryClient();

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { state } = useContext(CryptoContext);
  return (
    <QueryClientProvider client={queryClient}>
      <Container>
        <AnimatePresence>
          {isMenuOpen && <Sidebar onClose={() => setIsMenuOpen(false)} />}
        </AnimatePresence>
        <Hamburger
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          open={isMenuOpen}
        />
        <AnimatePresence>
          <GridComponent>
            <CryptoAtom id={1} name="bitcoin" symbol="btc" />
            <CryptoAtom id={1} name="ethereum" symbol="eth" />
            <CryptoAtom id={1} name="BNB" symbol="bnb" />
            <CryptoAtom id={1} name="XRP" symbol="xrp" />

            {state.map((el) => (
              <CryptoAtom
                id={el.id}
                name={el.name}
                key={el.id}
                symbol={el.symbol}
              />
            ))}
          </GridComponent>
        </AnimatePresence>
      </Container>
    </QueryClientProvider>
  );
}

export default App;
