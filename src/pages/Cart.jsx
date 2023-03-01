import React from "react";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { NavLink } from "react-router-dom";
import CartContainer from "../components/Cart/CartContainer";

const Cart = () => {
  return (
    <>
      <div className="cart">
        <NavLink to="/products">
          <i className="cart--nav">
            <AiOutlineArrowLeft />
          </i>
        </NavLink>
        <CartContainer />
      </div>
    </>
  );
};

export default Cart;
