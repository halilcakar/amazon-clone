import './Home.css';

import React from 'react';

import Product from '../components/Product';
import { useStateValue } from '../StateProvider';
import { ProductProps } from '../types';

const Home = () => {
  const [{ products }] = useStateValue();

  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="./assets/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt="Bleeding Hero Banner"
        />

        {products.map((child: ProductProps[], index: number) => {
          return (
            <div key={index} className="home__row">
              {child.map((item) => (
                <Product key={item.id} {...item} />
              ))}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Home;
