import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCarts, addItemToCart, editCart } from '../../../store/cart';
import addCartLogo from '../../../images/Navbar/addCart.svg';
import './CartBox.css';
import logoApp from '../../../images/Navbar/logo.svg';
import { NavLink, useHistory } from 'react-router-dom';

export default function CartBox({ Product, productId }) {
  const sessionUser = useSelector((state) => state.session.user);
  const cartPrevious = useSelector((state) => Object.values(state.cart));
  const dispatch = useDispatch();
  const [totalItem, setTotalItem] = useState(1);
  const [errors, setErrors] = useState([]);
  // console.log('********', Product, cartPrevious);
  // console.log('****', totalItem);
  const history = useHistory();

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
      const cartEdit = await dispatch(editCart(newItem, cartId)).catch(
        async (res) => {
          const data = await res.json();
          if (data && data.errors) setErrors(data.errors);
        }
      );
      if (cartEdit) {
        history.push('/cartpage');
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

      const cartAdd = dispatch(addItemToCart(newItem)).catch(async (res) => {
        const data = await res.json();
        if (data && data.errors) setErrors(data.errors);
      });
      if (cartAdd) {
        history.push('/cartpage');
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
          <ul className="errorsLi leftMax">
            {errors.map((error, idx) => (
              <li className="errorsLi leftMax" key={idx}>
                * {error}
              </li>
            ))}
          </ul>
          <div className="quantityDivforcartbox">
            <div className="quantityClass">Quantity</div>
            <select
              className="selectClassforCARTB"
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
          </div>
          <div className="btnForcartBox">
            <button
              className="addCartButtonforbox"
              onClick={(e) => handleAddToCart(e)}
            >
              <div className="addToCartBTN">ADD TO CART</div>
              <img src={addCartLogo}></img>
            </button>
          </div>
          <div>
            <div className="h3FreeDelivery">
              <h3 className="h3forwithoutlogin">
                <div> With Free Delivery </div>
              </h3>
            </div>
          </div>
        </div>
      ) : (
        <>
          <div className="imagelogoCartdivwithourlogin">
            <img className="imagelogoCartBoxwithoutlog" src={logoApp}></img>
            <h3 className="h3forwithoutlogin">
              <div>Please Log-in to use all site features</div>
            </h3>
            <div className="LogInButtnInsideCartBox">
              <NavLink className="navLogin buttonfornavforSpace" to="/login">
                <button className="log-InNAv logInBtnCartBOX">Log In</button>
              </NavLink>
            </div>
            <div>
              <h3 className="h3forwithoutlogin">
                <div>Don't have account with BestDeal</div>
              </h3>
            </div>
            <div className="LogInButtnInsideCartBox">
              <NavLink className="navSignUp buttonfornavforSpace" to="/signup">
                <button className="sing-upNAv logInBtnCartBOX">Sign up</button>
              </NavLink>
            </div>
          </div>
        </>
      )}
    </>
  );
}
