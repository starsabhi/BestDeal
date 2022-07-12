import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, Redirect, useHistory } from 'react-router-dom';
import './EditOrderCart.css';
import { editOrderCart } from '../../../store/ordercart';
export default function EditOrderCart({
  Id,
  OrderId,
  productId,
  name,
  price,
  imageUrl,
  quantity,
  closeModal,
}) {
  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session.user);
  const [totalItem, setTotalItem] = useState(quantity);
  const handleChange = (e) => {
    setTotalItem(e.target.value);
  };

  console.log(name);

  const handleEditToCart = async (e) => {
    const newItem = {
      userId: sessionUser?.id,
      orderId: OrderId,
      productId: productId,
      name: name,
      price: price,
      imageUrl: imageUrl,
      quantity: totalItem,
    };

    console.log(newItem);
    const cartOrderEdit = await dispatch(editOrderCart(newItem, Id));
    if (cartOrderEdit) {
      closeModal();
      console.log('Completededitcart');
    }
  };

  return (
    <>
      <div className="editCartDeatailmainDiv">
        <div className="updatequnatity456">Update quantity</div>
        <select
          className="updateselectele564"
          value={totalItem}
          onChange={(e) => handleChange(e)}
        >
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="9">9</option>
          <option value="10">10</option>
        </select>
        <div className="updateEditCartselect5897">
          <button
            className="submitFinalUpdate7891"
            onClick={(e) => handleEditToCart(e)}
          >
            Update
          </button>
          <button
            className="submitFinalUpdate7891"
            onClick={() => closeModal()}
          >
            Cancel
          </button>
        </div>
      </div>
    </>
  );
}
