import "./App.css";
import "./fonts.css";
import Wallet from "./images/icons/wallet.svg";
import Eth from "./images/icons/eth-coin.svg";
import Uniswap from "./images/icons/uniswap.svg";
import Pepe from "./images/icons/blondie-KRRr3ujk.png";
import Layer from "./images/layer.png";

const HowToBuy = () => {
  return (
    <div className="how-to-buy">
      <div className="how-to-buy-container">
        <div className="layer">
          <img src={Layer} alt="layer" />
        </div>
        <div className="buy-title">
          <p>How To Buy?</p>
        </div>
        <div className="buy-cards-container">
          <div className="buy-card">
            <img src={Wallet} alt="" />
            <p className="card-title">Create a Wallet</p>
            <p className="card-description">
              Download metamask or your wallet of choice from the app store or
              google play store for free. Desktop users, download the google
              chrome exten sion by going to metamask.io.
            </p>
          </div>
          <div className="buy-card">
            <img src={Eth} alt="" />
            <p className="card-title">Get Some ETH</p>
            <p className="card-description">
              Have ETH in your wallet to switch to $PEPE. If you don’t have any
              ETH, you can buy directly on metamask, transfer from another
              wallet, or buy on another exchange and send it to your wallet.
            </p>
          </div>
          <div className="buy-card">
            <img src={Uniswap} alt="" />
            <p className="card-title">Go to Uniswap</p>
            <p className="card-description">
              Connect to Uniswap. Go to app.uniswap.org in google chrome or on
              the browser inside your Metamask app. Connect your wallet. Paste
              the $PEPE token
            </p>
          </div>
          <div className="buy-card">
            <img src={Pepe} alt="" />
            <p className="card-title">Witch ETH for $PEPE</p>
            <p className="card-description">
              Switch ETH for $THISISMYCOIN. We have ZERO taxes so you don’t need to
              worry about buying with a specific slippage, although you may need
              to use slippage during times of market volatility.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowToBuy;
