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
    let check = items.filter((el) => {
      return el.id === donut.id;
    });
    if (check === donut.id) {
      amountItems[donut.id].amount += 1;
      setItemsAmount(...amountItems);
    } else if (check === undefined) {
      setItems((prev) => {
        return [...prev, donut];
      });
      amountItems[donut.id].amount += 1;
      setItemsAmount(...amountItems);
    }
    console.log(items);
    console.log(itemsAmount);
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
                id={donut.id}
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
