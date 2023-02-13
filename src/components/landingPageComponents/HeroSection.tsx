// Images
import heroSecLandingPageDownloadIcon from "../../Images/landingPage/heroSecLandingPageDownloadIcon.png";

function App() {
  return (
    <div className="width80PercentCenter">
      <div className="heroSectionLandingPageText">
        <h1>
          Tap Into the <span>Next Generation</span> of Credit Trading
        </h1>

        <p>
          Trade bonds electronically with blazing fast settlement, minimal
          trading fees, novel HY investment products and trading strategies
        </p>

        <button>
          <img
            src={heroSecLandingPageDownloadIcon}
            alt="heroSecLandingPageDownloadIcon"
          />{" "}
          See Active Deals
        </button>
      </div>
    </div>
  );
}

export default App;
