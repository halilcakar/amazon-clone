import { Action, State } from '../types';

export const initialState: State = {
  basket: [],

  products: [
    [
      {
        id: 1,
        title:
          'The Lean Startup: How Constant Innovation Creates Radically Successful Businesses Paperback',
        price: 29.99,
        image: './assets/51Zymoq7UnL._AC_SY400_.jpg',
        rating: 4,
      },
      {
        id: 2,
        title:
          'Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Litre Glass Bown',
        price: 239.0,
        image: './assets/712d9t0WyLL._AC_UL320_.jpg',
        rating: 4,
      },
    ],
    [
      {
        id: 3,
        title: "Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor",
        price: 199.99,
        image: './assets/71Swqqe7XAL._AC_SX466_.jpg',
        rating: 3,
      },
      {
        id: 4,
        title:
          'Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric',
        price: 98.99,
        image: './assets/P6LTG_SQ1_0000000071_CHARCOAL_SLf.jpg',
        rating: 5,
      },
      {
        id: 5,
        title:
          'New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)',
        price: 598.99,
        image: './assets/816ctt5WV5L._AC_SX385_.jpg',
        rating: 4,
      },
    ],
    [
      {
        id: 6,
        title:
          "Samsung LC49RG90SSUXEN 49'Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440",
        price: 1094.98,
        image: './assets/6125mFrzr6L._AC_SX355_.jpg',
        rating: 5,
      },
    ],
  ],
};

const reducer = (state: State, action: Action) => {
  switch (action.type) {
    case 'ADD_TO_BASKET':
      return {
        ...state,
        basket: [...state.basket, action.item],
      };
    case 'REMOVE_FROM_BASKET':
      const index = state.basket.findIndex(
        (item) => item.id === action.item.id
      );
      let newBasket = [...state.basket];
      if (index > -1) {
        newBasket.splice(index, 1);
      }
      return {
        ...state,
        basket: newBasket,
      };
    default:
      return state;
  }
};

export default reducer;
