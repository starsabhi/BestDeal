import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCarts, addItemToCart, editCart } from '../../../store/cart';
import addCartLogo from '../../../images/Navbar/addCart.svg';
import './CartBox.css';

export default function CartBox({ Product, productId }) {
  const sessionUser = useSelector((state) => state.session.user);
  const cartPrevious = useSelector((state) => Object.values(state.cart));
  const dispatch = useDispatch();
  // console.log('********', Product, cartPrevious);

  useEffect(() => {
    dispatch(getCarts(sessionUser?.id));
  }, [dispatch]);

  const handleAddToCart = async (e) => {
    e.preventDefault();
    console.log(cartPrevious);
    let alreadyProduct = cartPrevious?.filter((oneCart) => {
      // console.log(oneCart.productId == productId);
      return oneCart.productId == productId;
    });
    console.log(alreadyProduct);
    if (alreadyProduct.length) {
      console.log(alreadyProduct);
      const cartId = alreadyProduct[0].id;
      let previousQuantity = alreadyProduct[0].quantity;
      console.log(previousQuantity);
      const newItem = {
        userId: sessionUser.id,
        productId: productId,
        name: Product.name,
        price: Product.price,
        imageUrl: Product.imageUrl,
        quantity: previousQuantity + 1,
      };
      const cartEdit = await dispatch(editCart(newItem, cartId));
      if (cartEdit) {
        console.log('Completededitcart');
      }
    } else {
      const newItem = {
        userId: sessionUser.id,
        productId: productId,
        name: Product.name,
        price: Product.price,
        imageUrl: Product.imageUrl,
        quantity: 1,
      };

      const cartAdd = await dispatch(addItemToCart(newItem));
      if (cartAdd) {
        console.log('Completed');
      }
    }
  };

  return (
    <>
      <div className="addCartButtonforboxDivmainDiv">
        <button
          className="addCartButtonforbox"
          onClick={(e) => handleAddToCart(e)}
        >
          <div>ADD TO CART</div>
          <img src={addCartLogo}></img>
        </button>
      </div>
    </>
  );
}
