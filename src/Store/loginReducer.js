import { LOGIN_SUCCESS, LOGOUT } from "./constants"

const initialState = {
  isLogged: false,
}

export function loginReducer(state = initialState, action) {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return { isLogged: true }
    case LOGOUT:
      return { isLogged: false }
    default:
      return state
  }
}
