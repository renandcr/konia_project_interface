import { legacy_createStore as createStore, combineReducers } from "redux";
import { TypedUseSelectorHook, useSelector } from "react-redux";
import dbProductsReducer from "./dbProducts/reducer";

const reducers = combineReducers({ dbProducts: dbProductsReducer });

const store = createStore(reducers);

type RootState = ReturnType<typeof reducers>;
export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;

export default store;
