import './App.css';
import { Item } from './Item';
import { Navbar } from './Navbar';
import { Menu } from './Menu';
import all from './img/all.png'
import bw from './img/bw.png'
import brown from './img/brown.png'
import flower from './img/flower.png'
import pink from './img/pink.png'
import striped from './img/striped.png'
import red from './img/red.png'
import { useState } from 'react';

function App() {

  const [products, setProducts] = useState(0);

  const handleCLick = () => {
      setProducts({products} + 1);
  }

return (
  <div>
      <Navbar title="Big-O-Shop" products={products} />
      
      {/* <Menu /> */}

    <div className="cards">
       <div className="wrapper">

        <Item 
        name="Camel Caramel" 
        price="8.99"
        description="keep it oldschool"
        img={brown}
        handleClick={handleCLick}
        />

        <Item 
        name="Rednose Rhubard" 
        description="get sticky wit it"
        price="7.50"
        img={red}
        handleClick={handleCLick}
        /> 

        <Item 
        name="Unicorn" 
        description="it's magic!"
        price="10.20"
        img={pink}
        handleClick={handleCLick}
        />

        <Item 
        name="Lemon Submarine" 
        description="on board sailor!"
        price="7.60"
        img={striped}
        handleClick={handleCLick}
        />

        <Item 
        name="Chess KO" 
        description="don't overthink it"
        price="9.45"
        img={bw}
        handleClick={handleCLick}
        />
        

      </div>
      </div>
    

  </div>
  );
}

export default App;
