import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import './SplashPage.css';
function SplashPage() {
  return (
    <>
      <div>
        <div className="splashPageMainDiv">
          <div className="infoforsplashPage">
            <h3>Everyone deserve best products with best price Our Products</h3>
            <NavLink exact to={'/products'}>
              <div className="divbutttonforladningPage">
                <button className="ProductBtnonSplashPage">Our Products</button>
              </div>
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
}

export default SplashPage;
