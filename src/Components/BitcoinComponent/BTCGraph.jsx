import TradingViewWidget from "./TradingViewWidget";
import BTCHeader from "./BTCHeader";
import TrendingCoins from "../TrendingCoins";

function BTCGraph() {
  return (
    <>
      <div className="flex items-center font-sans space-x-2 pb-2 pl-1">
        <div className="pl-1">Cryptocurrencies</div>
        <div>
          <img src="./cryptoname.png" alt="cryptoname" className="h-4" />
        </div>
        <div>Bitcoin</div>
      </div>
      <div className="flex flex-col md:flex-row">
        <div className="flex-1 bg-white p-4 rounded-lg shadow-md">
          <BTCHeader />
          <TradingViewWidget />
        </div>
        <div className="flex flex-col flex-1 md:pl-5 mt-4 md:mt-0">
          <img
            src="./getstarted.png"
            alt="getstarted"
            className="w-full md:w-auto mb-4"
          />
          <div className="w-full">
            <TrendingCoins />
          </div>
        </div>
      </div>
    </>
  );
}

export default BTCGraph;
