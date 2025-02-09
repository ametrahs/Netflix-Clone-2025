import React from "react";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import InstagramIcon from "@mui/icons-material/Instagram";
import YoutubeIcon from "@mui/icons-material/YouTube";
import "./footer.css";
function Footer() {
  return (
    <>
      <div className="footer_outer_container">
        <div className="footer_inner_container">
          <div className="footer_icons">
            <FacebookOutlinedIcon />
            <span className="insta">
              <InstagramIcon />{" "}
            </span>
            <YoutubeIcon />
          </div>
          <div className="footer_data">
            <div>
              <ul>
                <li>Audio Description</li>
                <li>Investor Relations</li>
                <li>Legal Notice</li>
              </ul>
            </div>
            <div>
              <ul>
                <li>Gift Cards</li>
                <li>Terms of Use</li>
                <li>Corporate Information</li>
              </ul>
            </div>
            <div>
              <ul>
                <li>Media Center</li>
                <li>Privacy</li>
                <li>Contact Us</li>
              </ul>
            </div>
          </div>
          <div className="service_code">
            <p>Service Code</p>
          </div>
          <div className="copy-write">&copy;1997-2025 Netflix, Inc</div>
        </div>
      </div>
    </>
  );
}

export default Footer;
