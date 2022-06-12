import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import './SplashPage.css';
function SplashPage() {
  return (
    <>
      <div className="splashPageMainDiv">
        <div className="infoforsplashPage">
          Everyone deserve best products with best price Our Products
        </div>
        <div>
          <NavLink exact to={'/products'}>
            <button className="ProductBtnonSplashPage"> Our Products</button>
          </NavLink>
        </div>
      </div>
    </>
  );
}

export default SplashPage;
