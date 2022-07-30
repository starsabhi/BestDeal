import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ClipLoader from 'react-spinners/ClipLoader';
import { deleteOrder, getOrders } from '../../../store/order';
import './OrderList.css';
import OrderCartList from '../OrderCartList';
import UpdateOrder from '../UpdateOrder';
import { NavLink, useHistory } from 'react-router-dom';
import DateObject from 'react-date-object';
import complete from '../../../images/completed.svg';

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
  // console.log(orderListForuser);
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
  // console.log(todayDate3);

  ////-------------------------------------------------------------

  //-------------------------------------
  return (
    <>
      <div className="mainDivForOrderDetailPAAGEE">
        <div className="OneOrderListDiv">
          <div className="MainDivforOrdersListPAGE">
            {loading ? (
              <div className="loadingScreenDemo">
                <ClipLoader color={'#344441'} loading={loading} size={150} />
              </div>
            ) : orderListForuser?.length ? (
              <>
                <div className="header456123789">Your Orders</div>
                <div className="header43warnning">
                  * You can update and delete order only if it is not complete
                  [Only same day Orders]
                </div>
                <div className="InnerDivOrderList">
                  {orderListForuser.reverse()?.map((order) => (
                    <div className="bodymaindivorderDetailpage456">
                      <>
                        <div className="MainDHeaderforDeatipop">
                          Order Details
                        </div>
                        <div className="ficelDivinnergamesshow">
                          <div>ID : XSNASNKDN{order.id}</div>
                          <div>
                            DATE :{` `}
                            {order.createdAt.slice(0, 10)}
                          </div>
                          {order.createdAt.slice(0, 10) == todayDate3 ? (
                            <div>
                              <span className="spanStatusOrderin">
                                STATUS : Not completed
                              </span>
                              <NavLink to={`/updateorder/${order.id}`}>
                                <button className="UpdateOrderBtnforsecondPG">
                                  Update Order
                                </button>
                              </NavLink>
                              <button
                                className="UpdateOrderBtnforsecondPG1"
                                onClick={() => handleDelete(order.id)}
                              >
                                Delete Order
                              </button>
                            </div>
                          ) : (
                            <div className="insideDivCompleted">
                              STATUS: COMPLETED
                              <img
                                className="logoCompleted"
                                src={complete}
                                alt={complete}
                              ></img>
                            </div>
                          )}
                          <div>
                            TOTAL :{` `}
                            {order.totalPrice}
                          </div>
                        </div>
                        <table className="insideTable">
                          <tr className="borderBottomTR">
                            <th>Image</th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Quantity</th>
                          </tr>
                          <OrderCartList orderId={order?.id} key={order?.id} />
                        </table>
                      </>
                    </div>
                  ))}
                </div>
              </>
            ) : (
              <>
                <div>You Have No Orders</div>
                <NavLink className={'NavLinkOrderList'} to={'/products'}>
                  Products Page
                </NavLink>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
