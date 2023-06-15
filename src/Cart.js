import "./App.css";
import { CartItem } from "./CartItem";

export const Cart = ({ items, itemsAmount, removeDonut, quantityItems }) => {
  const totalPrice = items.reduce(
    (acc, donut) => acc + donut.amount * donut.price,
    0
  );
  return (
    <div className="cart">
      <div className="center-cart">
        <h1>you choose:</h1>
        {items.map((item, index) => {
          return (
            <CartItem
              item={item}
              itemsAmount={itemsAmount}
              items={items}
              removeDonut={removeDonut}
              quantityItems={quantityItems}
            />
          );
        })}
        Total: <div>{totalPrice}$</div>
      </div>
    </div>
  );
};
