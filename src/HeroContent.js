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
          <a href="#" className="buy-now">
            <span>Invest Now</span>
            <img src={arrow} alt="arrow" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default HeroContent;
