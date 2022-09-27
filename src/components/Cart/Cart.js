import React from "react";

const Cart = ({ cart }) => {
  return (
    <div>
      <h2>Cart Summary</h2>
      <h4>Selected Item: {cart.length}</h4>
    </div>
  );
};

export default Cart;
