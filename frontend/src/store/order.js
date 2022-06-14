import { csrfFetch } from './csrf';

const LOAD_ORDER = 'review/LOAD_ORDER';
const ADD_TO_ORDER = 'review/ADD_TO_ORDER';
const DELETE_ORDER = 'review/DELETE_ORDER';

const loadOrder = (orders) => ({
  type: LOAD_ORDER,
  orders,
});

const addToOrder = (order) => ({
  type: ADD_TO_ORDER,
  order,
});

const removeOrder = (orderId) => ({
  type: DELETE_ORDER,
  orderId,
});

export const getOrders = (userId) => async (dispatch) => {
  const res = await csrfFetch(`/api/order/${userId}`);
  // console.log('********************8', res);
  if (res.ok) {
    const orders = await res.json();
    // console.log('***************', reviews);
    dispatch(loadOrder(orders));
    return orders;
  }
};

export const addToOneOrder = (order) => async (dispatch) => {
  const res = await csrfFetch(`/api/order/`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(order),
  });
  // console.log(res);
  if (res.ok) {
    const order = await res.json();
    // console.log(review);
    dispatch(addToOrder(order));
    return order;
  }
};

export const deleteOrder = (orderId) => async (dispatch) => {
  const res = await csrfFetch(`/api/order/${orderId}`, {
    method: 'DELETE',
  });

  if (res.ok) {
    const orderId = await res.json();
    dispatch(removeOrder(orderId));
  }
};

const initialState = {};

const orderReducer = (state = initialState, action) => {
  let newState = { ...state };
  switch (action.type) {
    case LOAD_ORDER: {
      action.orders.forEach((order) => {
        newState[order.id] = order;
      });
      return newState;
    }
    case ADD_TO_ORDER: {
      newState[action.order.id] = action.order;
      return newState;
    }

    // case EDIT_CART: {
    //   newState[action.cart.id] = action.cart;
    //   return newState;
    // }

    // case EMPTY_CART: {
    //   return action.cart;
    // }

    case DELETE_ORDER: {
      delete newState[action.orderId];
      return newState;
    }

    default:
      return state;
  }
};

export default orderReducer;
