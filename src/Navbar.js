import "./App.css";

export const Navbar = ({ title, quantityItems, setIsCartOpen }) => {
  return (
    <div class="center">
      <div class="header">
        {/*  <i className="menu-icon"></i> */}
        <h1>{title}</h1>
        <ul>
          <li>
            <a href="./about.html">ABOUT</a>
          </li>
          <li>x</li>
          <li>
            <a href="./kitchen.html">KITCHEN</a>
          </li>
        </ul>
        <div className="cart-nav">
          <i
            className="cart-icon"
            onClick={() => setIsCartOpen((prevState) => !prevState)}
          ></i>
          <span className="cart-value">{quantityItems}</span>
        </div>
      </div>
    </div>
  );
};
