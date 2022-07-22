import { Link } from "react-router-dom";

const Navbar = () => {
  const currentUser = { displayName: "Kadir Yildirim" };
  // const currentUser = false;

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container-fluid">
          <Link to="/" className="navbar-brand">
            <h3>React Movie App</h3>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo02"
            aria-controls="navbarTogglerDemo02"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            {currentUser ? (
              <>
                <ul className="navbar-nav mb-2 mb-lg-0">
                  <li className="nav-item">
                    <h6 className="loginName">{currentUser.displayName}</h6>
                  </li>
                  <li className="nav-item">
                    <Link to="/" className="nav-link">
                      Logout
                    </Link>
                  </li>
                </ul>
              </>
            ) : (
              <>
                <ul className="navbar-nav mb-2 mb-lg-0">
                  <li className="nav-item">
                    <Link to="/login" className="nav-link">
                      Login
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/register" className="nav-link">
                      Register
                    </Link>
                  </li>
                </ul>
              </>
            )}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
