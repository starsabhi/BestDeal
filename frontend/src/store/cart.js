import { csrfFetch } from './csrf';

const LOAD_CART = 'review/LOAD_CART';
const ADD_TO_CART = 'review/ADD_CART';
const EDIT_CART = 'review/EDIT_CART';
const DELETE_CART = 'review/DELETE_CART';
const ONE_CART = 'review/ONE_CART';
const EMPTY_CART = 'review/EMPTY_CART';

const loadCart = (carts) => ({
  type: LOAD_CART,
  carts,
});

const addToCart = (cart) => ({
  type: ADD_TO_CART,
  cart,
});

const editToCart = (cart) => ({
  type: EDIT_CART,
  cart,
});

const emptyToCart = (cart) => ({
  type: EMPTY_CART,
  cart,
});

const removeCart = (cartId) => ({
  type: DELETE_CART,
  cartId,
});

export const emptyCarts = () => async (dispatch) => {
  dispatch(emptyToCart({}));
  return {};
};

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

export const editCart = (cart, cartId) => async (dispatch) => {
  // console.log(review, id);
  const res = await csrfFetch(`/api/cart/${cartId}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(cart),
  });
  // console.log(res);

  if (res.ok) {
    const cart = await res.json();
    // console.log(review);
    dispatch(editToCart(cart));
    return cart;
  }
};

export const deleteCart = (cartId) => async (dispatch) => {
  // console.log('&&*&*&*&*&*&*&*', reviewId);
  const res = await csrfFetch(`/api/cart/${cartId}`, {
    method: 'DELETE',
  });

  // console.log('&&*&*&*&*&*&*&*COMPLETD OR NOT');
  if (res.ok) {
    const CartId = await res.json();
    dispatch(removeCart(CartId));
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

    case EDIT_CART: {
      newState[action.cart.id] = action.cart;
      return newState;
    }

    case EMPTY_CART: {
      return action.cart;
    }

    case DELETE_CART: {
      delete newState[action.cartId];
      return newState;
    }

    default:
      return state;
  }
};

export default cartReducer;
