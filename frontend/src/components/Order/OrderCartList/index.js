import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteCartOrder, loadToOrderCart } from '../../../store/ordercart';
import './OrderCartList.css';

export default function OrderCartList({ orderId }) {
  const sessionUser = useSelector((state) => state.session.user);
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  const orderCartList = useSelector((state) => Object.values(state.orderCart));
  useEffect(() => {
    dispatch(loadToOrderCart(orderId));
  }, [dispatch]);
  // console.log(orderId);
  // console.log(state);

  //TRY filter
  const newArr = orderCartList.filter((order) => order.orderId === orderId);

  //DELETE ITEM FORM ORDER CART----------------
  const handleOrderCartDelete = (DeleteId) => {
    // e.preventDefault();
    // console.log('THIS THIS');
    const deleteOrder = dispatch(deleteCartOrder(DeleteId));
    if (deleteOrder) {
      console.log('Cart DELETE working ');
    }
  };
  //-------------------------------------------

  // console.log('isCHANEGAD', orderCartList);
  return (
    <>
      <div className="OrderCartListmainDiv">
        <div className="bodyofCartOrderList">
          {newArr.map((orderCart) => (
            <>
              <img
                className="bodyCartorderimage"
                src={orderCart.imageUrl}
                alt={orderCart.imageUrl}
              ></img>
              <button onClick={() => handleOrderCartDelete(orderCart.id)}>
                Delete
              </button>
            </>
          ))}
        </div>
      </div>
    </>
  );
}
