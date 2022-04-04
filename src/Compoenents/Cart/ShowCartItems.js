import React from "react"
import { useSelector } from "react-redux"
import "./cartitem.css"
import { TableHead } from "./TableHead"

import { TBody } from "./Tbody"

export function ShowCartItems({ items }) {
  const totalItem = items.reduce((total, item) => total + item.quantity, 0)
  const totalPrice = countTotalPrice(items)

  return (
    <div className="container">
      <table>
        <TableHead />
        <TBody items={items} />
        <ShowTotal totalPrice={totalPrice} totalItem={totalItem} />
      </table>
    </div>
  )
}

function ShowTotal({ totalItem, totalPrice }) {
  return (
    <thead>
      <tr>
        <th></th>
        <th></th>
        <th></th>
        <th>{totalItem}</th>
        <th className="total-price">$ {totalPrice}</th>
      </tr>
    </thead>
  )
}

function countTotalPrice(items) {
  const products = useSelector((state) => state.products.products)
  let totalPrice = 0

  for (let item of items) {
    const product = products.find((product) => product.id === item.id)
    totalPrice += product.price * item.quantity
  }

  return totalPrice.toFixed(2)
}
