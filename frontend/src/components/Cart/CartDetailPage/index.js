import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteCart, getCarts } from '../../../store/cart';
import { getAllProduct } from '../../../store/product';
import './CartDetailPage.css';
import ClipLoader from 'react-spinners/ClipLoader';
import TotalPriceCart from '../TotalPriceCart';

function CartDetailPage() {
  const sessionUser = useSelector((state) => state.session.user);
  // const productList = useSelector((state) => Object.values(state.product));
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  // const [deleteCartId, setDeleteCartId] = useState(null);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 500);
  }, []);

  // const deleteCartFunc = (DeleteId) => {
  //   console.log(DeleteId, 'DELETEID');
  //   setDeleteCartId(DeleteId);
  //   return handleCartDelete();
  // };

  const handleCartDelete = (DeleteId) => {
    // e.preventDefault();
    console.log('THIS THIS');
    const deleteCompleted = dispatch(deleteCart(DeleteId));
    if (deleteCompleted) {
      console.log('Cart DELETE working ');
    }
  };

  const cart = useSelector((state) => Object.values(state.cart));
  console.log(cart);
  useEffect(() => {
    dispatch(getCarts(sessionUser?.id));
  }, [dispatch]);

  return (
    <>
      <div>
        {loading ? (
          <div className="loadingScreenDemo">
            <ClipLoader color={'#344441'} loading={loading} size={150} />
          </div>
        ) : (
          <div>
            <div>
              <TotalPriceCart />
            </div>
            <div className="CartDeatailPageMainDiv">
              {cart?.map((item) => (
                <div className="CartDeatailPageInnerDiv" key={item?.id}>
                  <div>{item?.name}</div>
                  <img
                    className="imageforCartdetailPage"
                    src={item?.imageUrl}
                    alt={item?.imageUrl}
                  ></img>
                  <div>${item.price}</div>
                  <div>Quantity:{item.quantity}</div>
                  <button onClick={() => handleCartDelete(item?.id)}>
                    Delete
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default CartDetailPage;
