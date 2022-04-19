import React, { useEffect } from "react"
import { fetchCatgoryFromApi } from "./../../API/fetchFromApi"
import { useDispatch, useSelector } from "react-redux"
import { CATEGORY_URL } from "./../../API/constants"
import ShowCategoryDropDown from "./ShowCategory"

export function FilterBar({
  sortBy,
  setSortBy,
  searchText,
  setSearchText,
  selectedCategory,
  setselectedCategory,
}) {
  const changeOrder = () => {
    sortBy === "asc" ? setSortBy("dsc") : setSortBy("asc")
  }

  return (
    <div className="filterbar">
      <div className="search-bar">
        <input
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          placeholder="product name or category"
        />
      </div>
      <div className="select-bar">
        <select value={sortBy} onChange={changeOrder}>
          <option value="asc">Sort By Ascending</option>
          <option value="dsc">Sort By Dscending</option>
        </select>
      </div>

      <ShowCategory
        selectedCategory={selectedCategory}
        setselectedCategory={setselectedCategory}
      />
    </div>
  )
}

function ShowCategory({ selectedCategory, setselectedCategory }) {
  const dispatch = useDispatch()
  const category = useSelector((state) => state.categories)

  const fetchCategory = () => {
    fetchCatgoryFromApi(CATEGORY_URL, dispatch)
  }
  useEffect(() => {
    fetchCategory()
  }, [])

  if (category.fetching) return <div>Fetching Categories</div>
  else if (category.error)
    return (
      <>
        <span>Error While Fetching Categories</span>
        <button onClick={fetchCategory}>Retry</button>
      </>
    )
  else
    return (
      <ShowCategoryDropDown
        selectedCategory={selectedCategory}
        setselectedCategory={setselectedCategory}
        category={category.categories}
      />
    )
}
