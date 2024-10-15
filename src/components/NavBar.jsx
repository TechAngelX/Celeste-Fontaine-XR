import { Link } from "react-router-dom";
import '../styles/navBar.css';

const NavBar = () => {
  const navLinks = [
    { to: "/account/login", label: "Sign In" },
    { to: "/account/register", label: "Sign Up" },
    { to: "/checkout", label: "Checkout Page" },
    { to: "/contact-us", label: "Contact Us" },
    { to: "/blog", label: "Blog" },
    { to: "/blog/detail", label: "Blog Detail" },
    { to: "/fsafasf", label: "404 Page Not Found" },
    { to: "/500", label: "500 Internal Server Error" }
  ];

  const categories = [
    "Fashion",
    "Bespoke",
    "Accessories",
    "CFXR",
    "Jewellery",
    "About"
  ];

  return (
      <nav className="navbar navbar-expand-lg navbar-dark p-0">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            CÉLESTE FONTAINE
          </Link>
          <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav">
              <li className="nav-item dropdown">
                <button
                    className="btn nav-link dropdown-toggle fw-bold"
                    id="navbarDropdown"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                >
                  All Pages
                </button>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  {navLinks.map((link, index) => (
                      <li key={index}>
                        <Link className="dropdown-item" to={link.to}>
                          {link.label}
                        </Link>
                      </li>
                  ))}
                </ul>
              </li>
              {categories.map((category, index) => (
                  <li className="nav-item" key={index}>
                    <Link className="nav-link" to="/category">
                      {category}
                    </Link>
                  </li>
              ))}
            </ul>
            <label className="switch dark-mode-toggle">
              <input type="checkbox" id="darkModeToggle"/>
              <span className="slider"></span>
              <img src="/images/icons/darkmode_icon.png" alt="Dark Mode Icon" className="icon"/>
            </label>

          </div>
        </div>
      </nav>
  );
};

export default NavBar;
