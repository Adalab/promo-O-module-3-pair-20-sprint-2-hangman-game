import { NavLink } from 'react-router-dom';

function Footer() {
  return (
    <footer className="footer">
      <nav>
        <ul>
          <li className="footer__menu-item">
            <NavLink
              to="/"
              className="footer__menu-link"
              activeClassName="active"
              exact
            >
              A jugar
            </NavLink>
          </li>
          <li className="footer__menu-item">
            <NavLink
              to="/instructions"
              className="footer__menu-link"
              activeClassName="active"
              exact
            >
              ¿Cómo se juega?
            </NavLink>
          </li>
          <li className="footer__menu-item">
            <NavLink
              to="/options"
              className="footer__menu-link"
              activeClassName="active"
              exact
            >
              Más opciones
            </NavLink>
          </li>
        </ul>
      </nav>
      <small className="footer__copy">© Adalab</small>
    </footer>
  );
}

export default Footer;
