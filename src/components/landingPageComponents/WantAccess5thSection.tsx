// Images
import heroSecLandingPageDownloadIcon from "../../Images/landingPage/heroSecLandingPageDownloadIcon.png";

function App() {
  return (
    //  * **************************************** landingPage Fifth Section ********************************* */}
    <div className="landingFifthSec">
      <div className="width80PercentCenter fifthSecInnerContent">
        <h1>
          Want <span className="colorLightBlue">Access</span>?
        </h1>
        <center>
          <div className="heroSectionLandingPageText">
            <button>
              <img
                src={heroSecLandingPageDownloadIcon}
                alt="heroSecLandingPageDownloadIcon"
              />
              See Deals
            </button>
            <button className="fifthSecInnerContentSecBtn">
              <img
                src={heroSecLandingPageDownloadIcon}
                alt="heroSecLandingPageDownloadIcon"
              />
              More Info
            </button>
          </div>
        </center>
      </div>
    </div>
  );
}

export default App;
