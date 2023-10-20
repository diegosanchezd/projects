import "../stylesheets/header.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
        <nav className="nav_header">
            <ul className="ul_nav_header">
                <li><Link to={"/home"} className="link_header">Home</Link></li>
                <li><Link to={"/"} className="link_header">Login</Link></li>
                <li><Link to={"/settings"}  className="link_header">Settings</Link></li>
            </ul>
        </nav>
    </div>
  )
}

export default Header