import Navbar from './navbar';
import ShoppingCart from './shoppingCart';
import Products from './products';

const Shop = () => {
  return (
    <>
      <Navbar />
      <div>
        <h1>this is the shop</h1>
      </div>
      <ShoppingCart />
      <Products />
    </>
  );
};

export default Shop;
