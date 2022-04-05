import React from "react"
import { NavLink } from "react-router-dom"

//Will Show 4 products at a time
export function ProductsPage({ products, sortBy }) {
  return (
    <div className="products-container">
      {sortBy === "asc"
        ? products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))
        : copyWithReverseArray(products).map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
    </div>
  )
}

function ProductCard({ product }) {
  return (
    <NavLink
      to={"./" + product.id}
      className="position-relative text-decoration-none"
    >
      <span className="position-absolute tag top-right">
        {product.category}
      </span>
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

function copyWithReverseArray(arr) {
  return JSON.parse(JSON.stringify(arr)).reverse()
}
