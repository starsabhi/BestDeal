// frontend/src/components/LoginFormPage/index.js
import React, { useState } from 'react';
import * as sessionActions from '../../store/session';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import './LoginFormPage.css';
import navLogo from '../../images/Navbar/bestDeal.png';

function LoginFormPage() {
  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session.user);
  const [credential, setCredential] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState([]);

  if (sessionUser) return <Redirect to="/" />;

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors([]);
    return dispatch(sessionActions.login({ credential, password })).catch(
      async (res) => {
        const data = await res.json();
        if (data && data.errors) setErrors(data.errors);
      }
    );
  };

  return (
    <>
      <div className="loginformMainDiv">
        <div className="loginFormimageforForm">
          <img className="loginFormimageforFormIMG" src={navLogo}></img>
        </div>
        <div className="loginformMainDivInner">
          <form className="formLoginformElement" onSubmit={handleSubmit}>
            Log in
            <ul>
              {errors.map((error, idx) => (
                <li key={idx}>{error}</li>
              ))}
            </ul>
            <label className="formLabelDivinnerforLogin">
              Username or Email
              <input
                type="text"
                value={credential}
                onChange={(e) => setCredential(e.target.value)}
                required
              />
            </label>
            <label className="formLabelDivinnerforLogin">
              Password
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </label>
            <button className="logInFormButtonforsubmit" type="submit">
              Log In
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default LoginFormPage;
