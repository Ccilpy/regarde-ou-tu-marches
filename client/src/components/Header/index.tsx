import "./style.css";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <Link to="/" className="logo-link">
        <img
          src="../src/assets/logo/logo.svg"
          alt="retour à la page d'accueil"
        />
      </Link>
      <nav className="header-nav">
        <ul className="header-links">
          <li>
            {" "}
            <Link to="/play" className="link-navbar">
              jouer
            </Link>
          </li>
          <li>
            {" "}
            <Link to="/about" className="link-navbar">
              à propos
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
