import './Checkout.css';

import React from 'react';

import Subtotal from '../components/Subtotal';

const Checkout = () => {
  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          className="checkout__ad"
          src="./assets/OCC_Amazon1._CB423492668_.jpg"
          alt="Banner"
        />
        <div>
          <h2 className="checkout__title">Your shopping Basket</h2>

          {/* BasketItem */}
        </div>
      </div>
      <div className="checkout__right">
        <Subtotal />
      </div>
    </div>
  );
};

export default Checkout;
