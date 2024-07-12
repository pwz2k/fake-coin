import "./App.css";
import "./fonts.css";
import AboutHero from "./images/about-us-hero.png";
import Layer from "./images/layer.png";
import TwiterBlue from "./images/icons/twitter-blue.svg";
import Telegram from "./images/icons/telegram.svg";
import Discord from "./images/icons/discord.svg";
import Instagram from "./images/icons/instagram.svg";
import Facebook from "./images/icons/facebook.svg";
import Whatsapp from "./images/icons/whatsapp.svg";

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
                <a className="token-one" href="https://app.uniswap.org/swap?chain=base&outputCurrency=0x37fc5e14aC765A5CeadA829A9Fc0D7d83d5de273">
                  Buy Blondie
                </a>
                <a className="token-two" href="https://app.uniswap.org/swap?chain=base&outputCurrency=0x37fc5e14aC765A5CeadA829A9Fc0D7d83d5de273">
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
            <a href="https://x.com/ogblondieguy">
              <img src={TwiterBlue} alt="https://x.com/ogblondieguy" />
            </a>
            <a href="https://t.me/blondiecoinofficial">
              <img src={Telegram} alt="" />
            </a>
            <a href="https://discord.gg/gjVArYkW">
              <img src={Discord} alt="" />
            </a>
            <a href="https://www.instagram.com/blondiecoin">
              <img src={Instagram} alt="" />
            </a>
            <a href="https://facebook.com/groups/blondiecoin/">
              <img src={Facebook} alt="" />
            </a>
            <a href="https://chat.whatsapp.com/CbNaReqWUHR7EMPLTxtHvj">
              <img src={Whatsapp} alt="" />
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
