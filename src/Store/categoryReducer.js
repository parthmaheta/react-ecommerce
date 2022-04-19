import {
  FETCH_CATEGORY_FAILURE,
  FETCH_CATEGORY_REQUEST,
  FETCH_CATEGORY_SUCCESS,
} from "./constants"

const initialState = {
  fetching: true,
  error: null,
  categories: [],
}

export function categoryReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_CATEGORY_FAILURE:
      return { fetching: false, error: action.payload, categories: [] }
    case FETCH_CATEGORY_SUCCESS:
      return { fetching: false, error: null, categories: action.payload }
    case FETCH_CATEGORY_REQUEST:
      return { fetching: true, error: null, categories: [] }

    default:
      return state
  }
}
