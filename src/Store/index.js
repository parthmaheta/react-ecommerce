import { cartReducer } from "./cartReducer";
import { productsReducer } from "./productsReducer";
import { combineReducers, createStore } from "redux";




export const store=createStore(combineReducers({
    cart:cartReducer,
    products:productsReducer
}))