import './CheckoutProduct.css';

import React, { FunctionComponent } from 'react';

import { useStateValue } from '../StateProvider';
import { Action, ProductProps } from '../types';

const CheckoutProduct: FunctionComponent<ProductProps> = (props) => {
  const { id, image, title, price, rating } = props;
  const [{ basket }, dispatch] = useStateValue();

  const removeFromBasket = () => {
    dispatch({
      type: 'REMOVE_FROM_BASKET',
      item: { ...props },
    });
  };

  return (
    <div className="checkoutProduct">
      <img
        className="checkoutProduct__image"
        src={image}
        alt="Checkout product"
      />
      <div className="checkoutProduct__info">
        <p className="checkoutProduct__title">{title}</p>
        <p className="checkoutProduct__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="checkoutProduct__rating">
          {Array(rating)
            .fill(0)
            .map((_, index) => (
              <p key={index}>💥</p>
            ))}
        </div>
        <button onClick={removeFromBasket}>Remove from basket</button>
      </div>
    </div>
  );
};

export default CheckoutProduct;
