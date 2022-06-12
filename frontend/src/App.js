import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Switch, Redirect } from 'react-router-dom';
import LoginFormPage from './components/LoginFormPage';
import SignupFormPage from './components/SignupFormPage';
import * as sessionActions from './store/session';
import Navigation from './components/Navigation';
import SplashPage from './components/SplashPage';
import Home from './components/Home';
import PageNotFound from './components/PageNotFound';
import Productsdetail from './components/Productsdetail';
import Footer from './components/Footer';
import TotalItemCart from './components/Cart/TotalItemCart';

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  const sessionUser = useSelector((state) => state.session.user);
  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);
  // console.log(sessionUser,'**********')

  return (
    <>
      <Navigation isLoaded={isLoaded} />
      {isLoaded && (
        <Switch>
          <Route exact path="/login">
            <LoginFormPage />
          </Route>
          <Route exact path="/signup">
            <SignupFormPage />
          </Route>
          <Route exact path="/">
            <SplashPage />
          </Route>
          <Route exact path="/products">
            <Home />
          </Route>
          <Route exact path="/products/:productId">
            <Productsdetail />
          </Route>
          <Route>
            <PageNotFound />
          </Route>
        </Switch>
      )}
      {/* <Footer /> */}
      {/* <TotalItemCart /> */}
    </>
  );
}

export default App;
