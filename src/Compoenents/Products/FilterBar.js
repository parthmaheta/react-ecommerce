import React from "react"
export function FilterBar({ sortBy, setSortBy, searchText, setSearchText }) {
  const changeOrder = () => {
    sortBy == "asc" ? setSortBy("dsc") : setSortBy("asc")
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
    </div>
  )
}
