// Images
// sideBar
import blockHouseLogo from "./Images/blockHouseLogo.png";
import sideBarNavHomeIcon from "./Images/sideBarNavHomeIcon.png";
import sideBarDealsIcon from "./Images/sideBarDealsIcon.png";
import sideBarAuctionIcon from "./Images/sideBarActionIcon.png";
import sideBarAuctionRightLockIcon from "./Images/sideBarAuctionRightLockIcon.png";
import sideBarProductsIcon from "./Images/sideBarProductsIcon.png";
import sideBarProductsDropDownIcon from "./Images/sideBarProductsDropDownIcon.png";
import sideBarLPIcon from "./Images/sideBarLPIcon.png";
import sideBarStructureIcon from "./Images/sideBarStructureIcon.png";

// css
import "./css/blockHouseLiquidity.css";

function App() {
  return (
    <div className="siderbar">
      <img className="siderBarLogo" src={blockHouseLogo} alt="blockHouseLogo" />

      <div className="siderBarNavs">
        <div className="sideBarNavItem">
          <div>
            <img src={sideBarNavHomeIcon} alt="sideBarNavHomeIcon" />
            <span>Home</span>
          </div>
        </div>
        <div className="sideBarNavItem">
          <div>
            <img src={sideBarDealsIcon} alt="sideBarDealsIcon" />
            <span>Deals</span>
          </div>
          <div className="siderBarNavItemRightBox">
            <span>9</span>
          </div>
        </div>
        <div className="sideBarNavItem">
          <div>
            <img src={sideBarAuctionIcon} alt="sideBarAuctionIcon" />
            <span>Auction</span>
          </div>
          <div className="siderBarNavItemRightBox">
            <span style={{ paddingLeft: "5px" }}>
              <img
                src={sideBarAuctionRightLockIcon}
                alt="sideBarAuctionRightLockIcon"
              />
            </span>
          </div>
        </div>
      </div>

      <div className="siderBarNavs siderBarNavsSec">
        <div className="sideBarNavItem">
          <div>
            <img src={sideBarProductsIcon} alt="sideBarProductsIcon" />
            <span>Products</span>
          </div>
          <img
            style={{ position: "relative", left: "12px" }}
            src={sideBarProductsDropDownIcon}
            alt="sideBarProductsDropDownIcon"
          />
        </div>
        <div className="sideBarNavItem sideBarNavItemActive">
          <div>
            <img src={sideBarLPIcon} alt="sideBarLPIcon" />
            <span style={{ color: "white" }}>LP</span>
          </div>
        </div>
        <div className="sideBarNavItem">
          <div>
            <img src={sideBarStructureIcon} alt="sideBarStructureIcon" />
            <span>Structured</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
