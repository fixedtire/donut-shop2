import "./App.css";
import { CartItem } from "./CartItem";

export const Cart = ({ items }) => {
  return (
    <div className="cart">
      <h1>Your Choice:</h1>
      {items.map((item) => {
        return <CartItem key={item.id} item={item} />;
      })}
    </div>
  );
};
