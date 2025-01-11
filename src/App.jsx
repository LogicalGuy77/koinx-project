import "./App.css";
import Background from "./Components/Background";
import Navbar from "./Components/Navbar";
import TradingViewWidget from "./Components/BitcoinComponent/TradingViewWidget";

function App() {
  return (
    <>
      <Navbar />
      <TradingViewWidget />
    </>
  );
}

export default App;
