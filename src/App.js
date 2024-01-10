import FAQ from "./Faq";
import AboutUs from "./AboutUs";
import Additional from "./Additional";
import AdditionalContent from "./AdditionalContent";
import "./App.css";
import Header from "./Header";
import HeroContent from "./HeroContent";
import HowToBuy from "./HowToBuy";
import Marquee from "./Marquee";
import Reviews from "./Reviews";
import RugPull from "./RugPull";
import Footer from "./Footer";
import UniswapWidget from "./UniswapWidget";

function App() {
  return (
    <div className="App">
      <div className="hero-main">
        <div className="hero-container">
          <Header />
          <div className="hero-content-main">
            <HeroContent />
          </div>
          <AdditionalContent />
        </div>
      </div>
      <AboutUs />
      <RugPull />
      <Marquee />
      <Additional />
      <Reviews />
      <HowToBuy />
      <UniswapWidget />
      <FAQ />
      <Footer />
    </div>
  );
}

export default App;
