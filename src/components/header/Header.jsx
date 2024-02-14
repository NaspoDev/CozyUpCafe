import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import "../../css/header.css";

function Header() {
  return (
    <div className="header">
      <div className="inner-header">
        <Link to="/" className="router-link">
          <img src={logo} alt="Coffee Shop Logo" className="logo" />
        </Link>
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
  );
}

export default Header;
