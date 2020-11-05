import './App.css';

import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { auth } from './config/firebase';
import Checkout from './particials/Checkout';
import Header from './particials/Header';
import Home from './particials/Home';
import Login from './particials/Login';
import { useStateValue } from './StateProvider';

const App = () => {
  const [_, dispatch] = useStateValue();

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      //Logged user or null
      dispatch({
        type: 'SET_USER',
        item: authUser,
      });
    });
  }, []);

  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>
          <Route path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
