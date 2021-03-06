import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteCart, getCarts } from '../../../store/cart';
import { getAllProduct } from '../../../store/product';
import './OrderDetail.css';
import ClipLoader from 'react-spinners/ClipLoader';
import TotalPriceCart from '../../Cart/TotalPriceCart';
import EditCart from '../../Cart/EditCart';
import MainModal from '../../MainModal';
import { NavLink } from 'react-router-dom';
import { addToOneOrder, getOrders } from '../../../store/order';
import OrderConfirm from '../OrderConfirm';
import cashSVG from '../../../images/cash2.svg';

// import { v4 as uuid } from 'uuid';

function OrderDetail() {
  const sessionUser = useSelector((state) => state.session.user);
  // const productList = useSelector((state) => Object.values(state.product));
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  //DATE OBJECT--------------------------------
  // const new = Date();

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 800);
  }, []);

  // let arr = [1, 2, 3, 4];
  // arr.forEach((ele) => console.log(ele));
  // const unique_id = uuid();
  // console.log(unique_id, 'IDIDID');

  const handleCartDelete = (DeleteId) => {
    // e.preventDefault()
    console.log('THIS THIS');
    const deleteCompleted = dispatch(deleteCart(DeleteId));
    if (deleteCompleted) {
      console.log('Cart DELETE working ');
    }
  };

  const cart = useSelector((state) => Object.values(state.cart));
  // console.log(cart);
  useEffect(() => {
    dispatch(getCarts(sessionUser?.id));
  }, [dispatch]);

  //-------------------------------------------------------------
  //TOTAL PRICE
  const Cart = useSelector((state) => state.cart);
  const ItemArr = Object.values(Cart);
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
  //-------------------------------------------------------------

  //EDIT REVIEW MODAL
  const [cartEditId, setCartEditId] = useState(null);
  const [editCartProductId, setEditCartProductId] = useState(null);
  const [editCartName, setEditCartName] = useState(null);
  const [editCartPrice, setEditCartPrice] = useState(null);
  const [editCartimageUrl, setEditCartimageUrl] = useState(null);
  const [editCartQuantity, setEditCartQuantity] = useState(null);

  const [editCartModal, seteditCartModal] = useState(false);
  const openEditCartModal = () => {
    if (editCartModal) return; // do nothing if modal already showing
    seteditCartModal(true); // else open modal
    document.getElementById('root').classList.add('overflow');
  };
  const closeEditCartModal = () => {
    if (!editCartModal) return; // do nothing if modal already closed
    seteditCartModal(false); // else close modal
    // disable page scrolling:
    document.getElementById('root').classList.remove('overflow');
  };

  const helperFunctionEdit = (
    id,
    productId,
    name,
    price,
    quantity,
    imageUrl
  ) => {
    setCartEditId(id);
    setEditCartProductId(productId);
    setEditCartName(name);
    setEditCartPrice(price);
    setEditCartQuantity(quantity);
    setEditCartimageUrl(imageUrl);
    openEditCartModal(true);
  };

  //-----------------Order------------------------------

  const handleAddOrder = async () => {
    // e.preventDefault();

    const newOrder = {
      // id: unique_id,
      userId: sessionUser.id,
      totalPrice: totalPrice,
    };

    const orderAdd = await dispatch(addToOneOrder(newOrder));
    if (orderAdd) {
      // console.log('Complete Order');
    }
  };

  //------------------ORDER AND ORDERCART
  const [orderModal, setOrderModal] = useState(false);
  const openAddOrderCartModal = () => {
    if (orderModal) return; // do nothing if modal already showing
    setOrderModal(true); // else open modal
    document.getElementById('root').classList.add('overflow');
  };
  const closeAddOrderCartModal = () => {
    if (!orderModal) return; // do nothing if modal already closed
    setOrderModal(false); // else close modal
    // disable page scrolling:
    document.getElementById('root').classList.remove('overflow');
  };

  const handleFinalAddOrder = async () => {
    await handleAddOrder();
    openAddOrderCartModal(true);
    //open modal and send OrderId
  };

  //-----------------------------------------------

  return (
    <>
      <div className="orderDeatailPageMainDiv">
        {/* {cart.length ? (
          <></>
        ) : (
          <>
            <div className="MAAINYOURCARTEHEADER">YOUR ORDER IS EMPTY</div>
            <NavLink to={'/products'}>
              <div>Please go to product list page to shop</div>
            </NavLink>
          </>
        )} */}
        {loading ? (
          <div className="loadingScreenDemo">
            <ClipLoader color={'#344441'} loading={loading} size={150} />
          </div>
        ) : (
          <>
            {cart.length ? (
              <>
                <MainModal
                  showModal={editCartModal}
                  closeModal={closeEditCartModal}
                >
                  <EditCart
                    cartEditId={cartEditId}
                    productId={editCartProductId}
                    name={editCartName}
                    price={editCartPrice}
                    imageUrl={editCartimageUrl}
                    quantity={editCartQuantity}
                  />
                </MainModal>

                <MainModal
                  showModal={orderModal}
                  closeModal={closeAddOrderCartModal}
                >
                  <OrderConfirm totalPrice={totalPrice} />
                </MainModal>

                <div className="CartDeatailPageMainDiv">
                  <span className="MAAINYOURCARTEHEADERDiv">
                    YOUR ORDER REVIEW
                  </span>
                  {cart?.map(
                    ({ id, name, productId, imageUrl, price, quantity }) => (
                      <div className="CartDeatailPageInnerDiv" key={id}>
                        <div className="nameDivCartdpage">{name}</div>
                        <div className="newimageforCartdetailPage">
                          <img
                            className="imageforCartdetailPage"
                            src={imageUrl}
                            alt={imageUrl}
                          ></img>
                        </div>
                        {/* <div className="twoInfopriceandQ"> */}
                        <div className="simpleDivDiv">
                          <div className="logoCashClass">
                            <img src={cashSVG}></img>
                          </div>
                          <p className="pricepTageCss">
                            Price :{' '}
                            <span className="priceSpancolor">${price}</span>
                          </p>
                        </div>
                        <div className="simpleDivDiv">
                          Quantity:{` `}
                          {quantity}
                        </div>
                        {/* </div> */}
                        <div className="bothBtnforCartpage">
                          <button
                            className="updateAnddeleteBtn"
                            onClick={() =>
                              helperFunctionEdit(
                                id,
                                productId,
                                name,
                                price,
                                quantity,
                                imageUrl
                              )
                            }
                          >
                            Update Quantity
                          </button>
                          <button
                            className="updateAnddeleteBtn"
                            onClick={() => handleCartDelete(id)}
                          >
                            Delete This Item
                          </button>
                        </div>
                      </div>
                    )
                  )}
                </div>
              </>
            ) : (
              <>
                <div className="noItemInCART4578">
                  <div className="MAAINYOURCARTEHEADER">YOUR CART IS EMPTY</div>
                  <NavLink className={'prdocutNavlink'} to={'/products'}>
                    Products Page
                  </NavLink>
                </div>
              </>
            )}

            <>
              {cart.length ? (
                <div className="TotalPriceDiv">
                  <div className="innerDivTotalPrice">
                    {/* <div className="totalPriceNumber"> */}
                    <div className="finalOrderDTdiv">
                      <div className="logoCashClass">
                        <img src={cashSVG} alt={cashSVG}></img>
                      </div>
                      <p className="pricepTageCss">
                        Total :{' '}
                        <span className="priceSpancolor">${totalPrice}</span>
                      </p>
                    </div>
                    {/* </div> */}
                    <div className="OrderDetailPageBtnDiv">
                      <button
                        className="CartCompleteBtn"
                        onClick={() => handleFinalAddOrder()}
                      >
                        Confirm Order
                      </button>
                    </div>
                  </div>
                </div>
              ) : (
                <></>
              )}
            </>
          </>
        )}
      </div>
    </>
  );
}

export default OrderDetail;
