import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import ButtonSuccess from "./components/ButtonSuccess";
import "./App.css";
import ButtonWarning from "./components/ButtonWarning";
import SendTwoToneIcon from "@mui/icons-material/SendTwoTone";
import { Button, ButtonGroup } from "@mui/material";

function App() {
  const [count, setCount] = useState(0);

  const goTo = (href) => {
    window.location.href = href;
  };

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <ButtonGroup>
          <Button
            variant="contained"
            color="error"
            size="large"
            href="https://www.jdev.com.ar"
          >
            <SendTwoToneIcon />
          </Button>
          <ButtonWarning
            fn={() => goTo("https://www.jdev.com.ar")}
            text="Cuidado!"
          />
          <ButtonSuccess
            key="btnCantidad"
            text={`Cantidad es: ${count}`}
            fn={() => setCount((count) => count + 1)}
          />
        </ButtonGroup>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
