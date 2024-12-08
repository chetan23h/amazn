import React from 'react'
import Payment from './Payment'
import { useState } from 'react'

export default function Checkout() {
  const [clicked,setClicked] = useState(false)

  function gotoSelection() {
    setClicked(true)
  }

  if (clicked===true){
  return <Payment/>
  }
  return (
    <>
    <h1>Welcome to Checkout</h1>
    <button onClick={gotoSelection}>go to Payment</button>
    </>
  )
}
