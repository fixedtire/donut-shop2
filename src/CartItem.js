import React from "react";

export const CartItem = ({ item }) => {
  return (
    <div className="cart-item">
      <h4>{item.name}</h4>
    </div>
  );
};
