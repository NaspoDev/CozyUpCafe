import "../../css/footer.css";
import logo from "../../assets/logo.png";
import instaIcon from "../../assets/instagram_icon.png";
import fbIcon from "../../assets/facebook_icon.webp";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="footer">
      <div className="inner-footer">
        <div className="footer-content">
          <img src={logo} alt="Coffee Shop Logo" className="footer-logo" />
          <h3 className="company-name">CozyUpCafe</h3>
          <div className="right-side-content">
            <div className="socials-container">
              <a href="https://www.google.ca" target="_blank">
                <img src={instaIcon} alt="Instagram Icon" />
              </a>
              <a href="https://www.google.ca" target="_blank">
                <img src={fbIcon} alt="Facebook Icon" />
              </a>
            </div>
            <ul className="nav-list">
              <li>
                <Link to="/" className="router-link">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/menu" className="router-link">
                  Menu
                </Link>
              </li>
              <li>
                <Link to="/contact" className="router-link">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <p className="copyright-and-credits">
          &copy; CozyUpCafe, 2024. Developed by{" "}
          <a href="https://naspo.dev" className="naspodev-link" target="_blank">
            Naspo
          </a>
          .
        </p>
      </div>
    </div>
  );
}

export default Footer;
