import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCarts, addItemToCart, editCart } from '../../../store/cart';
import addCartLogo from '../../../images/Navbar/addCart.svg';
import './CartBox.css';
import logoApp from '../../../images/Navbar/logo.svg';

export default function CartBox({ Product, productId }) {
  const sessionUser = useSelector((state) => state.session.user);
  const cartPrevious = useSelector((state) => Object.values(state.cart));
  const dispatch = useDispatch();
  const [totalItem, setTotalItem] = useState(1);
  // console.log('********', Product, cartPrevious);
  // console.log('****', totalItem);

  const handleChange = (e) => {
    setTotalItem(e.target.value);
  };

  useEffect(() => {
    dispatch(getCarts(sessionUser?.id));
  }, [dispatch]);

  const handleAddToCart = async (e) => {
    e.preventDefault();
    // console.log(cartPrevious);
    let alreadyProduct = cartPrevious?.filter((oneCart) => {
      // console.log(oneCart.productId == productId);
      return oneCart.productId == productId;
    });
    // console.log(alreadyProduct);
    if (alreadyProduct.length) {
      // console.log(alreadyProduct);
      const cartId = alreadyProduct[0].id;
      let previousQuantity = alreadyProduct[0].quantity;
      // console.log(previousQuantity);
      const newItem = {
        userId: sessionUser.id,
        productId: productId,
        name: Product.name,
        price: Product.price,
        imageUrl: Product.imageUrl,
        quantity: previousQuantity + parseInt(totalItem),
      };
      const cartEdit = await dispatch(editCart(newItem, cartId));
      if (cartEdit) {
        // console.log('Completededitcart');
      }
    } else {
      const newItem = {
        userId: sessionUser.id,
        productId: productId,
        name: Product.name,
        price: Product.price,
        imageUrl: Product.imageUrl,
        quantity: parseInt(totalItem),
      };

      const cartAdd = dispatch(addItemToCart(newItem));
      if (cartAdd) {
        // console.log('Completed');
      }
    }
  };

  return (
    <>
      {sessionUser ? (
        <div className="addCartButtonforboxDivmainDiv">
          <div className="imagelogoCartdiv">
            <img className="imagelogoCartBox" src={logoApp}></img>
          </div>
          <div className="quantityDivforcartbox">
            Quantity
            <select value={totalItem} onChange={(e) => handleChange(e)}>
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
          </div>
          <div className="btnForcartBox">
            <button
              className="addCartButtonforbox"
              onClick={(e) => handleAddToCart(e)}
            >
              <div>ADD TO CART</div>
              <img src={addCartLogo}></img>
            </button>
          </div>
        </div>
      ) : (
        <>
          <div className="imagelogoCartdivwithourlogin">
            <img className="imagelogoCartBoxwithoutlog" src={logoApp}></img>
            <h3 className="h3forwithoutlogin">
              Please Log-in to use all site features
            </h3>
          </div>
        </>
      )}
    </>
  );
}
