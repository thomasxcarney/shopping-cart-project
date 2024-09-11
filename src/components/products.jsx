import { useState } from 'react';
import { useEffect } from 'react';
import styles from './Styles/product.module.css';

function Products({ cartNumber, handleClick }) {
  const [productArr, setProductArr] = useState([]);

  const updateState = async () => {
    const getProducts = async (number) => {
      const response = await fetch(`https://fakestoreapi.com/products/${number}`, { mode: 'cors' });
      const product = await response.json();
      return { name: product.title, photo: product.image, quantity: 0 };
    };

    const createProductArray = async (numberOfProducts) => {
      const productTempArr = [];
      for (let i = 1; i <= numberOfProducts; i++) {
        let productTemp = await getProducts(i);
        productTempArr.push(productTemp);
      }
      setProductArr(productTempArr);
      return;
    };

    await createProductArray(5);
  };

  useEffect(() => {
    updateState();
  }, []);

  return (
    <>
      {productArr.map((product) => (
        <div key={product.name} className={`productContainer ${styles.card}`}>
          <img src={product.photo} key={product.name} className={styles.images}></img>
          <p>{product.name}</p>
          <form>
            <input type="number" id={product.name} placeholder="1" step="1" />
            <button type="button" onClick={(e) => handleClick(e, product.name, product)}>
              Add to cart
            </button>
          </form>
        </div>
      ))}
    </>
  );
}

export default Products;
