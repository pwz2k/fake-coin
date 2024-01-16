import "./App.css";
import "./fonts.css";
import FooterLogo from "./images/footer-logo.svg";
import FooterTelegram from "./images/icons/footer-telegram.svg";
import FooterTwitter from "./images/icons/footer-twitter.svg";
import FooterDiscord from "./images/icons/footer-discord.svg";

const Footer = () => {
  return (
    <div className="footer-main-container">
      <div className="footer-main">
        <div className="footer-container">
          <div className="footer-content">
            <div className="footer-logo">
              <img src={FooterLogo} alt="footer-logo" />
            </div>
            <div className="footer-categories">
              <a href="#">ROAD MAP</a>
              <a href="#">HOW TO BUY</a>
              <a href="#">ABOUT US</a>
            </div>
            <div className="footer-icons">
              <div className="footer-share">
                <a href="#">
                  <img src={FooterTelegram} alt="telegram" />
                </a>
                <a href="#">
                  <img src={FooterTwitter} alt="twitter" />
                </a>
                <a href="#">
                  <img src={FooterDiscord} alt="discord" />
                </a>
              </div>
            </div>
          </div>

          <div className="copyright-container">
            <div className="email">
              <a href="mailto:faketothemoon@gmail.com">
                FAKETOTHEMOON@GMAIL.COM
              </a>
            </div>
            <div className="copyright">
              <p>BLONDIE COIN @ 2024. ALL RIGHTS RESERVED.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
