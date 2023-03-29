// For add item to cart
export const addCart = (product) => {
  return {
    type: 'ADD_ITEM',
    payload: product,
  };
};

// For Delete item from cart
export const delCart = (product) => {
  return {
    type: 'DEL_ITEM',
    payload: product,
  };
};
