import { Link } from 'react-router-dom';
import styles from './Styles/navbar.module.css';

const Navbar = ({ cartNumber, checkoutActive, handleCheckoutClick }) => {
  if (checkoutActive) {
    return (
      <div className={styles.navBar}>
        <h2>this is the navbar</h2>
        <Link to="/">Home</Link>
        <Link to="/shop">Shop</Link>
        <div id="navBarCartContainer">
          <p>Cart</p>
          <p>{cartNumber}</p>
          <button type="button" onClick={(e) => handleCheckoutClick(e)}>
            Back to shop
          </button>
        </div>
      </div>
    );
  } else {
    return (
      <div className={styles.navBar}>
        <h2>this is the navbar</h2>
        <Link to="/">Home</Link>
        <Link to="/shop">Shop</Link>
        <div id="navBarCartContainer">
          <p>Cart</p>
          <p>{cartNumber}</p>
          <button type="button" onClick={(e) => handleCheckoutClick(e)}>
            Checkout
          </button>
        </div>
      </div>
    );
  }
};

export default Navbar;
