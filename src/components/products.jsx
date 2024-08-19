import { useState } from 'react';
import { useEffect } from 'react';
import styles from './Styles/product.module.css';

function Products({ cartNumber, handleClick }) {
  const [imgArr, setImgArr] = useState([]);
  // const [quantity, setQuantity] = useState(1);
  // const [quantityUpdated, setQuantityUpdated] = useState(false);
  // const [cartNumber, setCartNumber] = useState();

  const updateState = async () => {
    const getProductImg = async (number) => {
      const response = await fetch(`https://fakestoreapi.com/products/${number}`, { mode: 'cors' });
      const product = await response.json();
      return { name: product.title, photo: product.image };
    };

    const createImageArray = async (numberOfProducts) => {
      const imageTempArr = [];
      for (let i = 1; i <= numberOfProducts; i++) {
        let image = await getProductImg(i);
        imageTempArr.push(image);
      }
      setImgArr(imageTempArr);
      return;
    };

    await createImageArray(5);
  };

  useEffect(() => {
    updateState();
  }, []);

  // function handleClick(e) {
  //   e.preventDefault();
  //   let previousNumber = cartNumber;
  //   let newNumber = previousNumber++;
  //   setCartNumber(newNumber);
  //   console.log('hi');
  // }

  // const handleInputChange = (event) => {
  //   setQuantity(event.target.value);
  //   setQuantityUpdated(true);
  // };

  // const sendClickToParent = (e, value) => {
  //   console.log(value);
  //   // if (quantityUpdated) {
  //   //   handleClick(e, quantity);
  //   // } else {
  //   //   setQuantity(1);
  //   //   handleClick(e, quantity);
  //   // }
  //   // setQuantityUpdated(false);
  //   return;
  // };

  return (
    <>
      {imgArr.map((product) => (
        <div key={product.name} className={`productContainer ${styles.card}`}>
          <img src={product.photo} key={product.name} className={styles.images}></img>
          <p>{product.name}</p>
          <form>
            <input type="number" id="input" placeholder="1" step="1" />
            <button
              type="button"
              onClick={(e) => handleClick(e, document.getElementById('input').value)}>
              Add to cart
            </button>
          </form>
        </div>
      ))}
    </>
  );
}

export default Products;
