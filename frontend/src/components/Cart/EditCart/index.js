import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, Redirect, useHistory } from 'react-router-dom';
import './EditCart.css';
import { editCart } from '../../../store/cart';
export default function EditCart({
  cartEditId,
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

  const handleEditToCart = async (e) => {
    const newItem = {
      userId: sessionUser.id,
      productId: productId,
      name: name,
      price: price,
      imageUrl: imageUrl,
      quantity: totalItem,
    };
    const cartEdit = await dispatch(editCart(newItem, cartEditId));
    if (cartEdit) {
      closeModal();
      // console.log('Completededitcart');
    }
  };

  return (
    <>
      <div className="editCartDeatailmainDiv">
        <div className="updatequnatity456">Update Quantity</div>
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
        <button
          className="submitFinalUpdate789"
          onClick={(e) => handleEditToCart(e)}
        >
          Update
        </button>
        <button className="submitFinalUpdate789" onClick={() => closeModal()}>
          Cancel
        </button>
      </div>
    </>
  );
}
