import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useHistory, useParams } from 'react-router-dom';
import { updateOrder } from '../../../store/order';
import { deleteCartOrder, loadToOrderCart } from '../../../store/ordercart';
import MainModal from '../../MainModal';
import EditOrderCart from '../EditOrderCart';
import './UpdateOrder.css';

export default function UpdateOrder() {
  const sessionUser = useSelector((state) => state.session.user);
  const objectId = useParams();
  const dispatch = useDispatch();
  const history = useHistory();
  const Orderid = objectId.orderId;
  const orderCartList = useSelector((state) => Object.values(state.orderCart));
  // console.log(orderCartList);

  //LOADING ORDER CART
  useEffect(() => {
    dispatch(loadToOrderCart(Orderid));
  }, [dispatch]);

  //TRY filter
  // console.log(Orderid);
  const newArr = orderCartList.filter((order) => order.orderId == Orderid);
  // console.log(newArr);

  //-----------------------TOTAL PRICE------------------------------
  const initialValue = 0;
  const theSum = newArr.reduce(function (accumulator, currentValue) {
    return (
      accumulator +
      parseFloat(currentValue.price).toFixed(2) *
        parseFloat(currentValue.quantity)
    );
  }, initialValue);
  let totalPriceOrder = theSum.toFixed(2);
  // console.log(totalPriceOrder);

  //--------------------------------------------------------

  ////---------------------------------------------------------

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

  //------EDIT ORDER CART MODAL-------------------
  const [cartEditId, setCartEditId] = useState(null);
  const [cartEditOrderId, setCartEditOrderId] = useState(null);
  const [editCartProductId, setEditCartProductId] = useState(null);
  const [editCartName, setEditCartName] = useState(null);
  const [editCartPrice, setEditCartPrice] = useState(null);
  const [editCartimageUrl, setEditCartimageUrl] = useState(null);
  const [editCartQuantity, setEditCartQuantity] = useState(null);
  const [editOrderCartModal, seteditOrderCartModal] = useState(false);
  const openEditOrderCartModal = () => {
    if (editOrderCartModal) return; // do nothing if modal already showing
    seteditOrderCartModal(true); // else open modal
    document.getElementById('root').classList.add('overflow');
  };
  const closeEditOrderCartModal = () => {
    if (!editOrderCartModal) return; // do nothing if modal already closed
    seteditOrderCartModal(false); // else close modal
    // disable page scrolling:
    document.getElementById('root').classList.remove('overflow');
  };

  const helperFunctionEdit = (
    id,
    orderId,
    userId,
    productId,
    name,
    price,
    imageUrl,
    quantity
  ) => {
    // console.log(name);
    setCartEditId(id);
    setCartEditOrderId(orderId);
    setEditCartProductId(productId);
    setEditCartName(name);
    setEditCartPrice(price);
    setEditCartQuantity(quantity);
    setEditCartimageUrl(imageUrl);
    openEditOrderCartModal(true);
  };

  const cancelEvent = (e) => {
    e.preventDefault();
    history.push('/listorder');
  };
  ////UPDATE TOTAL PRICE FOR ORDER---------
  const handleTotalpriceUpdate = (e) => {
    e.preventDefault();

    const newOrder = {
      userId: sessionUser.id,
      totalPrice: totalPriceOrder,
    };

    const orderComplete = dispatch(updateOrder(newOrder, Orderid));
    if (orderComplete) {
      // console.log('Completed');
      history.push('/listorder');
    }
  };

  return (
    <>
      <div className="MainUpdateOrderDiv">
        <div className="OrderCartListmainDiv">
          <MainModal
            showModal={editOrderCartModal}
            closeModal={closeEditOrderCartModal}
          >
            <EditOrderCart
              Id={cartEditId}
              OrderId={cartEditOrderId}
              productId={editCartProductId}
              name={editCartName}
              price={editCartPrice}
              imageUrl={editCartimageUrl}
              quantity={editCartQuantity}
            />
          </MainModal>
          <div className="bodyofCartOrderList">
            <div className="innnerDivmainUpdateOrderDivDiv">
              UPDATE YOUR ORDER
              {newArr.map(
                ({
                  id,
                  orderId,
                  userId,
                  productId,
                  name,
                  price,
                  imageUrl,
                  quantity,
                }) => (
                  <>
                    <div className="innerOrderUpdateOrderCartListDivandDIVDIV">
                      <img
                        className="bodyCartorderimage"
                        src={imageUrl}
                        alt={imageUrl}
                      ></img>
                      <div>Name:{name}</div>
                      <div>Price:${price}</div>
                      <div>Quantity:{quantity}</div>

                      <>
                        <button
                          className="submitFinalUpdate789"
                          onClick={() =>
                            helperFunctionEdit(
                              id,
                              orderId,
                              userId,
                              productId,
                              name,
                              price,
                              imageUrl,
                              quantity
                            )
                          }
                        >
                          Update
                        </button>
                        {/* <button onClick={() => handleOrderCartDelete(id)}>
                      Delete
                    </button> */}
                      </>
                    </div>
                  </>
                )
              )}
            </div>
            <button
              className="submitFinalUpdate789"
              onClick={(e) => handleTotalpriceUpdate(e)}
            >
              Submit Changes
            </button>
            <button
              onClick={(e) => cancelEvent(e)}
              className="submitFinalUpdate789"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
