// Images

// Components
import BlockHouseSidebar from "./components/BlockHouseSidebar";
import BlockHouseHeaderNav from "./components/BlockHouseHeaderNav";
import BlockHouseMainSec from "./components/BlockHouseMainSec";

// CSS
import "./App.css";

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
