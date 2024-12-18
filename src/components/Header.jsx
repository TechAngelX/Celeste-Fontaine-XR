import { lazy } from "react";
import { Link } from "react-router-dom";

const Search = lazy(() => import("./Search"));

const Header = () => {
  const renderProfileDropdown = () => (

      /* Right Profile Button*/
      <div className="btn-group">
        <button
            type="button"
            className="btn profile-btn rounded-circle border me-3"
            data-bs-toggle="dropdown"
            aria-expanded="false"
            aria-label="Profile">
          <i className="bi bi-person-fill"></i>
        </button>
       {/*===============================*/}


        <ul className="dropdown-menu dropdown-menu-dark">
          <li><Link className="dropdown-item" to="/account/profile"><i className="bi bi-person-square"></i> My Profile</Link></li>
          <li><Link className="dropdown-item" to="/star/zone"><i className="bi bi-star-fill text-warning"></i> Star Zone</Link></li>
          <li><Link className="dropdown-item" to="/account/orders"><i className="bi bi-list-check text-primary"></i> Orders</Link></li>
          <li><Link className="dropdown-item" to="/account/wishlist"><i className="bi bi-heart-fill text-danger"></i> Wishlist</Link></li>
          <li><hr className="dropdown-divider" /></li>
          <li><Link className="dropdown-item" to="/account/notification"><i className="bi bi-bell-fill text-primary"></i> Notification</Link></li>
          <li><Link className="dropdown-item" to="/support"><i className="bi bi-info-circle-fill text-success"></i> Support</Link></li>
          <li><hr className="dropdown-divider" /></li>
          <li><Link className="dropdown-item" to="/"><i className="bi bi-door-closed-fill text-danger"></i> Logout</Link></li>
        </ul>
      </div>
  );

  return (
      <header className="header">
        <div className="container-fluid">
          <div className="row g-3">
            <div className="col-md-3 text-center">
              <Link to="/">
                <img alt="logo" src="/images/logo.webp" className="logo" />
              </Link>
            </div>
            <div className="col-md-5">
              <Search />
            </div>
            <div className="col-md-4 d-flex justify-content-end align-items-center">
              <div className="position-relative d-inline me-3">
                <Link to="/cart" className="btn btn-cart">
                  <i className="bi bi-cart3"></i>
                  <div className="position-absolute top-0 start-100 translate-middle badge bg-danger rounded-circle">
                    2
                  </div>
                </Link>
              </div>
              {renderProfileDropdown()}
            </div>
          </div>
        </div>
      </header>
  );
};

export default Header;
