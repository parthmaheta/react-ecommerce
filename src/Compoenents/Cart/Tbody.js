import React from "react"
import { Link } from "react-router-dom"
import { useSelector } from "react-redux"

export function TBody({ items }) {
  return (
    <tbody>
      {items.map((item, index) => (
        <ItemRow key={index} item={item} index={index} />
      ))}
    </tbody>
  )
}
export function ItemRow({ item, index }) {
  const product = useSelector((state) =>
    state.products.products.find((product) => product.id === item.id)
  )

  return (
    <tr>
      <td>{index + 1}</td>
      <td>
        <img src={product.image} alt="product img" />{" "}
        <Link to={"/products/" + item.id}>{product.title}</Link>
      </td>
      <td>{product.price}</td>
      <td>{item.quantity}</td>
      <td>{product.price * item.quantity}</td>
    </tr>
  )
}
