import "./App.css";
import "./fonts.css";
import arrow from "./images/icons/arrow.svg";

const HeroContent = () => {
  return (
    <div className="hero-content-container">
      <div className="hero-content">
        <span className="mini-title">WELCOME TO</span>
        <p className="title">BLONDIE COIN</p>
        <div className="button-container">
          <a href="https://app.uniswap.org/swap?chain=base&outputCurrency=0x37fc5e14aC765A5CeadA829A9Fc0D7d83d5de273" className="buy-now">
            <span>Invest Now</span>
            <img src={arrow} alt="arrow" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default HeroContent;
