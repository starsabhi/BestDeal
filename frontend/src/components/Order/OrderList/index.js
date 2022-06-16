import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ClipLoader from 'react-spinners/ClipLoader';
import { deleteOrder, getOrders } from '../../../store/order';
import './OrderList.css';
import OrderCartList from '../OrderCartList';
import UpdateOrder from '../UpdateOrder';
import { NavLink, useHistory } from 'react-router-dom';
import DateObject from 'react-date-object';

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
  // console.log(orderListForuser);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  //GETTING ALL ORDER CART------------------

  //----------------------------------------

  //--------------ORDER DELETING-------
  const handleDelete = (orderIdDelete) => {
    const deleteOrderA = dispatch(deleteOrder(orderIdDelete));
    if (deleteOrderA) {
      // console.log('COMPLETED');
    }
  };
  //-----------------------------------

  //-------------Button Show-----------
  // const [showBtn, setShowBtn] = useState(false);
  // const showButton = () => {
  //   setShowBtn(true);
  // };

  //------------------------------

  //-------------DATE OBJECT--------------------

  const date = new DateObject();

  // console.log(date.format()); //2021/06/10
  const todayDate1 = date.format();
  const todayDate2 = todayDate1.replace('/', '-');
  const todayDate3 = todayDate2.replace('/', '-');
  console.log(todayDate3);

  ////-------------------------------------------------------------

  //-------------------------------------
  return (
    <>
      {loading ? (
        <div className="loadingScreenDemo">
          <ClipLoader color={'#344441'} loading={loading} size={150} />
        </div>
      ) : orderListForuser?.length ? (
        <div className="InnerDivOrderList">
          {orderListForuser?.map((order) => (
            <>
              <div className="OneOrderListDiv">
                <div>Ordered On:{order.createdAt.slice(0, 10)}</div>
                {order.createdAt.slice(0, 10) == todayDate3 ? (
                  <div>
                    <NavLink to={`/updateorder/${order.id}`}>
                      <button>Update Order</button>
                    </NavLink>
                    <button onClick={() => handleDelete(order.id)}>
                      Delete Order
                    </button>
                  </div>
                ) : (
                  <></>
                )}
                <div>ORDER TOTAL:{order.totalPrice}</div>
                <OrderCartList orderId={order?.id} key={order?.id} />
                {/* <button>delete</button> */}
              </div>
            </>
          ))}
        </div>
      ) : (
        <>You Have 0 ORDERS</>
      )}
    </>
  );
}
