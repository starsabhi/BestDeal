import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteCartOrder, loadToOrderCart } from '../../../store/ordercart';
import MainModal from '../../MainModal';
import EditOrderCart from '../EditOrderCart';
import './OrderCartList.css';

export default function OrderCartList({ orderId, showBtn }) {
  const sessionUser = useSelector((state) => state.session.user);
  const dispatch = useDispatch();
  // const state = useSelector((state) => state);
  const orderCartList = useSelector((state) => Object.values(state.orderCart));
  useEffect(() => {
    dispatch(loadToOrderCart(orderId));
  }, [dispatch]);
  // console.log(orderId);
  // console.log(state);

  //TRY filter
  const newArr = orderCartList.filter((order) => order.orderId === orderId);
  // console.log(newArr);

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
    console.log(name);
    setCartEditId(id);
    setCartEditOrderId(orderId);
    setEditCartProductId(productId);
    setEditCartName(name);
    setEditCartPrice(price);
    setEditCartQuantity(quantity);
    setEditCartimageUrl(imageUrl);
    openEditOrderCartModal(true);
  };

  //----------------------------------------------

  // console.log('isCHANEGAD', orderCartList);
  return (
    <>
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
              <div className="innerClassList456789">
                <img
                  className="bodyCartorderimage"
                  src={imageUrl}
                  alt={imageUrl}
                ></img>
                <div>Name:{name}</div>
                <div>Price:${price}</div>
                <div>Quantity:{quantity}</div>

                {/* <>
                  <button
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
                  <button onClick={() => handleOrderCartDelete(id)}>
                    Delete
                  </button>
                </> */}
              </div>
            )
          )}
        </div>
      </div>
    </>
  );
}
