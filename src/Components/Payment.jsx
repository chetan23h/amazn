import React from 'react'
import {useSelector,useDispatch} from 'react-redux'
import { useState } from 'react'
import { updateWallet } from '../store';

export default function Payment() {
  const [clicked,setClicked] = useState(false)
  const user = useSelector(state => state.user)
  const dispatch = useDispatch();
  function handleOnClick() {
    setClicked(true)
    dispatch(updateWallet(1000))
  }

  if(clicked){
    return(
      <>
      <h4>Updated Wallet: {user.wallet}</h4>
      </>
    )
  }

  return (
    <>
    <h3>Choose a Payment Method</h3>
    <h4>Initial State: {user.wallet} </h4>
    <button onClick={handleOnClick}>PAY 1000</button>
    </>
  )
}
