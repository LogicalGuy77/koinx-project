import { useState } from "react";
import Overview from "./Overview";
import Sentiment from "./Sentiment";
import AboutCoin from "./AboutCoin";

function DetailsComponent() {
  const [activeTab, setActiveTab] = useState("Overview");

  const navItems = [
    "Overview",
    "Fundamentals",
    "News Insights",
    "Sentiments",
    "Team",
    "Technicals",
    "Tokenomics",
  ];

  const content = (
    <div className="space-y-4 pt-6">
      <div className="bg-white rounded-lg shadow-md p-6 w-full md:w-auto">
        <Overview />
      </div>
      <div className="bg-white rounded-lg shadow-md p-6 w-full md:w-auto">
        <Sentiment />
      </div>
      <div className="bg-white rounded-lg shadow-md p-6 w-full md:w-auto">
        <AboutCoin />
      </div>
    </div>
  );

  return (
    <div className="bg-[#DEDFE2] pl-8 pt-4 pr-8 pb-8">
      <nav className="border-b border-gray-300">
        <ul className="flex space-x-8 overflow-x-auto">
          {navItems.map((item) => (
            <li key={item}>
              <button
                onClick={() => setActiveTab(item)}
                className={`pb-4 px-1 relative whitespace-nowrap ${
                  activeTab === item
                    ? "text-blue-600 font-semibold border-b-2 border-blue-600"
                    : "text-gray-600"
                }`}
              >
                {item}
              </button>
            </li>
          ))}
        </ul>
      </nav>
      {content}
    </div>
  );
}

export default DetailsComponent;
