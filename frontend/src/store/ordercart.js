import { csrfFetch } from './csrf';

const LOAD_ORDER_CART = 'ordercart/LOAD_ORDER_CART';
const ADD_TO_ORDER_CART = 'ordercart/ADD_TO_ORDER_CART';
const EDIT_ORDER_CART = 'ordercart/EDIT_ORDER_CART';
const DELETE_To_ORDER_CART = 'ordercart/DELETE_To_ORDER_CART';

const loadOrderCart = (orderCarts) => ({
  type: LOAD_ORDER_CART,
  orderCarts,
});

const addToOrderCart = (orderCart) => ({
  type: ADD_TO_ORDER_CART,
  orderCart,
});

const editToOrderCart = (orderCart) => ({
  type: EDIT_ORDER_CART,
  orderCart,
});

const removeOrderCart = (cartOrderId) => ({
  type: DELETE_To_ORDER_CART,
  cartOrderId,
});

export const loadToOrderCart = (orderId) => async (dispatch) => {
  const res = await csrfFetch(`/api/ordercart/${orderId}`);
  // console.log('********************8', res);
  if (res.ok) {
    const orderCart = await res.json();
    // console.log('***************', reviews);
    // console.log(orderCart, '***********************');
    dispatch(loadOrderCart(orderCart));
    return orderCart;
  }
};

export const addOrderCart = (orderCart) => async (dispatch) => {
  const res = await csrfFetch(`/api/ordercart/`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(orderCart),
  });
  // console.log(res);
  if (res.ok) {
    const orderCart = await res.json();
    // console.log(review);
    dispatch(addToOrderCart(orderCart));
    return orderCart;
  }
};

export const editOrderCart = (orderCart, orderCartId) => async (dispatch) => {
  // console.log(review, id);
  const res = await csrfFetch(`/api/ordercart/${orderCartId}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(orderCart),
  });
  // console.log(res);
  // console.log('WHIRERER********111111111111111111111111111111');

  if (res.ok) {
    // console.log('WHIRERER********111111111111111111111111111111');
    const orderCartR = await res.json();
    // console.log(review);
    dispatch(editToOrderCart(orderCartR));
    return orderCartR;
  }
};

export const deleteCartOrder = (cartOrderId) => async (dispatch) => {
  // console.log('&&*&*&*&*&*&*&*', reviewId);
  const res = await csrfFetch(`/api/ordercart/${cartOrderId}`, {
    method: 'DELETE',
  });

  // console.log('&&*&*&*&*&*&*&*COMPLETD OR NOT');
  if (res.ok) {
    const CartOrderId = await res.json();
    dispatch(removeOrderCart(CartOrderId));
  }
};

const initialState = {};

const orderCartReducer = (state = initialState, action) => {
  let newState = { ...state };
  switch (action.type) {
    case LOAD_ORDER_CART: {
      // console.log(action.orderCarts);
      action.orderCarts.forEach((orderCart) => {
        newState[orderCart.id] = orderCart;
      });
      return newState;
    }
    case ADD_TO_ORDER_CART: {
      newState[action.orderCart.id] = action.orderCart;
      return newState;
    }

    case EDIT_ORDER_CART: {
      newState[action.orderCart.id] = action.orderCart;
      return newState;
    }

    // case EDIT_CART: {
    //   newState[action.cart.id] = action.cart;
    //   return newState;
    // }

    // case EMPTY_CART: {
    //   return action.cart;
    // }

    case DELETE_To_ORDER_CART: {
      delete newState[action.cartOrderId];
      return newState;
    }

    default:
      return state;
  }
};

export default orderCartReducer;
