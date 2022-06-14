import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCarts } from '../../../store/cart';

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
  console.log(totalPrice);

  // console.log('How many time value changes', theSum);
  return (
    <>
      <div>
        <div className="totalPriceNumber">TOTAL PRICE ${totalPrice}</div>
      </div>
    </>
  );
}
