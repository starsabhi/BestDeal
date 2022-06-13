// frontend/src/components/Navigation/ProfileButton.js
import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Redirect, useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import * as sessionActions from '../../store/session';
import './ProfileButton.css';
import TotalItemCart from '../Cart/TotalItemCart';
import { emptyCarts } from '../../store/cart';

function ProfileButton({ user }) {
  const history = useHistory();
  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session.user);
  // console.log(sessionUser,'***********8')

  const logout = (e) => {
    e.preventDefault();
    dispatch(emptyCarts());
    dispatch(sessionActions.logout());
    history.push('/');
  };

  return (
    <>
      <div className="newDivDemoUser">
        {/* <div className="totalItemCartInNavBar"> */}
        <TotalItemCart />
        {/* </div> */}
        <div className="userNameDivinNav">Hello {user.username}</div>
        <button className="logOutBtnele" onClick={logout}>
          Log Out
        </button>
      </div>
    </>
  );
}

export default ProfileButton;
