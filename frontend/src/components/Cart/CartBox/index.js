import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCarts, addItemToCart } from '../../../store/cart';
export default function CartBox({ Product, productId }) {
  const sessionUser = useSelector((state) => state.session.user);
  const dispatch = useDispatch();
  console.log('********', Product, productId);

  useEffect(() => {
    dispatch(getCarts(sessionUser.id));
  }, [dispatch]);

  const handleAddToCaart = async (e) => {
    e.preventDefault();

    const newItem = {
      userId: sessionUser.id,
      productId: productId,
      quantity: 1,
    };

    const cartAdd = await dispatch(addItemToCart(newItem));
    if (cartAdd) {
      console.log('Completed');
    }
  };

  return (
    <>
      <div>
        Hello
        <button onClick={(e) => handleAddToCaart(e)}>ADD TO CART</button>
      </div>
    </>
  );
}
