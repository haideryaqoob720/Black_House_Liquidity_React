// Images

// Components
import BlackHouseSidebar from "./components/BlackHouseSidebar";
import BlackHouseHeaderNav from "./components/BlackHouseHeaderNav";
import BlackHouseMainSec from "./components/BlackHouseMainSec";

// CSS
import "./App.css";

function App() {
  return (
    <div className="App">
      <div>
        <div className="blackHouseLiquidityContainer">
          <div className="sectionLftHS">
            <BlackHouseSidebar />
          </div>
          <div className="sectionRhtHS">
            <BlackHouseHeaderNav />

            <BlackHouseMainSec />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
