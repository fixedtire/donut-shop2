import "./App.css";

export const Navbar = ({ title, quantityItems, setIsCartOpen }) => {
  return (
    <div class="center">
      <div class="header">
        <div className="header-title">
          <h1>{title}</h1>
        </div>
        <div className="cart-icon-wrapper">
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
