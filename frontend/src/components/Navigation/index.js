// frontend/src/components/Navigation/index.js
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import ProfileButton from './ProfileButton';
import { login } from '../../store/session';
import './Navigation.css';

function Navigation({ isLoaded }) {
  const sessionUser = useSelector((state) => state.session.user);
  const [errors, setErrors] = useState([]);
  const credential = 'demo@user.io';
  const password = 'password';
  const dispatch = useDispatch();
  const demoLogin = () => {
    setErrors([]);
    return dispatch(login({ credential, password })).catch(async (res) => {
      const data = await res.json();
      if (data && data.errors) setErrors(data.errors);
    });
  };

  let sessionLinks;
  if (sessionUser) {
    sessionLinks = <ProfileButton user={sessionUser} />;
  } else {
    sessionLinks = (
      <div id='rightButton'>
        <button id='demoBtn' onClick={demoLogin}>
          Demo
        </button>
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
      <ul className='navbarli'>
        {/* <li className='navbarli'> */}
        <li>
          <NavLink exact to='/'>
            <div>Hello</div>
            {/* <img className='navbarLogo' src={logo} /> */}
          </NavLink>
        </li>
        <li id='rightSideinfo'>{isLoaded && sessionLinks}</li>
        {/* </li> */}
      </ul>
    </div>
  );
}
export default Navigation;
