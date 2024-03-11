
import "./App.css";
import { NextUIProvider } from "@nextui-org/react";
import Main from "./components/main/Main";


function App() {
  
  return (
    <NextUIProvider>
      <Main/>
    </NextUIProvider>
  );
}

export default App;
