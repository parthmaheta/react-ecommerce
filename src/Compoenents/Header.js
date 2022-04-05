import React from "react"
import { useDispatch, useSelector } from "react-redux"
import { NavLink } from "react-router-dom"
import { LOGOUT } from "../Store/constants"
import "./Header.css"

function countTotalItem(arr) {
  let count = 0
  for (let item of arr) {
    count += item.quantity
  }
  return count
}

function Header() {
  const cartItems = useSelector((state) => countTotalItem(state.cart))

  return (
    <div className="header">
      <NavLink to="/" className="Logo">
        HelloBar
      </NavLink>

      <NavLink to="/cart" className="cart position-relative">
        <span className="position-absolute bottom text-bold">Chekout</span>
        <img src="./cart.png" alt="cart icon" title="View Cart" />
        <span className="tag position-absolute top-right">{cartItems}</span>
      </NavLink>
    </div>
  )
}

export default Header
