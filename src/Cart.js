import "./App.css";
import { CartItem } from "./CartItem";

export const Cart = ({
  items,
  itemsAmount,
  removeDonut,
  quantityItems,
  setItems,
}) => {
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
              key={item.id}
              item={item}
              itemsAmount={itemsAmount}
              items={items}
              removeDonut={removeDonut}
              quantityItems={quantityItems}
              setItems={setItems}
            />
          );
        })}
        Total: <div>{totalPrice.toFixed(2)}$</div>
      </div>
    </div>
  );
};
