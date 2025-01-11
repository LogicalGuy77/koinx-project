import BTCGraph from "./BitcoinComponent/BTCGraph";
import TradingViewWidget from "./BitcoinComponent/TradingViewWidget";
function Background() {
  return (
    <div className=" bg-[#DEDFE2] ">
      <BTCGraph />
      <TradingViewWidget />
    </div>
  );
}

export default Background;
