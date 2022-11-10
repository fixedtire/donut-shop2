import "./App.css";
import { Item } from "./Item";
import { Navbar } from "./Navbar";
import { Cart } from "./Cart";
import { donuts } from "./Donuts.js";
import { useState, useReducer } from "react";

{
  /*
const reducer = (state, action) => {
  switch (action.type) {
      case: 'increment'
      return { items: state.items}
      default:
      throw new Error();
  }
}*/
}

function App() {
  /* const [ state, dispatch ] = useReducer(reducer, { items: donuts })
   */
  const [items, setItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const addDonut = (donut) => {
    setItems((prev) => {
      return [...prev, donut];
    });
  };

  return (
    <div>
      {/* NAVBAR--- */}
      <Navbar
        title="Big-O-Shop"
        itemsLength={items.length}
        setIsCartOpen={setIsCartOpen}
      />

      {/* <Menu /> */}
      {isCartOpen && <Cart items={items} />}
      {/* ITEMS--- */}

      <div className="cards">
        <div className="wrapper">
          {donuts.map((donut) => {
            return (
              <Item
                key={donut.id}
                name={donut.name}
                price={donut.price}
                description={donut.description}
                img={donut.img}
                addDonut={() => addDonut(donut)}
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
