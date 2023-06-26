import React from "react";

export const CartItem = ({
  key,
  item,
  items,
  setItems,
  removeDonut,
  quantityItems,
}) => {
  let priceItem = item.amount * item.price;

  const removeItem = (el) => {
    console.log(items);
    const updatedItems = items.filter((el) => el.id !== key);
    setItems(updatedItems);
    console.log(items);
    //  console.log(items);
    //   let index = items.findIndex((obj) => obj.id === item.id);
    //    const itemsUpdated = items.filter((obj) => obj.id !== item.id);
    // setItems(itemsUpdated);
    //console.log(itemsUpdated);
    //   quantityItems = itemsUpdated.reduce((acc, donut) => {
    //      return acc + donut.amount;
    //   }, 0);

    // console.log(quantityItems);
    // console.log(item);
  };

  const minusItem = () => {
    item.amount = item.amount - 1;
  };

  const plusItem = () => {
    item.amount = item.amount + 1;
  };

  return (
    <div className="cart-item" key={key}>
      <h4>{item.name}</h4>

      <h4>{priceItem}$</h4>

      <h4 class="item-qty">{item.amount}</h4>

      <button class="cart-button" onClick={removeDonut}>
        +
      </button>
      <button class="cart-button" onClick={minusItem}>
        -
      </button>

      <button class="cart-button" onClick={() => removeItem(key)}>
        x
      </button>
    </div>
  );
};
