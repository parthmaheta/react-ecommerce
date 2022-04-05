import React, { useState, useEffect } from "react"
import { NavLink } from "react-router-dom"
export function ProductsList({ products, sortBy }) {
  const [currentPage, setCurrentPage] = useState(1)

  useEffect(() => {
    setCurrentPage(1)
  }, [products])

  if (products.length === 0)
    return <div className="error">No Products Found</div>
  else
    return (
      <>
        <ProductsPage
          products={products.slice(currentPage * 4 - 4, currentPage * 4)}
          currentPage={currentPage}
          sortBy={sortBy}
        />
        <Pagination
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          maxProducts={products.length}
        />
      </>
    )
}

function Pagination({ currentPage, setCurrentPage, maxProducts }) {
  return (
    <div className="pagination">
      <button
        onClick={() => setCurrentPage(currentPage - 1)}
        disabled={currentPage == 1}
      >
        Previous
      </button>
      <button>{currentPage}</button>
      <button
        onClick={() => setCurrentPage(currentPage + 1)}
        disabled={currentPage * 4 >= maxProducts}
      >
        Next
      </button>
    </div>
  )
}

//Will Show 4 products at a time
function ProductsPage({ products, sortBy }) {
  return (
    <div className="products-container">
      {sortBy == "asc"
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
