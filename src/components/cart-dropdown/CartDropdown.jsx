import './cartDropdown.scss'
import React, { useContext } from 'react'
import { useNavigate } from 'react-router';
import Button from '../button/Button';
import CartItem from '../cart-item/CartItem';
import { CartContext } from '../../context/cart.context';

const CartDropdown = () => {
const {cartItems, setIsCartOpen, isCartOpen} = useContext(CartContext);
const navigate = useNavigate();

const goToCheckOut = () => {
  navigate('/checkout')
}

  return (
    <div className='cart-dropdown-container'>
        <div className='cart-items'>
          <span className="close-cart" onClick={() => setIsCartOpen(!isCartOpen)}>Close X</span>
        {cartItems.length ? (
          cartItems.map((cartItem) => (
            <CartItem key={cartItem.id} cartItem={cartItem} />
          ))
        ) : (
          <span className='empty-message'>Your cart is empty</span>
        )}
      </div>
    <Button onClick={goToCheckOut}>GO TO CHECKOUT</Button>
  </div>
  )
}

export default CartDropdown