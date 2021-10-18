import { Link } from "react-router-dom";
import Logo from "../../images/icons/Logo.png";
import { getAuth, signOut } from "firebase/auth";
import { useContext, useState } from "react";
import { AdminContext, CartContext } from "../../App";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import styled from "styled-components";

const Header = () => {
  const [email, setEmail] = useState(sessionStorage.getItem("email"));
  const [cart, setCart] = useContext(CartContext);

  const [admin, setAdmin] = useContext(AdminContext);
  // const [isAdmin, setIsAdmin] = useState(false);

  // setIsAdmin(admin.find((a) => a.email === email));

  const auth = getAuth();
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        sessionStorage.removeItem("email");
        setEmail("");
        setAdmin(false);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <MenuLink className="navbar-brand" to="/">
        <img
          src={Logo}
          style={{ objectFit: "contain", height: "40px" }}
          className="ml-5"
          alt=""
        />
      </MenuLink>
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
            <MenuLink className="nav-link" to="/">
              Home
            </MenuLink>
          </li>
          <li className="nav-item">
            <MenuLink className="nav-link" href="#">
              Others
            </MenuLink>
          </li>
          {admin ? (
            <li className="nav-item">
              <MenuLink className="nav-link" to="/manage-books">
                Admin
              </MenuLink>
            </li>) : (<li className="nav-item">
              <MenuLink className="nav-link" to="/order">
                Orders
              </MenuLink>
            </li>
          )}
          <li className="nav-item">
            <MenuLink className="nav-link" href="#">
              Deals
            </MenuLink>
          </li>

          <li className="nav-item" style={{ position: "relative" }}>
            <MenuLink className="nav-link" to="/checkout">
              <ShoppingCartIcon />
              <small
                style={{ position: "absolute", left: "15px", top: "-2px" }}
              >
                {cart.length}
              </small>{" "}
              Checkout
            </MenuLink>
          </li>
          <li className="nav-item">
            {email ? (
              <button onClick={handleSignOut} className="btn btn-primary">
                LogOut
              </button>
            ) : (
              <MenuLink to="/login">
                <button className="btn btn-primary">Login</button>
              </MenuLink>
            )}
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;

const MenuLink = styled(Link)`
  color: black !important;
`;
