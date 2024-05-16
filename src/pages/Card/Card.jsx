import React, { useContext } from 'react'
import './Card.css'
import { StoreContext } from '../../components/context/StoreContext'
const Card = () => {

  const {cartItems,food_list,removeFromCart} =useContext(StoreContext)

  return (

    <div className='cart'>
      <div className="cart-items">
        <div className="cart-items-titles">
          <p>Items</p>
          <p></p>
          <p></p>
          <p></p>
          <p></p>
          <p></p>
        </div>
      </div>
    </div>
  )
}

export default Card
