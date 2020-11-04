import './Product.css';

import React, { FunctionComponent } from 'react';

import { useStateValue } from '../StateProvider';
import { ProductProps } from '../types';

const Product: FunctionComponent<ProductProps> = (props) => {
  const { title, image, price, rating, id } = props;
  const [state, dispatch] = useStateValue();

  const addToBasket = () => {
    dispatch({
      type: 'ADD_TO_BASKET',
      item: {
        id,
        title,
        image,
        price,
        rating,
      },
    });
  };

  return (
    <div key={id} className="product">
      <div className="product__info">
        <p>{title}</p>
        <p className="product__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product__rating">
          {Array(rating)
            .fill(0)
            .map((_, index) => (
              <p key={index}>💥</p>
            ))}
        </div>
      </div>

      <img src={image} alt="Product" />

      <button onClick={addToBasket}>Add to Basket</button>
    </div>
  );
};

export default Product;
