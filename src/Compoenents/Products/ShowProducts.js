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
        products={searchProductsWithSort(products, searchText, sortBy)}
      />
    </>
  )
}

function searchProductsWithSort(products, searchText, sortBy) {
  if (searchText.length === 0)
    return sortBy == "asc" ? products : copyWithReverseArray(products)

  var newArr = products.filter((product) => {
    return (
      product.title.toLowerCase().includes(searchText.toLowerCase()) ||
      product.category.toLowerCase().includes(searchText.toLowerCase())
    )
  })
  return sortBy == "asc" ? newArr : copyWithReverseArray(newArr)
}

function copyWithReverseArray(arr) {
  return JSON.parse(JSON.stringify(arr)).reverse()
}
