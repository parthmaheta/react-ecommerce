import React from "react"
import { NavLink } from "react-router-dom"

export default function ShowProducts({ products }) {
  return (
    <div className="products-container">
      {products.map((product) => (
        <ProductInfo key={product.id} product={product} />
      ))}
    </div>
  )
}

function ProductInfo({ product }) {
  return (
    <NavLink to={"./" + product.id} className="text-decoration-none">
      <div className="product-info">
        <img src={product.image} alt={product.title} className="product-img" />
        <div className="product-info-text">
          <span className="product-title">{product.title}</span>
          <span className="product-price">Just: ${product.price}</span>
          <span className="rating">Rating :{product.rating.rate}/5</span>

          <span className="rating"> {product.rating.count} People Rated</span>
        </div>
      </div>
    </NavLink>
  )
}
