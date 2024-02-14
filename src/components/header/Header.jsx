import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";

function Header() {
  return (
    <div className="header">
      <div className="inner-header">
        <img src={logo} alt="Coffee Shop Logo" className="logo" />
      </div>

      <ul className="nav-list">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/menu">Menu</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </div>
  );
}

export default Header;
