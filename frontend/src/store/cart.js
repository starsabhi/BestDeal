import { csrfFetch } from './csrf';

const LOAD_CART = 'review/LOAD_CART';
const ADD_TO_CART = 'review/ADD_CART';
const EDIT_CART = 'review/EDIT_CART';
const DELETE_CART = 'review/DELETE_CART';
const ONE_CART = 'review/ONE_CART';

const loadCart = (carts) => ({
  type: LOAD_CART,
  carts,
});

const addToCart = (cart) => ({
  type: ADD_TO_CART,
  cart,
});

export const getCarts = (userId) => async (dispatch) => {
  const res = await csrfFetch(`/api/cart/${userId}`);
  // console.log('********************8', res);
  if (res.ok) {
    const carts = await res.json();
    // console.log('***************', reviews);
    dispatch(loadCart(carts));
    return carts;
  }
};

export const addItemToCart = (cart) => async (dispatch) => {
  const res = await csrfFetch(`/api/cart/`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(cart),
  });
  // console.log(res);
  if (res.ok) {
    const cart = await res.json();
    // console.log(review);
    dispatch(addToCart(cart));
    return cart;
  }
};

const initialState = {};

const cartReducer = (state = initialState, action) => {
  let newState = { ...state };
  switch (action.type) {
    case LOAD_CART: {
      action.carts.forEach((cart) => {
        newState[cart.id] = cart;
      });
      return newState;
    }
    case ADD_TO_CART: {
      newState[action.cart.id] = action.cart;
      return newState;
    }

    default:
      return state;
  }
};

export default cartReducer;
