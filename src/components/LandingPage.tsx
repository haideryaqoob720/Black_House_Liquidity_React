// Components
import Header from "./landingPageComponents/Header";
import HeroSection from "./landingPageComponents/HeroSection";
import UnlockDefi2ndSection from "./landingPageComponents/UnlockDefi2ndSection";
import TradingSystem3rdSection from "./landingPageComponents/TradingSystem3rdSection";
import TheProof4thSection from "./landingPageComponents/TheProof4thSection";
import WantAccess5thSection from "./landingPageComponents/WantAccess5thSection";
import Footer from "./landingPageComponents/Footer";

// CSS
import "../css/landingPage.css";
import "../css/ownBootstrap.css";

function App() {
  return (
    <div className="App">
      <div className="landingPageMain">
        {/* **************************************** landingPage Ist Section ********************************* */}
        <div className="landingPageMainHeroSec">
          <Header />

          <HeroSection />
        </div>

        {/* **************************************** landingPage Second Section ********************************* */}
        <UnlockDefi2ndSection />

        {/* **************************************** landingPage Third Section ********************************* */}
        <TradingSystem3rdSection />

        {/* **************************************** landingPage Fourth Section ********************************* */}
        <TheProof4thSection />

        {/* **************************************** landingPage Fifth Section ********************************* */}
        <WantAccess5thSection />

        {/* **************************************** landingPage Sixth Section____FOOTER ********************************* */}
        <Footer />
      </div>
    </div>
  );
}

export default App;
