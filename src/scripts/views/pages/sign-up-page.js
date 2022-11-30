/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/jsx-filename-extension */
// import { createUserWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { register } from '../../data/network-data';

export default function SignUpPage() {
  const navigate = useNavigate();
  const [inputEmail, setInputEmail] = useState('');
  const [inputPassword, setInputPassword] = useState('');

  const signUpWithFirebaseHandler = async (event) => {
    event.preventDefault();
    const data = {
      email: inputEmail,
      password: inputPassword,
    };
    const response = await register(data);
    if (response.error) {
      alert('error');
    }
    alert('succes');
    navigate('/sign-in');
  };

  return (
    <form className="form-authentication">
      <h1 className="form-heading py-1">Sign Up</h1>
      <div className="form-floating mb-3">
        <input
          type="email"
          className="form-control"
          id="input-email-sign-up"
          placeholder="name@example.com"
          value={inputEmail}
          onChange={(event) => {
            setInputEmail(event.target.value);
          }}
        />
        <label htmlFor="floatingInput">Email address</label>
      </div>
      <div className="form-floating">
        <input
          type="password"
          className="form-control"
          id="input-password-sign-up"
          placeholder="Password"
          value={inputPassword}
          onChange={(event) => {
            setInputPassword(event.target.value);
          }}
        />
        <label htmlFor="floatingPassword">Password</label>
      </div>
      <button
        type="submit"
        className="btn btn-primary btn-fluid"
        onClick={signUpWithFirebaseHandler}
      >
        Buat Akun
      </button>
      <Link to="/sign-in">
        Sudah memiliki akun?
      </Link>
    </form>
  );
}