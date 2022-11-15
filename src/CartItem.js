import React from "react";

export const CartItem = ({ item, itemsAmount }) => {
  return (
    <div className="cart-item">
      <h4>
        {itemsAmount[item.id].amount} X {item.name}
      </h4>
    </div>
  );
};
