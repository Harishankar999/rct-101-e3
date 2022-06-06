import React from "react";
import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { CartContext } from "../../context/CartContext";
// use react-router Link or NavLink
import styles from "../../style.module.css";
const Navbar = () => {
  const { cartData } = useContext(CartContext);
  const { state, dispatch } = useContext(AuthContext);
  let navigate = useNavigate();
  const handleClick = () => {
    dispatch({
      type: "LOGOUT",
      token: null,
    });
    navigate("/login");
  };
  return (
    <div className={styles.container} data-cy="navbar">
      <Link to="/" data-cy="navbar-home-link">
        Home
      </Link>
      <div>
        <span data-cy="navbar-cart-items-count">Cart:{cartData.length}</span>
        <button onClick={handleClick} data-cy="navbar-login-logout-button">
          {state.isAuth ? "LOGOUT" : "LOGIN"}
        </button>
      </div>
    </div>
  );
};

export default Navbar;
