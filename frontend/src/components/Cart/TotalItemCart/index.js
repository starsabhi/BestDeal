import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCarts } from '../../../store/cart';
import addToCart from '../../../images/Navbar/count.svg';
import './TotalItemCart.css';
import { NavLink } from 'react-router-dom';

export default function TotalItemCart() {
  const sessionUser = useSelector((state) => state.session.user);
  const dispatch = useDispatch();
  const Cart = useSelector((state) => state.cart);
  const ItemArr = Object.values(Cart);
  // console.log(ItemArr);
  // const [count, setCount] = useState(0);
  // useEffect(() => {
  //   ItemArr.forEach((item) => {
  //     // console.log(item.quantity);
  //     setCount((count += item.quantity));
  //   });
  // }, [ItemArr.length]);

  // const ItemArr = [0, 1, 2, 3];
  const initialValue = 0;
  const theSum = ItemArr.reduce(function (accumulator, currentValue) {
    return accumulator + currentValue.quantity;
  }, initialValue);
  // console.log(theSum);

  useEffect(() => {
    dispatch(getCarts(sessionUser?.id));
  }, [dispatch]);

  return (
    <>
      <NavLink to="/cartpage">
        <div className="shoppindCartTotalNumberOfItems">
          <img className="imageCartTotalSumCount" src={addToCart}></img>
          <div className="totalSumNumber">{theSum}</div>
        </div>
      </NavLink>
    </>
  );
}
