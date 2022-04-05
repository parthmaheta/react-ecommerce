import {
  FETCH_PRODUCTS_FAILURE,
  FETCH_PRODUCTS_SUCCESS,
  FETCH_PRODUCTS_REQUEST,
} from "./constants"

const initialState = {
  fetching: false,
  error: null,
  products: [],
}

export function productReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_PRODUCTS_SUCCESS:
      return { fetching: false, error: null, products: action.payload }
    case FETCH_PRODUCTS_FAILURE:
      return { fetching: false, error: action.payload, products: [] }
    case FETCH_PRODUCTS_REQUEST:
      return { fetching: true, error: null, products: [] }

    default:
      return state
  }
}
