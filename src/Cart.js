import "./App.css";
import { CartItem } from "./CartItem";

export const Cart = ({ items, itemsAmount }) => {
  return (
    <div className="cart">
      <div className="center-cart">
        <h1>you choose:</h1>
        {items.map((item, index) => {
          return (
            <CartItem
              key={item.id}
              item={item}
              itemsAmount={itemsAmount}
              items={items}
            />
          );
        })}
      </div>
    </div>
  );
};
