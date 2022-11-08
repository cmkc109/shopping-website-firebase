import './checkout.scss';
import React, {useContext} from 'react';
import { CartContext } from '../../context/cart.context';
import CheckoutItem from '../../components/checkout-item/CheckoutItem';
import Button from '../../components/button/Button';

const Checkout = () => {
    const {cartItems, cartTotal } = useContext(CartContext)

    const handleCheckOut = () => {
      alert(`Your total is $${cartTotal}. Thanks for the purchase!`)
    }

  return (
    <div className='checkout-container'>
    <div className='checkout-header'>
      <div className='header-block'>
        <span>Product</span>
      </div>
      <div className='header-block'>
        <span>Description</span>
      </div>
      <div className='header-block'>
        <span>Quantity</span>
      </div>
      <div className='header-block'>
        <span>Cost</span>
      </div>
      <div className='header-block'>
        <span>Remove</span>
      </div>
    </div>
    {cartItems.map((cartItem) => (
      <CheckoutItem key={cartItem.id} cartItem={cartItem} />
    ))}
    <div className='total'>TOTAL: ${cartTotal}</div>
    <Button onClick={handleCheckOut}>Checkout</Button>
  </div>
  )
}

export default Checkout