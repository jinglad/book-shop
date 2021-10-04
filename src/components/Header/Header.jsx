import { Link } from "react-router-dom";
import Logo from "../../images/icons/Logo.png";
import { getAuth, signOut } from "firebase/auth";
import { useContext, useState } from "react";
import { CartContext } from "../../App";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const Header = () => {
  const [email, setEmail] = useState(sessionStorage.getItem("email"));
  const [cart, setCart] = useContext(CartContext);
  const auth = getAuth();
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        sessionStorage.removeItem("email");
        setEmail("");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link className="navbar-brand" to="/">
        <img
          src={Logo}
          style={{ objectFit: "contain", height: "40px" }}
          className="ml-5"
          alt=""
        />
      </Link>
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
          <li className="nav-item">
            <Link className="nav-link" to="/">
              Home
            </Link>
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
            <a className="nav-link" href="#">
              Deals
            </a>
          </li>
          {email && (
            <li className="nav-item" style={{ position: "relative" }}>
              <Link className="nav-link" to="/checkout">
                <ShoppingCartIcon />
                <small
                  style={{ position: "absolute", left: "15px", top: "-2px" }}
                >
                  {cart.length}
                </small>{" "}
                Checkout
              </Link>
            </li>
          )}
          <li className="nav-item">
            {email ? (
              <button onClick={handleSignOut} className="btn btn-primary">
                LogOut
              </button>
            ) : (
              <Link to="/login">
                <button className="btn btn-primary">Login</button>
              </Link>
            )}
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
