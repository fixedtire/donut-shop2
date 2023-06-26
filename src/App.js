import "./App.css";
import { Item } from "./Item";
import { Navbar } from "./Navbar";
import { Cart } from "./Cart";
import { donuts } from "./Donuts.js";
import { useState } from "react";

/*
const reducer = (state, action) => {
  switch (action.type) {
      case: 'increment'
      return { items: state.items}
      default:
      throw new Error();
  }
}*/

function App() {
  /* const [ state, dispatch ] = useReducer(reducer, { items: donuts })
   */
  const [items, setItems] = useState(donuts);
  const [isCartOpen, setIsCartOpen] = useState(false);

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
    console.log(items.id);
  };

  const removeDonut = () => {
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
          removeDonut={() => removeDonut()}
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
