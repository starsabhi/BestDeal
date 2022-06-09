import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import './SplashPage.css';
function SplashPage() {
  return (
    <>
      <div className="splashPageMainDiv">
        <div>
          Everyone deserve best products with best price Our Products
          <NavLink exact to={'/products'}>
            <button className="ProductBtnonSplashPage"> Our Products</button>
          </NavLink>
        </div>
      </div>
    </>
  );
}

export default SplashPage;
