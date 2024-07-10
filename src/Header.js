import { useState, useEffect } from "react";
import "./App.css";
import "./fonts.css";
import { Navbar, Nav } from "react-bootstrap";
import twitter from "./images/icons/twitter.svg";
import share from "./images/icons/share.svg";

const Header = () => {
  const [isMobile, setIsMobile] = useState(false);

  const handleResize = () => {
    if (window.innerWidth <= 768) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  };

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <Navbar expand="lg" className="navbar-container">
      <Navbar.Toggle aria-controls="basic-navbar-nav" />

      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className={isMobile ? "ml-auto" : "mr-auto"}>
          <div className="categories">
            {/* Desktop Menu */}
            <Nav.Link href="#">ABOUT</Nav.Link>
            <Nav.Link href="#">ROADMAP</Nav.Link>
            <Nav.Link href="https://app.uniswap.org/swap?chain=base&outputCurrency=0x37fc5e14aC765A5CeadA829A9Fc0D7d83d5de273">HOW TO BUY</Nav.Link>
          </div>

          <div className="social-icons">
            {/* Social Icons */}
            <Nav.Link href="https://x.com/ogblondieguy">
              <img src={twitter} alt="twitter" />
            </Nav.Link>
            <Nav.Link href="https://t.me/blondiecoinofficial">
              <img src={share} alt="share" />
            </Nav.Link>
          </div>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
