import { useEffect, useRef, memo } from "react";
import { useMediaQuery } from "react-responsive";

function TradingViewWidget() {
  const container = useRef();
  const isMobile = useMediaQuery({ maxWidth: 768 });

  useEffect(() => {
    // Check if the script already exists
    if (!document.getElementById("tradingview-widget-script")) {
      const script = document.createElement("script");
      script.id = "tradingview-widget-script";
      script.src =
        "https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js";
      script.type = "text/javascript";
      script.async = true;
      script.innerHTML = `
        {
          "width": "${isMobile ? "100%" : "980"}",
          "height": "${isMobile ? "400" : "610"}",
          "symbol": "BITSTAMP:BTCUSD",
          "timezone": "Asia/Kolkata",
          "theme": "light",
          "style": "3",
          "locale": "en",
          "hide_top_toolbar": true,
          "withdateranges": true,
          "range": "1M",
          "allow_symbol_change": false,
          "save_image": false,
          "calendar": false,
          "hide_volume": true,
          "support_host": "https://www.tradingview.com"
        }`;
      container.current.appendChild(script);
    }

    // Cleanup function to remove the script when the component unmounts
    return () => {
      const script = document.getElementById("tradingview-widget-script");
      if (script) {
        script.remove();
      }
    };
  }, [isMobile]);

  return (
    <div
      className="tradingview-widget-container"
      ref={container}
      style={{ height: isMobile ? "400px" : "610px", width: "100%" }}
    >
      <div className="tradingview-widget-container__widget"></div>
    </div>
  );
}

export default memo(TradingViewWidget);
