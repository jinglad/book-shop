import Logo from "../../images/icons/Logo.png";

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="#">
        <img
          src={Logo}
          style={{ objectFit: "contain", height: "40px" }}
          className="ml-5"
          alt=""
        />
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse mr-5" id="navbarNav">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item active">
            <a className="nav-link" href="#">
              Home
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Others
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Admin
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link disabled"
              href="#"
              tabindex="-1"
              aria-disabled="true"
            >
              Deals
            </a>
          </li>
          <li className="nav-item">
            <button className="btn btn-primary">Login</button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
