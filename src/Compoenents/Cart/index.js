import React from "react"
import { useSelector } from "react-redux"
import Header from "../Header"

function Cart() {
 const cartItems=useSelector(state=>state.cart)

  return (<>
   <Header/>
  
    {cartItems.length>0?<ShowCartItems items={cartItems}/>:<h1>No Items in Cart</h1>}



  </>)
}

export default Cart
