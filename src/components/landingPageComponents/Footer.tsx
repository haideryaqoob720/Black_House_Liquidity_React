// Images
import blockHouseLogo from "../../Images/landingPage/blockHouseLogo.png";
import footerLindedIn from "../../Images/landingPage/footerLindedIn.png";
import footerTwitter from "../../Images/landingPage/footerTwitter.png";
import footerWebsite from "../../Images/landingPage/footerWebsite.png";

function App() {
  return (
    // * **************************************** landingPage Sixth Section____FOOTER ********************************* */}
    <div className="landingFooter">
      <div className="landingPageHeaderNav">
        <img
          className="headerNavLogo"
          src={blockHouseLogo}
          alt="blockHouseLogo"
        />
        <div className="footerSocialIcons">
          <img src={footerLindedIn} alt="footerLindedIn" />
          <img src={footerTwitter} alt="footerTwitter" />
          <img src={footerWebsite} alt="footerWebsite" />
        </div>
        <div className="headerNavRightSide landingFooter">
          <p>
            <span className="lightGrey">made by</span> roobinium.io
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
