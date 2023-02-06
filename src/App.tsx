import { ToastContainer } from "react-toastify";
import { GlobalStyle } from "./styles/global";
import "./App.css";

function App() {
  return (
    <>
      <GlobalStyle />
      <ToastContainer autoClose={4000} />
    </>
  );
}

export default App;
