import "./App.css";
import "./fonts.css";
import AboutHero from "./images/about-us-hero.png";
import Layer from "./images/layer.png";
import TwiterBlue from "./images/icons/twitter-blue.svg";
import Telegram from "./images/icons/telegram.svg";
import Discord from "./images/icons/discord.svg";
import Unknown from "./images/icons/unknown.svg";
import Unknown1 from "./images/icons/unknown1.svg";
import Unknown2 from "./images/icons/unknown2.svg";
import Unknown3 from "./images/icons/unknown3.svg";

const AboutUs = () => {
  return (
    <div className="about-us-container">
      <div className="token-main-container">
        <div className="token-bg">
          <div className="token-container">
            <div className="token">
              <p className="token-title">Idiots Bonding Together</p>
              <div className="token-text">
                <p className="text-title">To Pump Up a Shit Coin.</p>
                    <p className="text-mini-title">The Cryptocurrency Equivalent of GameStop</p>
              </div>
              <div className="token-buttons">
                <a className="token-one" href="#">
                  Buy Blondie
                </a>
                <a className="token-two" href="#">
                  How To Buy Blondie
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="info-section">
        <div className="info-section-content">
          <div className="layer">
            <img src={Layer} alt="layer" />
          </div>
          <p className="title">ABOUT US</p>
          <p className="description">
            Imagine if hundreds of thousands of idiots decided to invest just $5
            into Blondie’s coin. Now picture if those same fools opted to post
            on their social media profiles once a month about this pointless
            coin. How about half of the investors create one post on Reddit to
            generate a buzz. Let’s half that half and have those people post
            comments in random subreddits. Now let’s circle back around to the
            hundreds of thousands of investors and have them message crypto,
            tech and financial journalists to encourage them to write a story
            about the Blondie coin. Then sit back and watch OUR coin gain over
            6,000,000% and deliver jaw-dropping returns
          </p>
          <div className="social-icons">
            <a href="#">
              <img src={TwiterBlue} alt="" />
            </a>
            <a href="#">
              <img src={Telegram} alt="" />
            </a>
            <a href="#">
              <img src={Telegram} alt="" />
            </a>
            <a href="#">
              <img src={Discord} alt="" />
            </a>
            <a href="#">
              <img src={Unknown} alt="" />
            </a>
            <a href="#">
              <img src={Unknown1} alt="" />
            </a>
            <a href="#">
              <img src={Unknown2} alt="" />
            </a>
            <a href="#">
              <img src={Unknown3} alt="" />
            </a>
          </div>
        </div>
        <div className="info-section-hero">
          <div class="background-container"></div>

          <img src={AboutHero} alt="hero" />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
