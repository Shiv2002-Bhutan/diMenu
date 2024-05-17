import React, { useContext } from 'react'
import './Card.css'
import { StoreContext } from '../../components/context/StoreContext'
const Card = () => {

  const { cartItems, food_list, removeFromCart,getTotalAmount } = useContext(StoreContext)

  return (

    <div className='cart'>
      <div className="cart-items">
        <div className="cart-items-titles">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr />
        {food_list.map((item, index) => {
          if (cartItems[item._id] > 0) {

            return (
              <div>
                <div className="cart-items-titles cart-items-item">
                  <img src={item.image} alt="" />
                  <p>{item.name}</p>
                  <p>Nu.{item.price}</p>
                  <p>{cartItems[item._id]}</p>
                  <p>Nu.{item.price * cartItems[item._id]}</p>
                  <p onClick={()=>removeFromCart(item._id)}className='cross'>x</p>
                </div>
                <hr />
              </div>
            )
          }
        })}
      </div>
      <div className="cart-bottom">
        <div className="cart-total">
          <h2>Your Orders</h2>
          <div>
            <div className="user-details">
              <div className="details">
                <p>Table Number</p>
                <input type="text"placeholder='Table No' />

              </div>
              <div className="details">
              <p>Phone Number</p>
                <input type="text"placeholder='Phone No' />
              </div>
            </div>
            <hr />
            <div className="cart-total-details">
                <b>Total : </b>
                <b> Nu.{getTotalAmount()} /-</b>
            </div>
         
          </div>
          <button>PROCEED TO ORDER</button>
        </div>
      </div>
    </div>
  )
}

export default Card
