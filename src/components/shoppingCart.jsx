import { useState } from 'react';
import { useEffect } from 'react';
import styles from './Styles/product.module.css';

const ShoppingCart = ({ cart }) => {
  return (
    <>
      <div>
        <h1>this is the cart</h1>
      </div>
      <>
        {cart.map((product) => (
          <div key={product.name} className={`productContainer ${styles.card}`}>
            <img src={product.photo} key={product.name} className={styles.images}></img>
            <p>{product.name}</p>
            <p>Quantity: {product.quantity}</p>
          </div>
        ))}
      </>
    </>
  );
};

export default ShoppingCart;
