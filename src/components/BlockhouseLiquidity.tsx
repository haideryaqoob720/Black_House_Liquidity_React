// Images

// Components
import BlockHouseSidebar from "./liquidityComponent/BlockHouseSidebar";
import BlockHouseHeaderNav from "./liquidityComponent/BlockHouseHeaderNav";
import BlockHouseMainSec from "./liquidityComponent/BlockHouseMainSec";

function App() {
  return (
    <div className="App">
      <div>
        <div className="blockHouseLiquidityContainer">
          <div className="sectionLftHS">
            <BlockHouseSidebar />
          </div>
          <div className="sectionRhtHS">
            <BlockHouseHeaderNav />

            <BlockHouseMainSec />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
