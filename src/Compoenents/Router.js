import React from "react"
import { HashRouter as Router, Routes, Route, Navigate } from "react-router-dom"
import Login from "./Login"
import Products from "./Products"
import Product from "./Products/Product"
import Cart from "./Cart"
import { useSelector } from "react-redux"

export default function(props) {
  const isLogged = useSelector((state) => state.login.isLogged)

  return (
    <Router>
      <Routes>
        <Route path="/">
          <Route path="products">
            <Route
              index
              element={isLogged ? <Products /> : <Navigate to="/" />}
            />
            <Route
              path=":id"
              element={isLogged ? <Product /> : <Navigate to="/" />}
            />
          </Route>

          <Route
            path="cart"
            element={isLogged ? <Cart /> : <Navigate to="/" />}
          />
          <Route index element={<Login />} />
          <Route path="*" element={<h1>Sorry Page Doesnt Exist...</h1>} />
        </Route>
      </Routes>
    </Router>
  )
}
