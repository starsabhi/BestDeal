import { csrfFetch } from './csrf';

const ADD_TO_ORDER_CART = 'review/ADD_TO_ORDER_CART';

const addToOrderCart = (orderCart) => ({
  type: ADD_TO_ORDER_CART,
  orderCart,
});

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

const initialState = {};

const orderCartReducer = (state = initialState, action) => {
  let newState = { ...state };
  switch (action.type) {
    // case LOAD_CART: {
    //   action.carts.forEach((cart) => {
    //     newState[cart.id] = cart;
    //   });
    //   return newState;
    // }
    case ADD_TO_ORDER_CART: {
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

    // case DELETE_CART: {
    //   delete newState[action.cartId];
    //   return newState;
    // }

    default:
      return state;
  }
};

export default orderCartReducer;
