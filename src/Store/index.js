import { cartReducer } from "./cartReducer"
import { productReducer } from "./productsReducer"
import { combineReducers, createStore } from "redux"
import { loginReducer } from "./loginReducer"
import { categoryReducer } from "./categoryReducer"

export const store = createStore(
  combineReducers({
    cart: cartReducer,
    products: productReducer,
    login: loginReducer,
    categories: categoryReducer,
  })
)
