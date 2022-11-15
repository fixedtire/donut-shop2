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

let amountItems = [
  { id: 1, amount: 0 },
  { id: 2, amount: 0 },
  { id: 3, amount: 0 },
  { id: 4, amount: 0 },
  { id: 5, amount: 0 },
];

function App() {
  /* const [ state, dispatch ] = useReducer(reducer, { items: donuts })
   */
  const [items, setItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [itemsAmount, setItemsAmount] = useState(amountItems);

  const addDonut = (donut) => {
    setItems((prev) => {
      return [...prev, donut];
    });
    amountItems[donut.id].amount += 1;
    console.log(itemsAmount);
    console.log(itemsAmount[3].amount);
  };

  console.log(items);

  return (
    <div>
      {/* NAVBAR--- */}
      <Navbar
        title="Big-O-Shop"
        itemsLength={items.length}
        setIsCartOpen={setIsCartOpen}
      />

      {/* <Menu /> */}
      {isCartOpen && <Cart items={items} itemsAmount={itemsAmount} />}
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
