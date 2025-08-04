import "./navbar.css";
import { useNavigate } from 'react-router-dom';

function NavBar() {
  const navigate = useNavigate(); // ✅ Hook is now inside a Router

  return (
    <nav className="navbar navbar-expand-lg px-3 py-3 sticky-top nav-bar">
      <h1
        className="nav-bar-title-official"
        onClick={() => navigate('/')} // ✅ Navigates to homepage on click
        style={{ cursor: 'pointer' }}
      >
        BLUE SKY
      </h1>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarTogglerDemo02"
        aria-controls="navbarTogglerDemo02"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
        <ul className="navbar-nav ms-auto mb-2 mb-lg-0 nav-bar-elements">
          <li className="nav-item">
            <a className="nav-link" onClick={() => navigate("/")}>HOME</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" onClick={() => navigate("/menu")}>MENU</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" onClick={() => navigate("/faq")}>FAQ</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
