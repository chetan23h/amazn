import Cart from './Cart'
import { useState } from 'react'
import React from 'react'

export default function Selection(props) {
  const [clicked,setClicked] = useState(false)

  function gotoSelection() {
    setClicked(true)
  }

  if (clicked===true){
  return <Cart/>
  }
  return (
    <>
    <h1>Welcome to Selection Component</h1>
    <h3>{props.price}</h3>
    <button onClick={gotoSelection}>go to cart</button>
    </>
  )
}
