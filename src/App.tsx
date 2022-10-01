import { GridComponent, Container } from "./index";
import { CryptoAtom } from "./index";
import { Hamburger } from "./index";
import { AnimatePresence } from "framer-motion";
import Sidebar from "./components/molecules/Sidebar/Sidebar";
import { useState, useContext } from "react";
import { CryptoContext } from "./hooks/useCryptoContext";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { state, dispatch } = useContext(CryptoContext);
  return (
    <Container>
      <AnimatePresence>
        {isMenuOpen && <Sidebar onClose={() => setIsMenuOpen(false)} />}
      </AnimatePresence>
      <Hamburger onClick={() => setIsMenuOpen(!isMenuOpen)} />
      <AnimatePresence>
        <GridComponent>
          <CryptoAtom id={1} name="btc" key={1} onRemove={() => null} />
          <CryptoAtom id={1} name="ETH" key={1} onRemove={() => null} />
          <CryptoAtom id={1} name="BNB" key={1} onRemove={() => null} />
          <CryptoAtom id={1} name="XRP" key={1} onRemove={() => null} />

          {state.map((el) => (
            <CryptoAtom
              id={el.id}
              name={el.name}
              key={el.id}
              onRemove={() => dispatch({ type: "DELETE", payload: el.id })}
              // onRemove={() => dispatch({ type: "ADD", payload: {id:10,name:"ETHW"} })}
            />
          ))}
        </GridComponent>
      </AnimatePresence>
    </Container>
  );
}

export default App;
