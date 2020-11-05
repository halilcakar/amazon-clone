import './Header.css';

import React from 'react';
import { Link } from 'react-router-dom';

import SearhIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';

import HeaderOption from '../components/HeaderOption';
import { auth } from '../config/firebase';
import { useStateValue } from '../StateProvider';

const Header = () => {
  const [{ basket, user }] = useStateValue();

  const handleAuth = () => {
    if (user) {
      auth.signOut();
    }
  };

  return (
    <div className="header">
      <Link to="/">
        <img
          className="header__logo"
          src="./assets/amazon_PNG11.png"
          alt="Amazon Logo"
        />
      </Link>

      <div className="header__search">
        <input className="header__searchInput" type="text" />
        <SearhIcon className="header__searchIcon" />
      </div>

      <div className="header__nav">
        {/* 
          I couldn't do it as to={!user && '/login'} 
          because typesciprt gave me an error
          thats boolean is not assignable to type ...
         */}
        <Link to={!user ? '/login' : ''}>
          <div onClick={handleAuth}>
            <HeaderOption
              one={`Hello ${user?.email.split('@')[0] || 'Guest'}`}
              two={user ? 'Sign out' : 'Sign In'}
            />
          </div>
        </Link>

        <HeaderOption one="Returns" two="& Orders" />

        <HeaderOption one="Your" two="Prime" />

        <Link to="/checkout">
          <div className="header__optionBasket">
            <ShoppingBasketIcon />
            <span className="header__optionLineTwo header__basketCount">
              {basket?.length}
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Header;
