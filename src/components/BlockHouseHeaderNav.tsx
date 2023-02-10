// Images
// Top HEader
import topHeaderNightIcon from "./Images/topHeaderNightIcon.png";
import topHeaderNotificationsIcon from "./Images/topHeaderNotificationsIcon.png";
import topHeaderEthereumIcon from "./Images/topHeaderEthereumIcon.png";
import topHeaderWalletIcon from "./Images/topHeaderWalletIcon.png";
import topHeaderWalletDropdown from "./Images/topHeaderWalletDropdown.png";

// css
import "./css/blockHouseLiquidity.css";

function App() {
  return (
    <div className="topHeader">
      <div className="insidetopHeader">
        <div className="siderBarNavItemRightBox">
          <span>
            <img src={topHeaderNightIcon} alt="topHeaderNightIcon" />
          </span>
        </div>
        <div className="siderBarNavItemRightBox">
          <span>
            <img src={topHeaderNotificationsIcon} alt="topHeaderNightIcon" />
          </span>
        </div>
        <div
          className="siderBarNavItemRightBox"
          style={{ position: "relative", top: "6px" }}
        >
          <span style={{ position: "relative", top: "6px" }}>
            <img src={topHeaderEthereumIcon} alt="topHeaderNightIcon" />
          </span>
        </div>
        <div className="siderBarNavItemRightBox topHeaderWalletBox">
          <span>
            <img
              className="topHeaderWalletIcon"
              src={topHeaderWalletIcon}
              alt="topHeaderNightIcon"
            />
            <span>0x6e07 ... 137e</span>
            <img
              className="topHeaderWalletDropdown"
              src={topHeaderWalletDropdown}
              alt="topHeaderWalletDropdown"
            />
          </span>
        </div>
      </div>
    </div>
  );
}

export default App;
