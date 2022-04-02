import { cartReducer } from "./cartReducer"
import { productReducer } from "./productsReducer"
import { combineReducers, createStore } from "redux"
import { loginReducer } from "./loginReducer"

export const store = createStore(
  combineReducers({
    cart: cartReducer,
    products: productReducer,
    login: loginReducer,
  })
)
