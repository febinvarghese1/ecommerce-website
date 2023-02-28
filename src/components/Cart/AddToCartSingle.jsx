import React, { useState, useContext,useEffect } from "react";
import { GlobalState } from "../../context/GlobalContext";
const AddToCartSingle = ({ product }) => {
  const [btn, setBtn] = useState(false);
  const { addCartItems } = useContext(GlobalState);

  const cartFunctionality = () => {
    setBtn(true);
    if (!btn) {
      return addCartItems(product.id, product);
    }
  };

  useEffect(() => {
    setTimeout(() => {
      setBtn(false);
    }, 3000);
  }, [btn]);
  return (
    <div className="product__right_bottom">
      <button onClick={cartFunctionality}>
        {btn ? <span>Added!</span> : <span>Add to cart</span>}
      </button>
    </div>
  );
};

export default AddToCartSingle;
