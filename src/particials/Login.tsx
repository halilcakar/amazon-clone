import './Login.css';

import React, { ChangeEvent, FormEvent, MouseEvent, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

import { auth } from '../config/firebase';

const Login = () => {
  const history = useHistory();
  const [form, setForm] = useState({
    email: '',
    password: '',
  });

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const signIn = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    auth
      .signInWithEmailAndPassword(form.email, form.password)
      .then((auth) => {
        if (auth) {
          history.push('/');
        }
      })
      .catch(({ message }) => console.error(message));
  };

  const register = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    auth
      .createUserWithEmailAndPassword(form.email, form.password)
      .then((auth) => {
        if (auth) {
          history.push('/');
        }
      })
      .catch(({ message }) => console.error(message));
  };

  return (
    <div className="login">
      <Link to="/">
        <img
          className="login__logo"
          src="./assets/1024px-Amazon_logo.svg.png"
          alt="Amazon Login Logo"
        />
      </Link>

      <div className="login__container">
        <h1>Sign In</h1>

        <form onSubmit={signIn}>
          <h5>E-mail</h5>
          <input
            onChange={onChange}
            name="email"
            value={form.email}
            type="text"
          />

          <h5>Password</h5>
          <input
            onChange={onChange}
            name="password"
            value={form.password}
            type="password"
          />

          <button className="login_signInButton" type="submit">
            Login
          </button>
        </form>

        <p>
          By signing-in you agree to the AMAZON FAKE CLONE Conditions of Use &
          Sale. Please see our Privacy Notice, our Cookies Notice and out
          Interest-Based Ads Notice.
        </p>

        <button onClick={register} className="login__registerButton">
          Create your account
        </button>
      </div>
    </div>
  );
};

export default Login;
