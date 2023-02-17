// Images
// MainContainer
import mainContainerSearchIcon from "../Images/liquidity/mainContainerSearchIcon.png";
import liquidityTableLastRowDropdown from "../Images/liquidity/liquidityTableLastRowDropdown.png";

// Components
import BlockHouseSidebar from "./liquidityComponent/BlockHouseSidebar";
import BlockHouseHeaderNav from "./liquidityComponent/BlockHouseHeaderNav";
import StructuredBox from "./structuredComponents/structuredBox";

//css
import "../css/ownBootstrap.css";
import "../css/structured.css";
import "../css/landingPageCss/TradingSystem3rdSection.css";

function App() {
  return (
    <div className="App">
      <div>
        <div className="blockHouseLiquidityContainer">
          <div className="sectionLftHS">
            <BlockHouseSidebar
              // props={{
              //   name: "Hello",
              // }}
              activePageProp="structured"
            />
          </div>
          <div className="sectionRhtHS">
            <BlockHouseHeaderNav />

            <div>
              <div className="mainCOntainer structureMainCOnt">
                <h1>Overview</h1>
                <div className="structuredSearchRow row">
                  <div className="col-9">
                    <div className="mainContainerSearchDiv">
                      <span>
                        <img
                          src={mainContainerSearchIcon}
                          alt="mainContainerSearchIcon"
                        />
                      </span>
                      <input
                        type="search"
                        className="mainContainerSearch"
                        placeholder="Search"
                      />
                    </div>
                  </div>
                  <div className="col-1">
                    <center>
                      <div className="rightSearchBoxStructured" style={{ float: 'right' }}>
                        ETH Type
                        <img
                          src={liquidityTableLastRowDropdown}
                          alt="liquidityTableLastRowDropdown"
                        />
                      </div>
                    </center>
                  </div>
                  <div className="col-2">
                    <center>
                      <div className="rightSearchBoxStructured" style={{ float: 'right' }}>
                        Sort By: Newest first
                        <img
                          src={liquidityTableLastRowDropdown}
                          alt="liquidityTableLastRowDropdown"
                        />
                      </div>
                    </center>
                  </div>
                </div>
                <div className="structuredTilesSEC">
                  <div className="row">
                    <StructuredBox />
                    <StructuredBox />
                    <StructuredBox />
                    <StructuredBox />
                    <StructuredBox />
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
