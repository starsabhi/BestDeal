// frontend/src/components/Navigation/index.js
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import ProfileButton from './ProfileButton';
import { login } from '../../store/session';
import './Navigation.css';

function Navigation({ isLoaded }) {
  const sessionUser = useSelector((state) => state.session.user);
  // const [errors, setErrors] = useState([]);
  // const credential = 'demo@user.io';
  // const password = 'password';
  // const dispatch = useDispatch();
  // const demoLogin = () => {
  //   setErrors([]);
  //   return dispatch(login({ credential, password })).catch(async (res) => {
  //     const data = await res.json();
  //     if (data && data.errors) setErrors(data.errors);
  //   });
  // };

  let sessionLinks;
  if (sessionUser) {
    sessionLinks = <ProfileButton user={sessionUser} />;
  } else {
    sessionLinks = (
      <div className='rightButton'>
        {/* <button id='demoBtn' onClick={demoLogin}>
          Demo
        </button> */}
        <NavLink className='navLogin' to='/login'>
          Log In
        </NavLink>
        <NavLink className='navSignUp' to='/signup'>
          Sign Up
        </NavLink>
      </div>
    );
  }

  return (
    <div className='navBar'>
      <NavLink exact to='/'>
        <div className='ImageinNav'>Hello</div>
      </NavLink>
      <div className='rightSideinfo'>{isLoaded && sessionLinks}</div>
    </div>
  );
}
export default Navigation;
