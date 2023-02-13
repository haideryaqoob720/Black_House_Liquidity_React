import { Routes, Route, BrowserRouter } from "react-router-dom";

// Images

// Components
import LandingPage from "./components/LandingPage";
import BlockhouseLiquidity from "./components/BlockhouseLiquidity";

// CSS
import "./App.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route
            path="/liquidity"
            element={<BlockhouseLiquidity />}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
