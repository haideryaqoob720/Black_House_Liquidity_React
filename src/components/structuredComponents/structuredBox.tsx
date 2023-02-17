// Images
// MainContainer
import liquidityToken from "../../Images/liquidity/liquidityToken.png";
import liquidityTokenBitcoin from "../../Images/liquidity/liquidityTokenBitcoin.png";
import singapore from "../../Images/liquidity/singapore.png";
import ethereumToken from "../../Images/liquidity/ethereumToken.png";

function App() {
  return (
    <div className="col-4">
      <div className="thirdSecInnerSecRowTiles structuredTile">
        <div className="structuredTileFirstSec">
          <div className="displayFlexContentSpaceBtw">
            <h2>SGB-ETF</h2>
            <div>
              <button>ETF Vault</button>
              <button>AA</button>
            </div>
          </div>
          <hr className="vehicalHr" />
          <div className="displayFlexContentSpaceBtw">
            <div className="structuredTileSecSec">
              <p>Total Projected Yield (APY)</p>
              <h6>20.79%</h6>
            </div>
            <div className="structuredTileSecSecTokensBox">
              <div className="liquidityTableTokenImgBox">
                <img
                  src={ethereumToken}
                  alt="ethereumToken"
                />
              </div>
              <div className="liquidityTableTokenImgBox">
                <img style={{marginLeft: '-8px'}}
                  src={singapore}
                  alt="singapore"
                />
              </div>
            </div>
          </div>
          <hr className="vehicalHr" />
          <div className="displayFlexContentSpaceBtw structuredTileSecSec">
            <p>Current Deposits</p>
            <h6 className="paddingTop16Px">5,941.2 ETH</h6>
          </div>
          <div className="progressSection">
            <div className="progressCompletedLine"></div>
          </div>
          <div className="displayFlexContentSpaceBtw structuredTileSecSec">
            <p>Max Capacity</p>
            <h6 className="paddingTop16Px">20k ETH</h6>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
