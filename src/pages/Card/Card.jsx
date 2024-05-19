import React, { useContext, useState } from 'react';
import './Card.css';
import { StoreContext } from '../../components/context/StoreContext';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Card = () => {
  const { cartItems, food_list, removeFromCart, getTotalAmount } = useContext(StoreContext);
  const [tableNumber, setTableNumber] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  const handleProceedToOrder = () => {
    if (tableNumber && phoneNumber && getTotalAmount() > 0) {
      // Generate a 5 character long alphanumeric unique ID
      const orderId = Math.random().toString(36).substring(2, 7).toUpperCase();
      toast.success(`Order is successfully placed. Your Order ID is ${orderId}`);
    } else {
      toast.error('Fail to place your order. Please enter valid table number, phone number, and ensure your cart is not empty.');
    }
  };

  return (
    <div className='cart'>
      <ToastContainer />
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
              <div key={item._id}>
                <div className="cart-items-titles cart-items-item">
                  <img src={item.image} alt="" />
                  <p>{item.name}</p>
                  <p>Nu.{item.price}</p>
                  <p>{cartItems[item._id]}</p>
                  <p>Nu.{item.price * cartItems[item._id]}</p>
                  <p onClick={() => removeFromCart(item._id)} className='cross'>x</p>
                </div>
                <hr />
              </div>
            );
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
                <input
                  type="number"
                  className="input-number"
                  placeholder='Table No'
                  value={tableNumber}
                  onChange={(e) => setTableNumber(e.target.value)}
                  required
                />
              </div>
              <div className="details">
                <p>Phone Number</p>
                <input
                  type="number"
                  className="input-number"
                  placeholder='Phone No'
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  required
                />
              </div>
            </div>
            <hr />
            <div className="cart-total-details">
              <b>Total : </b>
              <b> Nu.{getTotalAmount()} /-</b>
            </div>
          </div>
          <button
            type='submit'
            className='proceed-to-order'
            onClick={handleProceedToOrder}
          >
            Proceed To Order
          </button>
        </div>
      </div>
    </div>
  );
}

export default Card;
