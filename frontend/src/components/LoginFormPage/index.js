// frontend/src/components/LoginFormPage/index.js
import React, { useState } from 'react';
import * as sessionActions from '../../store/session';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, Redirect } from 'react-router-dom';
import './LoginFormPage.css';
import navLogo from '../../images/Navbar/logo.svg';
import Footer from '../Footer';

function LoginFormPage() {
  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session.user);
  const [credential, setCredential] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState([]);

  if (sessionUser) return <Redirect to="/products" />;

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
        <div className="loginFormimageforForm"></div>
        <div className="loginformMainDivInner">
          <form className="formLoginformElement" onSubmit={handleSubmit}>
            <img
              className="loginFormimageforFormIMG"
              src={navLogo}
              alt={navLogo}
            ></img>
            <div className="LoginHeaderorSignIn">Log in</div>
            <ul className="errorsSingup">
              {errors.map((error, idx) => (
                <li className="errorsSingup" key={idx}>
                  *{error}
                </li>
              ))}
            </ul>
            <div className="gapDivConetnet456789">
              <div className="insideDivwithname">*Username or Email</div>
              <input
                className="inputFormLogSignUp"
                type="text"
                value={credential}
                onChange={(e) => setCredential(e.target.value)}
                required
              />
            </div>
            <div className="gapDivConetnet456789">
              <div className="insideDivwithname">*Password</div>
              <input
                className="inputFormLogSignUp"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <button className="logInFormButtonforsubmit" type="submit">
              Log In
            </button>
            <NavLink className={'LinkChangesForSingLog'} to={'/signup'}>
              Don't have account then sign up
            </NavLink>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default LoginFormPage;
