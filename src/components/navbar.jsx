import { Link } from 'react-router-dom';
import styles from './Styles/navbar.module.css';

const Navbar = ({ cartNumber }) => {
  return (
    <div className={styles.navBar}>
      <h2>this is the navbar</h2>
      <Link to="/">Home</Link>
      <Link to="/shop">Shop</Link>
      <div id="navBarCartContainer">
        <p>Cart</p>
        <p>{cartNumber}</p>
      </div>
    </div>
  );
};

export default Navbar;
