import React, { useContext } from 'react';
import { CartContext } from '../../context/cart.context';
import './checkoutItem.scss'

const CheckoutItem = ({cartItem}) => {
  const { name, imageUrl, price, quantity } = cartItem;
  const { removeItemFromCart, addItemToCart, clearAllItemsFromCart } = useContext(CartContext);
  
  const handleRemoveItem = () => removeItemFromCart(cartItem)
  const handleAddItem = () => addItemToCart(cartItem)
  const handleClearItem = () => clearAllItemsFromCart(cartItem)

  return (
    <div className='checkout-item-container'>
    <div className='image-container'>
      <img src={imageUrl} alt={`${name}`} />
    </div>
    <span className='name'> {name} </span>
    <span className='quantity'>
      <div className='arrow' onClick={handleRemoveItem}>
        &#10094;
      </div>
      <span className='value'>{quantity}</span>
      <div className='arrow' onClick={handleAddItem}>
        &#10095;
      </div>
    </span>
    <span className='price'> $ {price * quantity}</span>
    <div className='remove-button' onClick={handleClearItem}>
      &#10005;
    </div>
  </div>
  )
}

export default CheckoutItem