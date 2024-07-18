import { Link } from 'react-router-dom';
import styles from './Styles/navbar.module.css';

const Navbar = () => {
  return (
    <div className={styles.navBar}>
      <h2>this is the navbar</h2>
      <Link to="/">Home</Link>
      <Link to="shop">Shop</Link>
    </div>
  );
};

export default Navbar;
