// Images
// MainContainer
import mainContainerSearchIcon from "../../Images/liquidity/mainContainerSearchIcon.png";
import liquidityToken from "../../Images/liquidity/liquidityToken.png";
import liquidityTokenDropdown from "../../Images/liquidity/liquidityTokenDropdown.png";
import liquidityTokenTether from "../../Images/liquidity/liquidityTokenTether.png";
import liquidityTokenBitcoin from "../../Images/liquidity/liquidityTokenBitcoin.png";
import liquidityTableLastRowDropdown from "../../Images/liquidity/liquidityTableLastRowDropdown.png";
import liquidityTableLastRowRightDropdown from "../../Images/liquidity/liquidityTableLastRowRightDropdown.png";
import liquidityTableLastRowLeftDropdown from "../../Images/liquidity/liquidityTableLastRowLeftDropdown.png";

// css
import "../../css/blockHouseLiquidity.css";

function App() {
  return (
    <div className="mainCOntainer">
      <h1>Provide Liquidity</h1>

      <div className="mainContainerSearchDiv">
        <span>
          <img src={mainContainerSearchIcon} alt="mainContainerSearchIcon" />
        </span>
        <input
          type="search"
          className="mainContainerSearch"
          placeholder="Search"
        />
      </div>

      <div className="liquidityTable" style={{ marginTop: "27px" }}>
        <div className="provideLiquidityTable">
          <table className="provideLiquidityTable">
            <tbody>
              <tr style={{ marginTop: "-60px" }}>
                <td className="width10Percent">
                  <div className="liquidityTableTokenImgBox">
                    <img
                      className="addCourseinstructorImg"
                      src={liquidityToken}
                      alt="liquidityToken"
                    />
                  </div>
                  <div className="liquidityTableTokenImgBox liquidityTableTokenImgBoxTether">
                    <img
                      className="addCourseinstructorImg"
                      src={liquidityTokenTether}
                      alt="liquidityTokenTether"
                    />
                  </div>
                </td>
                <td>
                  <span className="liquidityGreyCOlor">Symbol</span>
                  <br />
                  <span>SGD / USD</span>
                </td>
                <td>
                  <span className="liquidityGreyCOlor">Interest</span>
                  <br />
                  <span>3.2%</span>
                </td>
                <td>
                  <span className="liquidityGreyCOlor">Tenor</span> <br />
                  <span>1 year</span>
                </td>
                <td>
                  <span className="liquidityGreyCOlor">Rating</span>
                  <br />
                  <span>AA</span>
                </td>
                <td
                  className="lastElementOfTableLiquidity"
                  style={{ textAlign: "end" }}
                >
                  <span className="liquidityGreyCOlor">Expiry</span>
                  <br />
                  <span>04/12/23</span>
                </td>
                <td className="lastElementOfTableLiquidity">
                  <div className="siderBarNavItemRightBox liquidityTokenDropdownBox">
                    <img
                      src={liquidityTokenDropdown}
                      alt="liquidityTokenDropdown"
                    />
                  </div>
                </td>
              </tr>
              <hr className="vehicalHr" />

              <tr>
                <td className="width10Percent">
                  <div className="liquidityTableTokenImgBox">
                    <img
                      className="addCourseinstructorImg"
                      src={liquidityToken}
                      alt="instructor1"
                    />
                  </div>
                  <div className="liquidityTableTokenImgBox liquidityTableTokenImgBoxBitcoin">
                    <img
                      className="addCourseinstructorImg"
                      src={liquidityTokenBitcoin}
                      alt="liquidityTokenBitcoin"
                    />
                  </div>
                </td>
                <td>
                  <span className="liquidityGreyCOlor">Symbol</span>
                  <br />
                  <span>SGD / USD</span>
                </td>
                <td>
                  <span className="liquidityGreyCOlor">Interest</span>
                  <br />
                  <span>2.85%</span>
                </td>
                <td>
                  <span className="liquidityGreyCOlor">Tenor</span> <br />
                  <span>1 year</span>
                </td>
                <td>
                  <span className="liquidityGreyCOlor">Rating</span>
                  <br />
                  <span>AA</span>
                </td>
                <td
                  className="lastElementOfTableLiquidity"
                  style={{ textAlign: "end" }}
                >
                  <span className="liquidityGreyCOlor">Expiry</span>
                  <br />
                  <span>04/12/23</span>
                </td>
                <td className="lastElementOfTableLiquidity">
                  <div className="siderBarNavItemRightBox liquidityTokenDropdownBox">
                    <span>
                      <img
                        src={liquidityTokenDropdown}
                        alt="liquidityTokenDropdown"
                      />
                    </span>
                  </div>
                </td>
              </tr>
              <hr className="vehicalHr" />

              <tr>
                <td className="width10Percent">
                  <div className="liquidityTableTokenImgBox">
                    <img
                      className="addCourseinstructorImg"
                      src={liquidityToken}
                      alt="instructor1"
                    />
                  </div>
                  <div className="liquidityTableTokenImgBox liquidityTableTokenImgBoxTether">
                    <img
                      className="addCourseinstructorImg"
                      src={liquidityTokenTether}
                      alt="liquidityTokenTether"
                    />
                  </div>
                </td>
                <td>
                  <span className="liquidityGreyCOlor">Symbol</span>
                  <br />
                  <span>SGD / USD</span>
                </td>
                <td>
                  <span className="liquidityGreyCOlor">Interest</span>
                  <br />
                  <span>3.2%</span>
                </td>
                <td>
                  <span className="liquidityGreyCOlor">Tenor</span> <br />
                  <span>1 year</span>
                </td>
                <td>
                  <span className="liquidityGreyCOlor">Rating</span>
                  <br />
                  <span>AA</span>
                </td>
                <td
                  className="lastElementOfTableLiquidity"
                  style={{ textAlign: "end" }}
                >
                  <span className="liquidityGreyCOlor">Expiry</span>
                  <br />
                  <span>04/12/23</span>
                </td>
                <td className="lastElementOfTableLiquidity">
                  <div className="siderBarNavItemRightBox liquidityTokenDropdownBox">
                    <span>
                      <img
                        src={liquidityTokenDropdown}
                        alt="liquidityTokenDropdown"
                      />
                    </span>
                  </div>
                </td>
              </tr>
              <hr className="vehicalHr" />

              <tr>
                <td className="width10Percent">
                  <div className="liquidityTableTokenImgBox">
                    <img
                      className="addCourseinstructorImg"
                      src={liquidityToken}
                      alt="instructor1"
                    />
                  </div>
                  <div className="liquidityTableTokenImgBox liquidityTableTokenImgBoxBitcoin">
                    <img
                      className="addCourseinstructorImg"
                      src={liquidityTokenBitcoin}
                      alt="liquidityTokenBitcoin"
                    />
                  </div>
                </td>
                <td>
                  <span className="liquidityGreyCOlor">Symbol</span>
                  <br />
                  <span>SGD / USD</span>
                </td>
                <td>
                  <span className="liquidityGreyCOlor">Interest</span>
                  <br />
                  <span>2.85%</span>
                </td>
                <td>
                  <span className="liquidityGreyCOlor">Tenor</span> <br />
                  <span>1 year</span>
                </td>
                <td>
                  <span className="liquidityGreyCOlor">Rating</span>
                  <br />
                  <span>AA</span>
                </td>
                <td
                  className="lastElementOfTableLiquidity"
                  style={{ textAlign: "end" }}
                >
                  <span className="liquidityGreyCOlor">Expiry</span>
                  <br />
                  <span>04/12/23</span>
                </td>
                <td className="lastElementOfTableLiquidity">
                  <div className="siderBarNavItemRightBox liquidityTokenDropdownBox">
                    <span>
                      <img
                        src={liquidityTokenDropdown}
                        alt="liquidityTokenDropdown"
                      />
                    </span>
                  </div>
                </td>
              </tr>
              <hr className="vehicalHr" />

              <tr>
                <td className="width10Percent">
                  <div className="liquidityTableTokenImgBox">
                    <img
                      className="addCourseinstructorImg"
                      src={liquidityToken}
                      alt="instructor1"
                    />
                  </div>
                  <div className="liquidityTableTokenImgBox liquidityTableTokenImgBoxTether">
                    <img
                      className="addCourseinstructorImg"
                      src={liquidityTokenTether}
                      alt="liquidityTokenTether"
                    />
                  </div>
                </td>
                <td>
                  <span className="liquidityGreyCOlor">Symbol</span>
                  <br />
                  <span>SGD / USD</span>
                </td>
                <td>
                  <span className="liquidityGreyCOlor">Interest</span>
                  <br />
                  <span>3.2%</span>
                </td>
                <td>
                  <span className="liquidityGreyCOlor">Tenor</span> <br />
                  <span>1 year</span>
                </td>
                <td>
                  <span className="liquidityGreyCOlor">Rating</span>
                  <br />
                  <span>AA</span>
                </td>
                <td
                  className="lastElementOfTableLiquidity"
                  style={{ textAlign: "end" }}
                >
                  <span className="liquidityGreyCOlor">Expiry</span>
                  <br />
                  <span>04/12/23</span>
                </td>
                <td className="lastElementOfTableLiquidity">
                  <div className="siderBarNavItemRightBox liquidityTokenDropdownBox">
                    <span>
                      <img
                        src={liquidityTokenDropdown}
                        alt="liquidityTokenDropdown"
                      />
                    </span>
                  </div>
                </td>
              </tr>
              <hr className="vehicalHr" />

              <tr>
                <td className="width10Percent">
                  <div className="liquidityTableTokenImgBox">
                    <img
                      className="addCourseinstructorImg"
                      src={liquidityToken}
                      alt="instructor1"
                    />
                  </div>
                  <div className="liquidityTableTokenImgBox liquidityTableTokenImgBoxBitcoin">
                    <img
                      className="addCourseinstructorImg"
                      src={liquidityTokenBitcoin}
                      alt="liquidityTokenBitcoin"
                    />
                  </div>
                </td>
                <td>
                  <span className="liquidityGreyCOlor">Symbol</span>
                  <br />
                  <span>SGD / USD</span>
                </td>
                <td>
                  <span className="liquidityGreyCOlor">Interest</span>
                  <br />
                  <span>2.85%</span>
                </td>
                <td>
                  <span className="liquidityGreyCOlor">Tenor</span> <br />
                  <span>1 year</span>
                </td>
                <td>
                  <span className="liquidityGreyCOlor">Rating</span>
                  <br />
                  <span>AA</span>
                </td>
                <td
                  className="lastElementOfTableLiquidity"
                  style={{ textAlign: "end" }}
                >
                  <span className="liquidityGreyCOlor">Expiry</span>
                  <br />
                  <span>04/12/23</span>
                </td>
                <td className="lastElementOfTableLiquidity">
                  <div className="siderBarNavItemRightBox liquidityTokenDropdownBox">
                    <span>
                      <img
                        src={liquidityTokenDropdown}
                        alt="liquidityTokenDropdown"
                      />
                    </span>
                  </div>
                </td>
              </tr>
              <hr className="vehicalHr" />

              <tr>
                <td className="width10Percent">
                  <div className="liquidityTableTokenImgBox">
                    <img
                      className="addCourseinstructorImg"
                      src={liquidityToken}
                      alt="instructor1"
                    />
                  </div>
                  <div className="liquidityTableTokenImgBox liquidityTableTokenImgBoxTether">
                    <img
                      className="addCourseinstructorImg"
                      src={liquidityTokenTether}
                      alt="liquidityTokenTether"
                    />
                  </div>
                </td>
                <td>
                  <span className="liquidityGreyCOlor">Symbol</span>
                  <br />
                  <span>SGD / USD</span>
                </td>
                <td>
                  <span className="liquidityGreyCOlor">Interest</span>
                  <br />
                  <span>3.2%</span>
                </td>
                <td>
                  <span className="liquidityGreyCOlor">Tenor</span> <br />
                  <span>1 year</span>
                </td>
                <td>
                  <span className="liquidityGreyCOlor">Rating</span>
                  <br />
                  <span>AA</span>
                </td>
                <td
                  className="lastElementOfTableLiquidity"
                  style={{ textAlign: "end" }}
                >
                  <span className="liquidityGreyCOlor">Expiry</span>
                  <br />
                  <span>04/12/23</span>
                </td>
                <td className="lastElementOfTableLiquidity">
                  <div className="siderBarNavItemRightBox liquidityTokenDropdownBox">
                    <span>
                      <img
                        src={liquidityTokenDropdown}
                        alt="liquidityTokenDropdown"
                      />
                    </span>
                  </div>
                </td>
              </tr>
              <hr className="vehicalHr" />
              <tr>
                <td className="width10Percent">
                  <div className="liquidityTableLastRowFlexLeftItem">
                    <span>
                      Item Per Page: 5
                      <img
                        src={liquidityTableLastRowDropdown}
                        alt="liquidityTableLastRowDropdown"
                      />
                    </span>
                  </div>
                </td>
                <td>{""}</td>
                <td>{""}</td>
                <td>{""}</td>
                <td>{""}</td>
                <td className="liquidityTablePagnicationRightSec">
                  <div className="liquidityTableLastRowFlexLeftItem liquidityTableLastRowFlexLeftItem1">
                    <span>
                      <img
                        src={liquidityTableLastRowLeftDropdown}
                        alt="liquidityTableLastRowLeftDropdown"
                      />
                      Prev 5
                    </span>
                  </div>
                  <div className="liquidityTableLastRowFlexLeftItem liquidityTableLastRowFlexLeftItem2">
                    <span>
                      <span className="liquidityPaginationActive">1</span>
                      <span>2</span>
                      <span>3</span>
                      <span>...</span>
                      <span>8</span>
                    </span>
                  </div>
                  <div className="liquidityTableLastRowFlexLeftItem liquidityTableLastRowFlexLeftItem3">
                    <span>
                      Next 5
                      <img
                        src={liquidityTableLastRowRightDropdown}
                        alt="liquidityTableLastRowRightDropdown"
                      />
                    </span>
                  </div>
                </td>
                <td>{""}</td>
              </tr>

              {/*  <div className="liquidityTableLastRowFlexLeftItem">
              <span>
                Item Per Page: 5
                <img
                  src={liquidityTableLastRowDropdown}
                  alt="liquidityTableLastRowDropdown"
                />
              </span>
            </div> */}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default App;
