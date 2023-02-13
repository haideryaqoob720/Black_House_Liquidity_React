// Images
import thirdSecFirstRowTileIstImg from "../../Images/landingPage/thirdSecFirstRowTileIstImg.png";
import thirdSecFirstRowTileSecImg from "../../Images/landingPage/thirdSecFirstRowTileSecImg.png";
import thirdSecIstTileImg from "../../Images/landingPage/thirdSecIstTileImg.png";
import thirdSecSecTileImg from "../../Images/landingPage/thirdSecSecTileImg.png";
import thirdSecTrdTileImg from "../../Images/landingPage/thirdSecTrdTileImg.png";
import thirdSecFrtTileImg from "../../Images/landingPage/thirdSecFrtTileImg.png";
import thirdSecFthTileImg from "../../Images/landingPage/thirdSecFthTileImg.png";
import thirdSecSxtTileImg from "../../Images/landingPage/thirdSecSxtTileImg.png";

function App() {
  return (
    // **************************************** landingPage Third Section ********************************* */}
    <div className="landingThirdSec">
      <div className="width80PercentCenter">
        <div className="thirdSecInnerTopRow">
          <div>
            <h6>Products</h6>
            <h1>
              A Better Bond <span className="colorLightBlue">Trading</span>{" "}
              System
            </h1>
            <p>
              Providing a two sided marketplace that simplifies the issuance and
              trading process with technology driven solutions.
            </p>
          </div>
          <div className="thirdSecFirstRowTile">
            <div>
              <div className="thirdSecFirstRowTileContent">
                <img
                  src={thirdSecFirstRowTileIstImg}
                  alt="thirdSecFirstRowTileIstImg"
                />
                <h1>
                  Blockhouse <br />
                  <b>Borrow+</b>
                </h1>
                <p>
                  Providing borrowers a full CRM to onboard their deals, as well
                  as a bond auction mechanism for seamless issuance on public or
                  private pools to reduce their cost of capital
                </p>
              </div>
            </div>
            <div className="thirdSecFirstRowTileSec">
              <div className="thirdSecFirstRowTileContent">
                <img
                  src={thirdSecFirstRowTileSecImg}
                  alt="thirdSecFirstRowTileSecImg"
                />
                <h1>
                  Blockhouse <br />
                  <b>Trade+</b>
                </h1>
                <p>
                  Providing investors a traditional bond trading interface with
                  additional capabilities to create custom yield boosted
                  structured products as well as algorithmic HY investment
                  strategies
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="thirdSecInnerSecRow">
          <h1>
            Why Use <span className="colorLightBlue">Blockhouse</span>?
          </h1>
          <div className="thirdSecInnerSecRowTilesCont">
            <div className="row">
              <div className="col-4">
                <div className="thirdSecInnerSecRowTiles">
                  <div className="row">
                    <div className="col-8">
                      <h4>Atomic Settlement</h4>
                      <p>
                        All assets purchased have T + 0 settlement, payment vs
                        delivery system
                      </p>
                    </div>
                    <div className="col-4">
                      <img src={thirdSecIstTileImg} alt="thirdSecIstTileImg" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-4">
                <div className="thirdSecInnerSecRowTiles">
                  <div className="row">
                    <div className="col-8">
                      <h4>Atomic Settlement</h4>
                      <p>
                        All assets purchased have T + 0 settlement, payment vs
                        delivery system
                      </p>
                    </div>
                    <div className="col-4">
                      <img src={thirdSecSecTileImg} alt="thirdSecSecTileImg" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-4">
                <div className="thirdSecInnerSecRowTiles">
                  <div className="row">
                    <div className="col-8">
                      <h4>Atomic Settlement</h4>
                      <p>
                        All assets purchased have T + 0 settlement, payment vs
                        delivery system
                      </p>
                    </div>
                    <div className="col-4">
                      <img src={thirdSecTrdTileImg} alt="thirdSecTrdTileImg" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-4">
                <div className="thirdSecInnerSecRowTiles">
                  <div className="row">
                    <div className="col-8">
                      <h4>Atomic Settlement</h4>
                      <p>
                        All assets purchased have T + 0 settlement, payment vs
                        delivery system
                      </p>
                    </div>
                    <div className="col-4">
                      <img src={thirdSecFrtTileImg} alt="thirdSecFrtTileImg" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-4">
                <div className="thirdSecInnerSecRowTiles">
                  <div className="row">
                    <div className="col-8">
                      <h4>Atomic Settlement</h4>
                      <p>
                        All assets purchased have T + 0 settlement, payment vs
                        delivery system
                      </p>
                    </div>
                    <div className="col-4">
                      <img
                        className="thirdSecFifthIcon"
                        src={thirdSecFthTileImg}
                        alt="thirdSecFthTileImg"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-4">
                <div className="thirdSecInnerSecRowTiles">
                  <div className="row">
                    <div className="col-8">
                      <h4>Atomic Settlement</h4>
                      <p>
                        All assets purchased have T + 0 settlement, payment vs
                        delivery system
                      </p>
                    </div>
                    <div className="col-4">
                      <img src={thirdSecSxtTileImg} alt="thirdSecSxtTileImg" />
                    </div>
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
