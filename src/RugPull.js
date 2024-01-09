import "./App.css";
import "./fonts.css";
import Layer from "./images/layer.png";
import RugPullHero from "./images/rug-pull-hero2.png";

const RugPull = () => {
  return (
    <div className="info-section rug-pull">
      <div className="info-section-hero">
        {/* <div class="background-container"></div> */}
        <img src={RugPullHero} alt="hero" />
      </div>
      <div className="info-section-content">
        <div className="layer">
          <img src={Layer} alt="layer" />
        </div>
        <p className="title">A Rug Pull</p>
        <p className="description">
          I could be the shittiest human and do a rug pull. But why rug pull for
          a few hundred thousand dollars when we all can go to the moon and be
          millionaires? All I ask in return for influencing a group of strangers
          to band together and pump up the most pointless coin of all time so
          that we can all become rich is to not purchase a ticket for a Blue
          Origin flight and to donate a minimum of 10% to a charitable
          organization. You can find a reputable organization to donate to by
          visiting GiveWell.org, CharityWatch.org and CharityNavigator.org.
        </p>
      </div>
    </div>
  );
};

export default RugPull;
