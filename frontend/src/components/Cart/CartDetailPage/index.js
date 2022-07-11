import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteCart, getCarts } from '../../../store/cart';
import { getAllProduct } from '../../../store/product';
import './CartDetailPage.css';
import ClipLoader from 'react-spinners/ClipLoader';
import TotalPriceCart from '../TotalPriceCart';
import EditCart from '../EditCart';
import MainModal from '../../MainModal';
import { NavLink } from 'react-router-dom';
import cashSVG from '../../../images/cash2.svg';

function CartDetailPage() {
  const sessionUser = useSelector((state) => state.session.user);
  // const productList = useSelector((state) => Object.values(state.product));
  const dispatch = useDispatch();

  // const [deleteCartId, setDeleteCartId] = useState(null);
  // const [totalItem, setTotalItem] = useState(1);

  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 500);
  }, []);

  const handleCartDelete = (DeleteId) => {
    // e.preventDefault();
    // console.log('THIS THIS');
    const deleteCompleted = dispatch(deleteCart(DeleteId));
    if (deleteCompleted) {
      // console.log('Cart DELETE working ');
    }
  };

  const cart = useSelector((state) => Object.values(state.cart));
  // console.log(cart);
  useEffect(() => {
    dispatch(getCarts(sessionUser?.id));
  }, [dispatch]);

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

  return (
    <>
      <div className="MainDivForCartDetailPAge">
        {/* {cart.length ? (
          <></>
        ) : (
          <>
            <div className="MAAINYOURCARTEHEADER">YOUR CART IS EMPTY</div>
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

                <div className="CartDeatailPageMainDiv">
                  <span className="MAAINYOURCARTEHEADERDiv">YOUR CART</span>
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
                        <div className="simpleDivDiv forQuantity">
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
              <div className="noItemInCART4578">
                <div className="MAAINYOURCARTEHEADER">YOUR CART IS EMPTY</div>
                <NavLink className={'prdocutNavlink'} to={'/products'}>
                  Products Page
                </NavLink>
              </div>
            )}
            <>
              {cart.length ? (
                <div className="TotalPriceDiv">
                  <div className="innerDivTotalPrice">
                    <TotalPriceCart />
                    <div className="OrderDetailPageBtnDiv">
                      <NavLink to="/orderdetail">
                        <button className="CartCompleteBtn">
                          Place Your Order
                        </button>
                      </NavLink>
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

export default CartDetailPage;
