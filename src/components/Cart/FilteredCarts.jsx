import React, { useContext, useEffect, useState } from "react";
import { GlobalState } from "../../context/GlobalContext";
import SingleCart from "./SingleCart";
import Summary from "./Summary";

const FilteredCarts = () => {
  const { filteredProduct } = useContext(GlobalState);
  const [totalPrice, setTotalPrice] = useState(0);

  const setTotalFunc = (price, cart, operation) => {
    if (operation === "add") {
      setTotalPrice((prev) => prev + price);
    }
    if(operation === 'addTotal'){
      setTotalPrice((prev) => prev + (cart*price));
    }
    if (operation === "removeAll") {
      setTotalPrice((prev) => prev - (price * cart));
    } 
    if(operation === "remove"){
      setTotalPrice((prev) => prev - price);
    }
  };

  return (
    <div>
      {filteredProduct.length > 0 ? (
        <div className="cart__maincontain">
          <div className="cart__contain">
            {filteredProduct.map((product) => (
              <SingleCart
                setTotalFunc={setTotalFunc}
                key={product.id}
                price={product.price}
                product={product}
              />
            ))}
          </div>
          <div className="cart__contain_summary">
            <Summary totalPrice={totalPrice} />
          </div>
        </div>
      ) : (
        <div className="cart__error_contain">
          <h1 className="cart--error">There is no item in the cart</h1>
        </div>
      )}
    </div>
  );
};

export default FilteredCarts;
