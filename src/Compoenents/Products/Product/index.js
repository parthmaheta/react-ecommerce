import React from "react"
import { useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import Header from "../../Header"
import ShowProduct from "./ShowProduct"

function Product() {
  let { id } = useParams()
  id = parseInt(id)

  const product = useSelector((state) => {
    return state.products.products.find((product) => product.id === id)
  })

  return (
    <>
      <Header />
      {product ? <ShowProduct product={product} /> : <h1>No Such Product</h1>}
    </>
  )
}

export default Product
