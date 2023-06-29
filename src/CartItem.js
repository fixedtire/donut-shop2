import React from "react";

export const CartItem = ({ item, items, setItems }) => {
  let priceItem = item.amount * item.price;

  const removeItem = () => {
    return setItems((prev) =>
      prev.map((el) => {
        if (el.id === item.id) {
          return { ...el, amount: 0 };
        }
        return el;
      })
    );
  };

  const minusItem = () => {
    return setItems((prev) =>
      prev.map((el) => {
        if (el.id === item.id) {
          return { ...el, amount: -1 };
        }
        return el;
      })
    );
  };

  const plusItem = () => {
    return setItems((prev) =>
      prev.map((el) => {
        if (el.id === item.id) {
          return { ...el, amount: +1 };
        }
        return el;
      })
    );
  };

  return (
    <div className="cart-item">
      <h4>{item.name}</h4>

      <h4>{priceItem}$</h4>

      <h4 class="item-qty">{item.amount}</h4>

      <button class="cart-button" onClick={plusItem}>
        +
      </button>
      <button class="cart-button" onClick={minusItem}>
        -
      </button>

      <button class="cart-button" onClick={() => removeItem()}>
        x
      </button>
    </div>
  );
};
