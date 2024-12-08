import React from 'react'
import { useState } from 'react'
import Checkout from './Checkout'

export default function Cart(props) {
  const [clicked,setClicked] = useState(false)

  function gotoSelection() {
    setClicked(true)
  }

  if (clicked===true){
  return <Checkout {...props}/>
  }
  return (
    <>
    <h1>Welcome to Cart</h1>
    <h3>{props.price}</h3>
    <button onClick={gotoSelection}>go check out</button>
    </>
  )
}
