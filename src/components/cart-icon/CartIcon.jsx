
import React, {useContext} from 'react';
import { CartContext } from '../../context/cart.context';

import './cartIcon.scss';
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';

const CartIcon = () => {
  const { isCartOpen, setIsCartOpen, cartCount } = useContext(CartContext)

  const toggleOpen = () => {
    setIsCartOpen(!isCartOpen)
  }

  return (
    <div className='cart-icon-container' onClick={toggleOpen}>
    <ShoppingIcon className='shopping-icon' />
    <span className='item-count'>{cartCount}</span>
    </div>
  )
}

export default CartIcon