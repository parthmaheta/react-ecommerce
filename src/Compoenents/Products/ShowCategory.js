import React from "react"

function ShowCategory({ category, selectedCategory, setselectedCategory }) {
  return (
    <div className="select-bar">
      <select
        value={selectedCategory}
        onChange={(e) => {
          setselectedCategory(e.target.value)
        }}
      >
        <option value="">Choose Category</option>
        {category.map((category) => {
          return (
            <option key={category} value={category}>
              {category}
            </option>
          )
        })}
      </select>
    </div>
  )
}

export default ShowCategory
