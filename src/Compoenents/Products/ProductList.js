import React, { useState, useEffect } from "react"

import { ProductsPage } from "./ProductPage"
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
        disabled={currentPage === 1}
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
