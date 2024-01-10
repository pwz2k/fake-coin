import "./App.css";
import "./fonts.css";

import { Theme, SwapWidget } from "@uniswap/widgets";
import "@uniswap/widgets/fonts.css";
import UniswapHero from "./images/uniswap-hero-2.png";
import Marquee from "./Marquee";

const UniswapWidget = () => {
  const theme: Theme = {
    primary: "#FFF",
    secondary: "#A9A9A9",
    interactive: "#2C2C49",
    container: "#0d0d10",
    module: "#14152A",
    accent: "#6246F7",
    outline: "#2C2C49",
    dialog: "#2C2C49",
    // fontFamily: "Josefin Sans",
  };
  return (
    <div className="uniswap-main">
      <div className="uniswap-widget-container">
        <div className="Uniswap">
          <SwapWidget theme={theme} />
        </div>
        <div className="uniswap-hero">
          <img src={UniswapHero} alt="uniswap-hero" />
        </div>
      </div>
      <Marquee />
    </div>
  );
};

export default UniswapWidget;
