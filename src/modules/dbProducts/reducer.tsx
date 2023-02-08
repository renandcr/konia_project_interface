import { IDbProductsAction, IAddProductsAction } from "./actions";
import { DB_PRODUCTS, ADD_PRODUCTS } from "./constants";

const dbProductsReducer = (
  state = [],
  action: IDbProductsAction & IAddProductsAction
) => {
  switch (action.type) {
    case DB_PRODUCTS:
      return action.payload;

    case ADD_PRODUCTS:
      const updatedState = [...state, action.payload];
      return updatedState;

    default:
      return state;
  }
};

export default dbProductsReducer;
