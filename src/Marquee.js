import "./fonts.css";
import MarqueeImg from "./images/blondie-bar.png";

const Marquee = () => {
  return (
    <div className="marquee">
      <img src={MarqueeImg} alt="" />
    </div>
  );
};

export default Marquee;
