// frontend/src/components/Navigation/index.js
import React, { useState } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import ProfileButton from './ProfileButton';
import * as sessionActions from '../../store/session';
import navLogo from '../../images/Navbar/bestDeal.png';
import './Navigation.css';

function Navigation({ isLoaded }) {
  const sessionUser = useSelector((state) => state.session.user);
  const history = useHistory();
  const [errors, setErrors] = useState([]);
  const credential = 'demo@user.io';
  const password = 'password';
  const dispatch = useDispatch();
  // const demoLogin = () => {
  //   setErrors([]);
  //   return dispatch(login({ credential, password })).catch(async (res) => {
  //     const data = await res.json();
  //     if (data && data.errors) setErrors(data.errors);
  //     // history.push('/products');
  //   });
  // };

  const demoLogin = (e) => {
    e.preventDefault();
    setErrors([]);
    dispatch(sessionActions.login({ credential, password })).catch(
      async (res) => {
        const data = await res.json();
        if (data && data.errors) setErrors(data.errors);
      }
    );
    history.push('/products');
  };

  let sessionLinks;
  if (sessionUser) {
    sessionLinks = <ProfileButton user={sessionUser} />;
  } else {
    sessionLinks = (
      <div className="rightButton">
        <button
          className="demobtninNavBarwithoursignup buttonfornavforSpace"
          onClick={demoLogin}
        >
          Demo
        </button>
        <NavLink className="navLogin buttonfornavforSpace" to="/login">
          Log In
        </NavLink>
        <NavLink className="navSignUp buttonfornavforSpace" to="/signup">
          Sign Up
        </NavLink>
      </div>
    );
  }

  return (
    <div className="navBar">
      <div className="navbarContent">
        {sessionUser ? (
          <NavLink exact to="/products">
            <img className="imgInNavImgEle" src={navLogo} alt={navLogo}></img>
          </NavLink>
        ) : (
          <NavLink exact to="/">
            <img className="imgInNavImgEle" src={navLogo} alt={navLogo}></img>
          </NavLink>
        )}
        <div className="rightSideinfo">{isLoaded && sessionLinks}</div>
      </div>
    </div>
  );
}
export default Navigation;
