import "./style.css";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer>
      <Link to="/" className="logo-link">
        <img
          src="../src/assets/logo/logo.svg"
          alt="retour à la page d'accueil"
        />
      </Link>
      <nav className="footer-nav">
        <ul className="footer-links">
          <li>
            <a
              href="mailto:regardesoutumarches@gmail.com"
              className="link-footer"
            >
              contact
            </a>
          </li>
          <li>
            {" "}
            <Link
              to="/about"
              className="link-footer"
              onClick={() => {
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
            >
              à propos
            </Link>
          </li>
          <li>
            {" "}
            <Link
              to="/legal-mentions"
              className="link-footer"
              onClick={() => {
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
            >
              mentions légales
            </Link>
          </li>
          <li>
            {" "}
            <Link
              to="/privacy-policy"
              className="link-footer"
              onClick={() => {
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
            >
              politique de confidentialité
            </Link>
          </li>
        </ul>
      </nav>
    </footer>
  );
}
