// Images
import assetImg from "../../Images/landingPage/assetImg.png";

function App() {
  return (
    <div className="landingUnlockSec">
      <div className="width80PercentCenter">
        <div className="innerLandingUnlcokSec">
          <div>
            <img src={assetImg} alt="assetImg" />
          </div>
          <div>
            <h1>
              <span className="colorLightBlue">Unlock</span> Private Credit with
              DeFi
            </h1>
            <p>
              Blockhouse uses DeFi to tokenize credit derivatives in a compliant
              manner to leverage the composability and settlement advantages of
              public blockchain infrastructure
            </p>
          </div>
        </div>
        <div className="innerLandingUnlcokSec2">
          <h5>
            The Asset <span className="colorLightBlue">Lifecycle</span>
          </h5>
          <div className="assetTiles">
            <div>
              <h3>01</h3>
              <h4>Tokenization</h4>
              <p>Securitize and auction bonds in a streamlined process</p>
            </div>
            <div>
              <h3>02</h3>
              <h4>Trade Execution</h4>
              <p>
                No difference from traditional process, get constant price
                discovery and instant execution on trades
              </p>
            </div>
            <div>
              <h3>03</h3>
              <h4>Settlement</h4>
              <p>Instant settlement with delivery vs payment method</p>
            </div>
            <div>
              <h3>04</h3>
              <h4>Post Trade Process</h4>
              <p>
                Post trade processing is done automatically, saving time and
                cost on compliance
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
