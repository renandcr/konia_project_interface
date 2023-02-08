import { DB_PRODUCTS, ADD_PRODUCTS } from "./constants";

export interface IDbProducts {
  id: string;
  name: string;
  created_at: string;
}

export interface IDbProductsAction {
  type: string;
  payload: Array<IDbProducts>;
}

export interface IAddProductsAction {
  type: string;
  payload: IDbProducts;
}

export const actionDbProducts = (product: Array<IDbProducts>) => {
  return {
    type: DB_PRODUCTS,
    payload: product,
  };
};

export const actionAddProducts = (product: IDbProducts) => {
  return {
    type: ADD_PRODUCTS,
    payload: product,
  };
};
