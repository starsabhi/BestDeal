import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ClipLoader from 'react-spinners/ClipLoader';
import { getOrders } from '../../../store/order';
import './OrderList.css';
import OrderCartList from '../OrderCartList';

export default function OrderList() {
  const [loading, setLoading] = useState(false);
  const sessionUser = useSelector((state) => state.session.user);
  const dispatch = useDispatch();
  // const state = useSelector((state) => state);
  // console.log(state);

  useEffect(() => {
    dispatch(getOrders(sessionUser.id));
  }, [dispatch, sessionUser.id]);
  const orderListForuser = useSelector((state) => Object.values(state.order));
  console.log(orderListForuser);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <>
      <div className="mainDivforOrderList">
        {loading ? (
          <div className="loadingScreenDemo">
            <ClipLoader color={'#344441'} loading={loading} size={150} />
          </div>
        ) : (
          <div className="OrderListDiv">
            <div className="widthOrderListDiv">
              Hello
              <div className="InnerDivOrderList">
                {orderListForuser?.map((order) => (
                  <>
                    <div className="doubleInnerDivOrderList" key={order?.id}>
                      <OrderCartList orderId={order?.id} />
                      {/* <div>{order?.totalPrice}</div> */}
                      {/* <button>Update</button> */}
                    </div>
                  </>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
