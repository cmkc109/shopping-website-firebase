import React, {useContext} from 'react';
import {  Outlet, Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/shoplogo.svg'
import { UserContext } from '../../context/user.context';
import { CartContext } from '../../context/cart.context';
import { signOutUser } from '../../utils/firebase/firebase';
import CartIcon from '../../components/cart-icon/CartIcon';
import CartDropdown from '../../components/cart-dropdown/CartDropdown';
import './navigation.scss'

const Navigation = () => {
   const { currentUser } = useContext(UserContext);
   const { isCartOpen } = useContext(CartContext)
   
    
    return (
      <> 
      <div className="navigation">
        <Link className="logo-container" to='/'>
        <div> <Logo style={{width: '60px'}}/> </div>
        </Link>
        <Link  style={{ textDecoration: 'none' }}  to='/'> 
        <h1>Welcome to Christy's Shop 👩</h1>
        </Link>
        <div className="links-container">
           <Link style={{ textDecoration: 'none' }} className="nav-link" to='/shop'>
              Shop all items  
           </Link>
           {currentUser ? <span className='nav-link' onClick={signOutUser}>Sign Out</span> :
           <Link style={{ textDecoration: 'none' }} className="nav-link" to='/auth'>
              Sign In 
           </Link>
            }
            <CartIcon />
        </div>
           { isCartOpen && <CartDropdown />}
      </div>
      <Outlet />
      </>
    )
  }

 export default Navigation 