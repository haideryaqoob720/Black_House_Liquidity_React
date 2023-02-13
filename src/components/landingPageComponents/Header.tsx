// Images
import blockHouseLogo from "../../Images/landingPage/blockHouseLogo.png";
import darkModeIcon from "../../Images/landingPage/darkModeIcon.png";

function App() {
  return (
    <div className="landingPageHeaderNav">
      <div>
        <h5>For Borrowers</h5>
        <h5 className="headerNavSecondItem">Resources</h5>
      </div>
      <img
        className="headerNavLogo"
        src={blockHouseLogo}
        alt="blockHouseLogo"
      />
      <div className="headerNavRightSide">
        <img src={darkModeIcon} alt="darkModeIcon" />
        <h5>Launch Exchange</h5>
      </div>
    </div>
  );
}

export default App;
