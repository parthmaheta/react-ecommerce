import React, { useState } from "react"
import { FilterBar } from "./FilterBar"
import { ProductsList } from "./ProductList"

export default function ShowProducts({ products }) {
  const [sortBy, setSortBy] = useState("asc")
  const [searchText, setSearchText] = useState("")

  return (
    <>
      <FilterBar
        setSortBy={setSortBy}
        sortBy={sortBy}
        searchText={searchText}
        setSearchText={setSearchText}
      />

      <ProductsList
        products={searchProducts(products, searchText)}
        sortBy={sortBy}
      />
    </>
  )
}

//return only products that match the search text
function searchProducts(products, searchText) {
  if (searchText.length === 0) return products

  var newArr = products.filter((product) => {
    return (
      product.title.toLowerCase().includes(searchText.toLowerCase()) ||
      product.category.toLowerCase().includes(searchText.toLowerCase())
    )
  })
  return newArr
}
