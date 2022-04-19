import axios from "axios"

import {
  FETCH_CATEGORY_FAILURE,
  FETCH_CATEGORY_REQUEST,
  FETCH_CATEGORY_SUCCESS,
  FETCH_PRODUCTS_FAILURE,
  FETCH_PRODUCTS_REQUEST,
  FETCH_PRODUCTS_SUCCESS,
} from "../Store/constants"

async function fetchFromApi(URL, dispatch) {
  dispatch({ type: FETCH_PRODUCTS_REQUEST })
  try {
    const { data } = await axios.get(URL)
    dispatch({ type: FETCH_PRODUCTS_SUCCESS, payload: data })
  } catch (error) {
    dispatch({ type: FETCH_PRODUCTS_FAILURE, payload: error })
  }
}

export default fetchFromApi

export async function fetchCatgoryFromApi(URL, dispatch) {
  dispatch({ type: FETCH_CATEGORY_REQUEST })
  try {
    const { data } = await axios.get(URL)
    dispatch({ type: FETCH_CATEGORY_SUCCESS, payload: data })
  } catch (error) {
    dispatch({ type: FETCH_CATEGORY_FAILURE, payload: error })
  }
}
