import React from "react";

export const CartItem = ({ item, items, removeDonut }) => {
  let priceItem = item.amount * item.price;
  const removeItem = () => {
    let index = items.findIndex((obj) => obj.id === item.id);

    const newArray = items.filter((obj) => obj.id !== item.id);
    console.log(newArray);
    console.log(index);
    console.log(items);
    console.log(item);
  };
  return (
    <div className="cart-item">
      <h4>{item.name}</h4>

      <h4>{priceItem}$</h4>

      <h4 class="item-qty">{item.amount}</h4>

      <button class="incr-button">+</button>
      <button class="incr-button">-</button>

      <button class="delete_button" onClick={removeItem}>
        x
      </button>
    </div>
  );
};
