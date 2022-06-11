// frontend/src/components/Navigation/ProfileButton.js
import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Redirect, useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import * as sessionActions from '../../store/session';
import './ProfileButton.css';

function ProfileButton({ user }) {
  const history = useHistory();
  const dispatch = useDispatch();
  // const sessionUser = useSelector((state) => state.session.user);
  // console.log(sessionUser,'***********8')

  const logout = (e) => {
    e.preventDefault();
    dispatch(sessionActions.logout());
    history.push('/');
  };

  return (
    <>
      <div className="newDivDemoUser">
        <div>Hello {user.username}</div>
        <button onClick={logout}>Log Out</button>
      </div>
    </>
  );
}

export default ProfileButton;
