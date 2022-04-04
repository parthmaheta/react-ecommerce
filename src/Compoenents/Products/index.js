import React, { useEffect, useCallback } from "react"
import { useDispatch, useSelector } from "react-redux"
import { API_URL } from "../../API/constants"
import fetchFromApi from "./../../API/fetchFromApi"
import ShowProducts from "./ShowProducts"
import "./products.css"
import Header from "../Header"

export default function Products(props) {
  const products = useSelector((state) => state.products)
  const dispatch = useDispatch()

  const fetchData = useCallback(() => {
    fetchFromApi(API_URL, dispatch)
  }, [])

  useEffect(() => {
    // fetchData()
  }, [])

  return (
    <>
      <Header />
      {products.fetching ? (
        <Loading />
      ) : products.error ? (
        <ShowError reLoad={fetchData} />
      ) : (
        <ShowProducts products={products.products} />
      )}
    </>
  )
}

function Loading(props) {
  return <div className="loading">Loading...</div>
}

function ShowError({ reLoad }) {
  return (
    <div className="error">
      Something Went Wrong
      <button onClick={reLoad}>Reload</button>
    </div>
  )
}
