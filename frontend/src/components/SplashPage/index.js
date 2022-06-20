import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import './SplashPage.css';
import AppLogo from '../../images/Navbar/logo.svg';
import Footer from '../Footer';
function SplashPage() {
  return (
    <>
      <div className="splashPageMainDiv">
        <div className="splashPAGEdiv">
          <img className="mainDivimage" src={AppLogo}></img>
          Best Deal is online shop where you can buy best products with best
          price
          <NavLink exact to={'/products'}>
            <button className="productMainbtn">
              Click here to View products >>>
            </button>
          </NavLink>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default SplashPage;
