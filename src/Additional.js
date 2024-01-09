import "./App.css";
import "./fonts.css";
import AdditionalTwitter from "./images/icons/additional-twitter.svg";
import AdditionalTelegram from "./images/icons/additional-telegram.svg";

const Additional = () => {
  return (
    <div className="additional-info-container">
      <div className="additional-content-section">
        <p>
          Don’t just invest in Blondie’s coin, spread the
          <span> word about the Blondie coin</span> so it can moon to
          unthinkable numbers.
        </p>
      </div>
      <div className="additional-links">
        <div className="additional-link">
          <a href="#">HOW TO BUY</a>
        </div>
        <div className="additional-social">
          <a href="#" className="twitter">
            <img src={AdditionalTwitter} alt="" />
          </a>
          <a href="#" className="telegram">
            <img src={AdditionalTelegram} alt="" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Additional;
