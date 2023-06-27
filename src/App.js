import "./App.css";
import { Item } from "./Item";
import { Navbar } from "./Navbar";
import { Cart } from "./Cart";
import { donuts } from "./Donuts.js";
import { useState } from "react";

function App() {
  // HOOK THAT CONTROLS STATE OF DONUTS (ITEMS)
  const [items, setItems] = useState(donuts);

  // HOOK THAT CONTROLS STATE OF CART (BOOLEAN)
  const [isCartOpen, setIsCartOpen] = useState(false);

  // FUNCTION THAT ADDS DONUT TO CART
  const addDonut = (donutid) => {
    let updatedItems = items.map((donut) => {
      if (donutid === donut.id) {
        donut.amount += 1;
        return donut;
      } else {
        return donut;
      }
    });
    setItems(updatedItems);
    console.log(items);
  };

  const filteredCartItems = items.filter((el) => el.amount > 0);
  let quantityItems = items.reduce((acc, donut) => {
    return acc + donut.amount;
  }, 0);

  return (
    <div>
      {/* NAVBAR--- */}
      <Navbar
        title="Big-O-Shop"
        quantityItems={quantityItems}
        setIsCartOpen={setIsCartOpen}
      />

      {/* <Menu /> */}
      {isCartOpen && (
        <Cart
          items={filteredCartItems}
          quantityItems={quantityItems}
          setItems={setItems}
        />
      )}
      {/* ITEMS--- */}

      <div className="cards">
        <div className="wrapper">
          {donuts.map((donut) => {
            return (
              <Item
                key={donut.id}
                id={donut.id}
                name={donut.name}
                price={donut.price}
                description={donut.description}
                img={donut.img}
                addDonut={() => addDonut(donut.id)}
              />
            );
          })}
        </div>
      </div>

      {/* FOOTER--- */}
    </div>
  );
}

export default App;
