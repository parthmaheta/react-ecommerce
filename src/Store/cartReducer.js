import { ADD_TO_CART, REMOVE_FROM_CART } from "./constants"

const initialState = []

export function cartReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_TO_CART:
      const index = state.findIndex(
        (product) => product.id === action.payload.id
      )
      if (index > -1) {
        state[index].quantity += action.payload.quantity
      } else {
        state.push(action.payload)
      }
      return [...state]
    case REMOVE_FROM_CART:
      return [...state.filter((product) => product.id !== action.payload.id)]

    default:
      return state
  }
}
