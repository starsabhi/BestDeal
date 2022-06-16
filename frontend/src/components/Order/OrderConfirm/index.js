import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, Redirect, useHistory } from 'react-router-dom';
import './OrderConfirm.css';
import { deleteCart, getCarts } from '../../../store/cart';
import { addOrderCart } from '../../../store/ordercart';
import { deleteOrder } from '../../../store/order';
export default function OrderConfirm({ totalPrice, closeModal }) {
  const sessionUser = useSelector((state) => state.session.user);
  const orderList = useSelector((state) => Object.values(state.order));
  const cartList = useSelector((state) => Object.values(state.cart));
  const history = useHistory();
  // console.log(cartList);

  const lastEle = orderList[orderList.length - 1].id;
  // console.log(lastEle);

  //for loop for create replica
  // const [start, setStart] = useState(false);

  const handleFinalAdd = async () => {
    console.log('******');
    const cartListIdForDelete = [];
    cartList.forEach(
      async ({ id, imageUrl, name, price, productId, quantity }) => {
        cartListIdForDelete.push(id);
        console.log('******');
        const newItem = {
          orderId: lastEle,
          userId: sessionUser.id,
          productId: productId,
          name: name,
          price: price,
          imageUrl: imageUrl,
          quantity: quantity,
        };

        console.log('******');
        const cartOrderAdd = await dispatch(addOrderCart(newItem));
        if (cartOrderAdd) {
          console.log('Completed');
        }
      }
    );
    console.log(cartListIdForDelete, '*****');

    const deleteWhole = await cartListIdForDelete.forEach((ele) => {
      dispatch(deleteCart(ele));
    });

    // const FullDeleteCart = dispatch(deleteFullCart(sessionUser.id));
    // if (FullDeleteCart) {
    //   console.log('Full Cart Delete');
    // }
    dispatch(getCarts(sessionUser.id));
    history.push('/listorder');
    closeModal();
  };

  //----------------------------------
  const handleCancel = () => {
    closeModal();
    const deleteClose = dispatch(deleteOrder(lastEle));
    if (deleteClose) {
      // console.log('MODAL CLOSE WITH DELETE ORDER');
    }
  };
  //--------------------------------
  // console.log(lastEle);
  // console.log(orderList[orderList.length - 1]);
  // console.log('orderId', orderId);

  const dispatch = useDispatch();

  useEffect(() => {
    getCarts(sessionUser?.id);
  }, [dispatch]);

  return (
    <>
      <div className="orderFinalModalMainDiv">
        <div className="OrderConfirmMainDiv">
          Hello
          <button onClick={() => handleFinalAdd()}>Final</button>
          <button onClick={() => handleCancel()}>Cancel</button>
        </div>
      </div>
    </>
  );
}
