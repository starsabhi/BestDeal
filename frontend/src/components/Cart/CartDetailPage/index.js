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

function CartDetailPage() {
  const sessionUser = useSelector((state) => state.session.user);
  // const productList = useSelector((state) => Object.values(state.product));
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  // const [deleteCartId, setDeleteCartId] = useState(null);
  // const [totalItem, setTotalItem] = useState(1);

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
      <div>
        {loading ? (
          <div className="loadingScreenDemo">
            <ClipLoader color={'#344441'} loading={loading} size={150} />
          </div>
        ) : (
          <div>
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
              {cart?.map(
                ({ id, name, productId, imageUrl, price, quantity }) => (
                  <div className="CartDeatailPageInnerDiv" key={id}>
                    <div>{name}</div>
                    <img
                      className="imageforCartdetailPage"
                      src={imageUrl}
                      alt={imageUrl}
                    ></img>

                    <div>${price}</div>
                    <div>Quantity:{quantity}</div>
                    <button
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
                    <button onClick={() => handleCartDelete(id)}>Delete</button>
                  </div>
                )
              )}
            </div>
          </div>
        )}
        <div className="TotalPriceDiv">
          <TotalPriceCart />
          <div>
            <NavLink to="/orderdetail">
              <button>Place Your Order</button>
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
}

export default CartDetailPage;
