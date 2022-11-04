import './App.css';
import { Item } from './Item';
import { Navbar } from './Navbar';
import { Menu } from './Menu';
import all from './img/all.png'
import { donuts } from './Donuts.js';
import bw from './img/bw.png'
import brown from './img/brown.png'
import flower from './img/flower.png'
import pink from './img/pink.png'
import striped from './img/striped.png'
import red from './img/red.png'
import { useState, useReducer } from 'react';

{/*
const reducer = (state, action) => {
  switch (action.type) {
      case: 'increment'
      return { items: state.items}
      default:
      throw new Error();
  }
}*/}

function App() {

 {/*
 const [ state, dispatch ] = useReducer(reducer, { items: donuts }) 
*/}
  const [ products, setProducts ] = useState(0);
  const [ items, setItems ] = useState([]);

  const handleClick = (i) => {
      setProducts(products + 1);
      const currentItem = JSON.stringify(donuts[i]);
      setItems(prev=>{prev, currentItem});
      console.log(JSON.stringify(donuts[i]));
      console.log({items});
  }

return (
  <div>

      {/* NAVBAR--- */}
      <Navbar 
      title="Big-O-Shop" 
      products={products}
      />
      
      {/* <Menu /> */}

      {/* ITEMS--- */}

    <div className="cards">
       <div className="wrapper">

        <Item 
        name={donuts[0].name}
        price={donuts[0].price}
        description={donuts[0].description}
        img={donuts[0].img}
        handleClick={()=>{handleClick(0)}}
        />

        <Item 
        name={donuts[1].name}
        price={donuts[1].price}
        description={donuts[1].description}
        img={donuts[1].img}
        handleClick={()=>{handleClick(1)}}
        /> 

        <Item 
        name={donuts[2].name}
        price={donuts[2].price}
        description={donuts[2].description}
        img={donuts[2].img}
        handleClick={()=>{handleClick(2)}}
        />

        <Item 
        name={donuts[3].name}
        price={donuts[3].price}
        description={donuts[3].description}
        img={donuts[3].img}
        handleClick={()=>{handleClick(3)}}
        />

        <Item 
        name={donuts[4].name}
        price={donuts[4].price}
        description={donuts[4].description}
        img={donuts[4].img}
        handleClick={()=>{handleClick(4)}}
        />
        
      </div>
      </div>
    
    {/* FOOTER--- */}
    

  </div>
  );
}

export default App;
