import React from "react";

const Summary = ({ totalPrice }) => {
  const total = Math.abs(totalPrice).toFixed(2);
  const discountedTotal = Math.abs(
    totalPrice * ((100 - 10) / 100) + 20
  ).toFixed(2);
  const savings = Math.abs(
    (totalPrice - totalPrice * ((100 - 10) / 100)).toFixed(2)
  );

  return (
    <div className="summary">
      <div className="summary__top">
        <h1>Order summary</h1>
      </div>
      <div className="summary__center">
        <div>
          <h3>subtotal: </h3>
          <span> ${total}</span>
        </div>
        <div>
          <h3>Tax: </h3>
          <span> $20</span>
        </div>
        <div>
          <h3>Discount: </h3>
          <span>10 %</span>
        </div>
        <div>
          <h3>Estimated Total:</h3> <span>{discountedTotal}</span>
        </div>
        <p>Your total savings on this order is {savings}</p>
      </div>
      <div className="summary__bottom">
        <button>checkout</button>
      </div>
    </div>
  );
};

export default Summary;
