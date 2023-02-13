// Images
import fourthSec1stImg from "../../Images/landingPage/fourthSec1stImg.png";
import fourthSecSecImg from "../../Images/landingPage/fourthSecSecImg.png";
import fourthSec3rdImg from "../../Images/landingPage/fourthSec3rdImg.png";

function App() {
  return (
    // * **************************************** landingPage Fourth Section ********************************* */}
    <div className="landingFourthSec">
      <div className="thirdSecInnerSecRow width80PercentCenter">
        <h1>
          <span className="colorLightBlue">The Proof</span>
          <br />
          is in the Application
        </h1>
        <div className="thirdSecInnerSecRowTilesCont">
          <div className="row">
            <div className="col-4">
              <div className="thirdSecInnerSecRowTiles fourthSecInnerSecRowTiles">
                <div className="fourthSecTiles">
                  <div className="fourthSecTilesImgBox">
                    <center>
                      <img src={fourthSec1stImg} alt="fourthSec1stImg" />
                    </center>
                  </div>
                  <div className="fourthSecInnerTile">
                    <h3>JPM Tokenizes on Aave</h3>
                    <p>
                      In addition, the exhibition reverses the cultural
                      conversion rate, realizing marketing as part of
                      production. Targeted traffic produces a business plan. The
                      interaction of the corporation and the client distorts
                      institutional buying and selling
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-4">
              <div className="thirdSecInnerSecRowTiles fourthSecInnerSecRowTiles">
                <div className="fourthSecTiles">
                  <div className="fourthSecTilesImgBox">
                    <center>
                      <img src={fourthSecSecImg} alt="fourthSecSecImg" />
                    </center>
                  </div>
                  <div className="fourthSecInnerTile">
                    <h3>KKR Tokenizes on AVAX</h3>
                    <p>
                      The interaction of the corporation and the client distorts
                      institutional buying and selling. In addition, the
                      exhibition reverses the cultural conversion rate,
                      realizing marketing as part of production
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-4">
              <div className="thirdSecInnerSecRowTiles fourthSecInnerSecRowTiles">
                <div className="fourthSecTiles">
                  <div className="fourthSecTilesImgBox">
                    <center>
                      <img src={fourthSec3rdImg} alt="fourthSec3rdImg" />
                    </center>
                  </div>
                  <div className="fourthSecInnerTile">
                    <h3>Apollo Prov HELOC</h3>
                    <p>
                      Targeted traffic produces a business plan. The interaction
                      of the corporation and the client distorts institutional
                      buying and selling. Targeted traffic produces a business
                      plan.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
