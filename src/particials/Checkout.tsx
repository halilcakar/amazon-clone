import './Checkout.css';

import React from 'react';

import CheckoutProduct from '../components/CheckoutProduct';
import Subtotal from '../components/Subtotal';
import { useStateValue } from '../StateProvider';
import { ProductProps } from '../types';

const Checkout = () => {
  const [{ basket, user }] = useStateValue();
  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          className="checkout__ad"
          src="./assets/OCC_Amazon1._CB423492668_.jpg"
          alt="Banner"
        />
        <div>
          <h3>Hello, {user?.email || 'Guest'}</h3>
          <h2 className="checkout__title">Your shopping Basket</h2>

          {basket.map((item: ProductProps, index: number) => (
            <CheckoutProduct key={index} {...item} />
          ))}
        </div>
      </div>
      <div className="checkout__right">
        <Subtotal />
      </div>
    </div>
  );
};

export default Checkout;
