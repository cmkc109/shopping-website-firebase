import './productCard.scss';
import { useContext, useState } from 'react';
import Button from '../button/Button';
import { CartContext } from '../../context/cart.context';

const ProductCard = ({ product }) => {
  const { name, price, imageUrl } = product;
  const { addItemToCart } = useContext(CartContext)
  const [buttonText, setButtonText] = useState("Add to cart");

  const addProductToCart = () => {
    addItemToCart(product);
    setButtonText("Added to cart");

    setTimeout(() => {
      setButtonText("Add to cart");
    }, 1000);
  
  }
  return (
    <div className='product-card-container'>
      <img src={imageUrl} alt={`${name}`} />
      <div className='footer'>
        <span className='name'>{name}</span>
        <span className='price'>${price}</span>
      </div>
      <Button buttonType='inverted' onClick={addProductToCart}>{buttonText}</Button>
    </div>
  );
};

export default ProductCard;