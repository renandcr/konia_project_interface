import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { GlobalStyle } from "./styles/global";
import HomePage from "./pages";
import "./App.css";

function App() {
  return (
    <>
      <GlobalStyle />
      <ToastContainer autoClose={4000} />
      <HomePage />
    </>
  );
}

export default App;
