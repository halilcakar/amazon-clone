import './Subtotal.css';

import React, { FunctionComponent } from 'react';

import { currencyFormat, getBasketTotal } from '../config/helper';
import { useStateValue } from '../StateProvider';

const Subtotal: FunctionComponent = () => {
  const [{ basket }] = useStateValue();

  return (
    <div className="subtotal">
      <p>
        Subtotal ({basket.length} items):{' '}
        <strong>{currencyFormat(getBasketTotal(basket))}</strong>
      </p>

      <small className="subtotal__gift">
        <input type="checkbox" /> This order contains a gift
      </small>

      <button>Proceed to Checkout</button>
    </div>
  );
};

export default Subtotal;
