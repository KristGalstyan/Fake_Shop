const cart = [];

const handleCart = (state = cart, action) => {
  const product = action.payload;

  switch (action.type) {
    case 'ADD_ITEM':
      // Check if Product is already exist
      const exist = state.find((x) => x.id === product.id);

      if (exist) {
        return state.map((x) => {
          // Increase the quantity
          return x.id === product.id ? { ...x, qty: x.qty + 1 } : x;
        });
      } else {
        const product = action.payload;
        return [
          ...state,
          {
            ...product,
            qty: 1,
          },
        ];
      }
    case 'DEL_ITEM':
      const exist1 = state.find((x) => x.id === product.id);
      if (exist1.qty === 1) {
        return state.filter((x) => x.id !== exist1.id);
      } else {
        return state.map((x) => {
          return x.id === product.id ? { ...x, qty: x.qty - 1 } : x;
        });
      }

    default:
      break;
  }
};

export default handleCart;
