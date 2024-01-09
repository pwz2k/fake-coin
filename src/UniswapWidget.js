// import "./App.css";
// import "./fonts.css";

// import { SwapWidget } from "@uniswap/widgets";
// import "@uniswap/widgets/fonts.css";
// import UniswapHero from "./images/uniswap-hero.png";
// import Marquee from "./Marquee";

// const UniswapWidget = () => {
//   return (
//     <div className="uniswap-main">
//       <div className="uniswap-widget-container">
//         <div className="Uniswap">
//           <SwapWidget />
//         </div>
//         <div className="uniswap-hero">
//           <img src={UniswapHero} alt="uniswap-hero" />
//         </div>
//       </div>
//       <Marquee />
//     </div>
//   );
// };

import "./App.css";
import { useState } from "react";
import { providers, ethers } from "ethers";
import detectEthereumProvider from "@metamask/detect-provider";
import { SwapWidget } from "@uniswap/widgets";

// const infuraId = process.env.REACT_APP_INFURA_ID;
const jsonRpcEndpoint = `https://mainnet.infura.io/v3/f622ee1f7df04b36b59b6d807e811eb8`;
const jsonRpcProvider = new providers.JsonRpcProvider(jsonRpcEndpoint);
const provider = new ethers.providers.Web3Provider(jsonRpcProvider);

function UniswapWidget() {
  const [account, setAccount] = useState({
    address: "",
    provider: provider,
  });

  async function connectWallet() {
    const ethereumProvider = await detectEthereumProvider();

    if (ethereumProvider) {
      const accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      });

      const address = accounts[0];
      setAccount({
        address: address,
        provider: ethereumProvider,
      });
    }
  }

  return (
    <div className="App">
      <div>
        <button onClick={connectWallet}>Connect Wallet</button>
      </div>
      <div className="Uniswap">
        <SwapWidget
          provider={account.provider}
          JsonRpcEndpoint={jsonRpcEndpoint}
        />
      </div>
    </div>
  );
}
export default UniswapWidget;
