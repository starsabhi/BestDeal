import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCarts } from '../../../store/cart';
import cashSVG from '../../../images/cash2.svg';
import './TotalPriceCart.css';

export default function TotalPriceCart() {
  const sessionUser = useSelector((state) => state.session.user);
  const dispatch = useDispatch();
  const Cart = useSelector((state) => state.cart);
  const ItemArr = Object.values(Cart);
  // console.log(ItemArr);
  // const ItemArr = [0, 1, 2, 3];

  useEffect(() => {
    dispatch(getCarts(sessionUser?.id));
  }, [dispatch]);
  const initialValue = 0;
  const theSum = ItemArr.reduce(function (accumulator, currentValue) {
    return (
      accumulator +
      parseFloat(currentValue.price).toFixed(2) *
        parseFloat(currentValue.quantity)
    );
  }, initialValue);
  let totalPrice = theSum.toFixed(2);
  // console.log(totalPrice);

  // console.log('How many time value changes', theSum);
  return (
    <>
      <div className="totalPriceNumber">
        <div>
          <div className="logoCashClass">
            <img src={cashSVG}></img>
          </div>
          <p className="pricepTageCss">
            Total : <span className="priceSpancolor">${totalPrice}</span>
          </p>
        </div>
      </div>
    </>
  );
}
