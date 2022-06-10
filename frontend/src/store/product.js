import { csrfFetch } from './csrf';

const GET_ALL_Product = '/products/getAllProduct';
const GET_ONE_Product = '/products/oneProduct';

const loadProduct = (products) => {
  return {
    type: GET_ALL_Product,
    products,
  };
};

const oneProduct = (products) => {
  return {
    type: GET_ONE_Product,
    products,
  };
};

export const getAllProduct = () => async (dispatch) => {
  const response = await fetch('/api/products');

  if (response.ok) {
    const data = await response.json();

    dispatch(loadProduct(data));
    return data;
  }
};

export const getOneProduct = (productId) => async (dispatch) => {
  const response = await csrfFetch(`/api/products/${productId}`, {
    method: 'GET',
  });
  console.log(response, 'Line35');
  const product = await response.json();
  console.log('*******8', product);
  dispatch(oneProduct(product));
  return product;
};

const initialState = {};

const productReducer = (state = initialState, action) => {
  // console.log(state)
  switch (action.type) {
    case GET_ALL_Product: {
      let newState = {};
      action.products.forEach((product) => (newState[product.id] = product));
      // console.log(newState);
      return newState;
    }
    case GET_ONE_Product: {
      let newState = {};
      // console.log(
      //   action,
      //   '*######************************************************************'
      // );
      newState = { ...action.products };
      console.log(newState, 'COMPLETED ******************OR NOT');
      return newState;
    }

    default:
      return state;
  }
};

export default productReducer;
