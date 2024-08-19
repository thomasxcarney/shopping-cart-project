import Navbar from './navbar';
import ShoppingCart from './shoppingCart';
import Products from './products';
import { useState } from 'react';

const Shop = () => {
  const [cartNumber, setCartNumber] = useState(0);

  function handleClick(e, number) {
    console.log(cartNumber);
    e.preventDefault();
    let passedNumber;
    if (number === '') {
      passedNumber = 1;
    } else passedNumber = number;
    let previousNumber = cartNumber;
    let newNumber = +previousNumber + +passedNumber;
    setCartNumber(newNumber);
  }

  return (
    <>
      <Navbar cartNumber={cartNumber} />
      <div>
        <h1>this is the shop</h1>
      </div>
      <ShoppingCart />
      <Products cartNumber={cartNumber} handleClick={handleClick} />
    </>
  );
};

export default Shop;
