import "./App.css";
import { CartItem } from "./CartItem";

export const Cart = ({ items, itemsAmount, donutID }) => {
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
              key={item.id}
              items={items}
              donutID={donutID}
            />
          );
        })}
      </div>
    </div>
  );
};
