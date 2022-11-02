import './App.css';

export const Navbar = ({ title, products }) => {
    return (
        <div class="center">
            <div class="header">
                 <h1>{title}</h1>
                 <ul>
                    <li><a href="./about.html">ABOUT</a></li>
                    <li>x</li>
                    <li><a href="./kitchen.html">KITCHEN</a></li>
                 </ul>
                 <i class="cart-icon"></i><span className="cart-value">{products}</span>
             </div>
        </div>
    )
}