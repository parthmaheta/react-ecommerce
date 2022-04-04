import React from "react"
import { useDispatch } from "react-redux"
import { ADD_TO_CART } from "../../../Store/constants"
import "./Product.css"

export default function ShowProduct({ product }) {
  const dispatch = useDispatch()

  const addToCart = () => {
    dispatch({ type: ADD_TO_CART, payload: { id: product.id, quantity: 1 } })
    alert("Added To Cart")
  }

  return (
    <div className="product-details">
      <div>
        <img src={product.image} alt={product.title} />
      </div>
      <div>
        <span className="category">{product.category}</span>
        <h1>{product.title}</h1>
        <p>{product.description}</p>

        <span className="price">${product.price}</span>
        <div className="add-to-cart" onClick={addToCart}>
          <button className="btn btn-primary">+1 Add to Cart</button>
        </div>
        <div className="flex-space-between">
          <span>Rating:{product.rating.rate}/5</span>
          <span>{product.rating.count} People Rated</span>
        </div>
      </div>
    </div>
  )
}
