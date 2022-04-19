import React, { useState } from "react"
import { FilterBar } from "./FilterBar"
import { ProductsList } from "./ProductList"

export default function ShowProducts({ products }) {
  const [sortBy, setSortBy] = useState("asc")
  const [searchText, setSearchText] = useState("")
  const [selectedCategory, setselectedCategory] = useState("")

  return (
    <>
      <FilterBar
        setSortBy={setSortBy}
        sortBy={sortBy}
        searchText={searchText}
        setSearchText={setSearchText}
        selectedCategory={selectedCategory}
        setselectedCategory={setselectedCategory}
      />

      <ProductsList
        products={chooseCategory(
          searchProducts(products, searchText),
          selectedCategory
        )}
        sortBy={sortBy}
        selectedCategory={selectedCategory}
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

//return only product whoose category is mathching
function chooseCategory(products, selectedCategory) {
  //if selected category is empty it means not selected any category
  if (selectedCategory === "") return products
  else
    return products.filter((product) => product.category === selectedCategory)
}
