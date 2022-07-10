// frontend/src/components/SignupFormPage/index.js
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, Redirect } from 'react-router-dom';
import * as sessionActions from '../../store/session';
import navLogo from '../../images/Navbar/logo.svg';
import Footer from '../Footer';

function SignupFormPage() {
  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session.user);
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errors, setErrors] = useState([]);

  if (sessionUser) return <Redirect to="/products" />;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password === confirmPassword) {
      setErrors([]);
      return dispatch(
        sessionActions.signup({ email, username, password })
      ).catch(async (res) => {
        const data = await res.json();
        if (data && data.errors) setErrors(data.errors);
      });
    }
    return setErrors([
      'Confirm Password field must be the same as the Password field',
    ]);
  };

  return (
    <>
      <div className="loginformMainDiv">
        <div className="loginFormimageforForm"></div>
        <div className="loginformMainDivInner">
          <form className="formLoginformElement" onSubmit={handleSubmit}>
            <img className="loginFormimageforFormIMG" src={navLogo}></img>
            <div className="LoginHeaderorSignIn">Sign-up</div>
            <ul className="errorsSingup">
              {errors.map((error, idx) => (
                <li className="errorsSingup" key={idx}>
                  * {error}
                </li>
              ))}
            </ul>
            <div className="gapDivConetnet456789">
              <div className="insideDivwithname">*Email</div>
              <input
                className="inputFormLogSignUp"
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="gapDivConetnet456789">
              <div className="insideDivwithname">*Username</div>
              <input
                className="inputFormLogSignUp"
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
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
            <div className="gapDivConetnet456789">
              <div className="insideDivwithname">*Confirm Password</div>
              <input
                className="inputFormLogSignUp"
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
            </div>
            <button className="logInFormButtonforsubmit" type="submit">
              Sign Up
            </button>
            <NavLink className={'LinkChangesForSingLog'} to={'/login'}>
              Already have account then Log-in
            </NavLink>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default SignupFormPage;
