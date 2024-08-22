import Navbar from './navbar';
import Products from './products';
import { useState } from 'react';
import ShoppingCart from './shoppingCart';

const Shop = () => {
  const [cartNumber, setCartNumber] = useState(0);
  const [cartArr, setCartArr] = useState([]);

  function handleClick(e, inputId, product) {
    let number = document.getElementById(inputId).value;
    let passedNumber;
    if (number === '') {
      passedNumber = 1;
    } else passedNumber = +number;
    let previousNumber = cartNumber;
    let newNumber = +previousNumber + +passedNumber;
    product.quantity += passedNumber;
    if (cartArr.length > 0) {
      let oldCart = [...cartArr];
      for (let i = 0; i < oldCart.length; i++) {
        if (oldCart[i].name === product.name) {
          setCartArr([...oldCart]);
          return setCartNumber(newNumber);
        }
      }
    }
    setCartArr([...cartArr, product]);
    setCartNumber(newNumber);
    return;
  }

  return (
    <>
      <Navbar cartNumber={cartNumber} />
      <ShoppingCart cart={cartArr} />
      <div>
        <h1>this is the shop</h1>
      </div>
      <Products cartNumber={cartNumber} handleClick={handleClick} />
    </>
  );
};

export default Shop;
