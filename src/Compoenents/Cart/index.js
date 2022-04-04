import React from "react"
import { useSelector } from "react-redux"
import { NavLink } from "react-router-dom"
import Header from "../Header"
import "./cart.css"
import { ShowCartItems } from "./ShowCartItems"

function Cart() {
  const cartItems = useSelector((state) => state.cart)

  return (
    <>
      <Header />

      {cartItems.length > 0 ? (
        <ShowCartItems items={cartItems} />
      ) : (
        <EmptyCart />
      )}
    </>
  )
}

function EmptyCart() {
  return (
    <>
      <h1 className="text-info">
        {" "}
        Cart Is Empty{" "}
        <NavLink to="/products" className="link">
          View More Products
        </NavLink>
      </h1>
    </>
  )
}

export default Cart
