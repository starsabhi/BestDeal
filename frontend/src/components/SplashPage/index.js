import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import './SplashPage.css';
import AppLogo from '../../images/Navbar/logo.svg';
function SplashPage() {
  return (
    <>
      <div>
        <div className="splashPageMainDiv">
          <div className="infoforsplashPage">
            <div className="appLogoSplashPage">
              <img className="appLogoSplashPageimg" src={AppLogo}></img>
            </div>
            <h3>Everyone deserve best products with best price</h3>
            <h3>BestDeal is one of the best online store to shop</h3>
            <NavLink exact to={'/products'}>
              <div className="divbutttonforladningPage">
                <button className="ProductBtnonSplashPage">
                  To Check Products >>> Click here
                </button>
              </div>
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
}

export default SplashPage;
