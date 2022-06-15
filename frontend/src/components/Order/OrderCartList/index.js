import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadToOrderCart } from '../../../store/ordercart';
import './OrderCartList.css';

export default function OrderCartList({ orderId }) {
  const sessionUser = useSelector((state) => state.session.user);
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  const orderCartList = useSelector((state) => Object.values(state.orderCart));
  useEffect(() => {
    dispatch(loadToOrderCart(orderId));
  }, [dispatch]);
  console.log(orderId);
  console.log(state);

  //TRY filter
  const newArr = orderCartList.filter((order) => order.orderId === orderId);

  console.log('isCHANEGAD', orderCartList);
  return (
    <>
      <div className="OrderCartListmainDiv">
        <div className="bodyofCartOrderList">
          Hello
          {newArr.map((orderCart) => (
            <>
              <img
                className="bodyCartorderimage"
                src={orderCart.imageUrl}
                alt={orderCart.imageUrl}
              ></img>
            </>
          ))}
        </div>
      </div>
    </>
  );
}
