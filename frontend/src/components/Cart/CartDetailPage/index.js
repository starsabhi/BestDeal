import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCarts } from '../../../store/cart';
import { getAllProduct } from '../../../store/product';
import './CartDetailPage.css';
import ClipLoader from 'react-spinners/ClipLoader';

function CartDetailPage() {
  const sessionUser = useSelector((state) => state.session.user);
  // const productList = useSelector((state) => Object.values(state.product));
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 500);
  }, []);

  const cart = useSelector((state) => Object.values(state.cart));
  console.log(cart);
  const dispatch = useDispatch();
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
            {cart?.map((item) => (
              <div key={item?.id}>
                <div>{item?.name}</div>
                <img src={item?.imageUrl} alt={item?.imageUrl}></img>
                <div>{item.price}</div>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
}

export default CartDetailPage;
