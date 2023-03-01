import React from "react";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { NavLink } from "react-router-dom";
import CartContainer from "../components/Cart/CartContainer";
import Layout from "../Layout/Layout";

const Cart = () => {
  return (
    <>
    <Layout>
      <div className="cart">
        <NavLink to="/products">
          <i className="cart--nav">
            <AiOutlineArrowLeft />
          </i>
        </NavLink>
        <CartContainer />
      </div>
      </Layout>
    </>
  );
};

export default Cart;
