import React from 'react';
import Link from 'next/link';
import { AiOutlineShopping , AiFillHeart } from 'react-icons/ai'


import  Cart  from './Cart';
import { useStateContext} from '../context/StateContext';

const Navbar = () => {
  const { showCart, setShowCart, totalQuantities } = useStateContext();

  return (
    <div className="navbar-container">
      <p className="logo navbar-items">
      
        <Link href="/">PV Store</Link>
        
      </p>
      <p className="navbar-items ">
      <Link href="/about-us">ABOUT US</Link>
      </p>
      <p className="navbar-items ">
      <Link href="/contact-us">CONTACT</Link>
      </p>

      <button type="button" className="cart-icon" onClick={() => setShowCart(true)}>
        <AiOutlineShopping />
        <span className="cart-item-qty">{totalQuantities}</span>
      </button>

      {showCart && <Cart />}
    </div>
  )
}

export default Navbar