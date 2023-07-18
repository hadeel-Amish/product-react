// import { ADDITEM } from "../action/index";
const cart = [];
const HandleCart = (state = cart, action) => {
  const product = action.payload;
  switch (action.type) {
    case "ADDITEM":
      //check if product is already exist
      const exite = state.find((x) => x.id === product.id);
      if (exite) {
        //increace the quantity
        return state.map((x) =>
          x.id === product.id ? { ...x, qty: x.qty + 1 } : x
        );
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

    case "DELETEITEM":
      const exist1 = state.find((x) => x.id === product.id);
      if (exist1.qty === 1) {
        return state.filter((x) => x.id !== exist1.id);
      } else {
        state.map((x) => (x.id === product.id ? { ...x, qty: x.qty - 1 } : x));
      }
      break;
    default:
      return state;
  }
};

export default HandleCart;
