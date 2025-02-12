import React, { useContext } from 'react'
import './Cart.css'
import { StoreContext } from '../../context/StoreContext'
import { useNavigate } from 'react-router-dom'

const Cart = () => {
    const { cartItems, food_list, removeFromCart, getTotalCartAmount,url } = useContext(StoreContext)
    const navigate = useNavigate();
    return (
        <section className='cart'>
            <div className="cart-items">
                <div className="cart-items-title">
                    <p>Items</p>
                    <p>Title</p>
                    <p>Price</p>
                    <p>Quantity</p>
                    <p>Total</p>
                    <p>Remove</p>
                </div>
            </div>
            <hr />

            {
                food_list.map((item, index) => {
                    if (cartItems[item._id] > 0) {
                        return (
                            <div className='cart-items-title cart-items-item'>
                                <img src={url+"/image/"+item.image} alt="" />
                                <p>{item.name}</p>
                                <p>${item.price}</p>
                                <p>{cartItems[item._id]}</p>
                                <p>${item.price * cartItems[item._id]}</p>
                                <p className='cart-items-item-cancel-btn' onClick={() => removeFromCart(item._id)}>x</p>
                            </div>
                        )
                    }
                })
            }


            <div className="cart-bottom">
                <div className="cart-total">
                    <h2>Card Total</h2>
                    <div>

                        <div className="card-total-details">
                            <p>Subtotal</p>
                            <p>${getTotalCartAmount()}</p>
                        </div>
                        <hr />
                        <div className="card-total-details">
                            <p>Delivery Fee</p>
                            <p>${getTotalCartAmount()===0?0:2}</p>
                        </div>
                        <hr />
                        <div className="card-total-details">
                            <b>Total</b>
                            <b>${getTotalCartAmount()===0?0:getTotalCartAmount() + 2}</b>
                        </div>
                    </div>
                    <button onClick={() => navigate('/order')}>Process To Checkout</button>
                </div>

                <div className="cart-promocode">
                    <div>
                        <p>If you have a promocode, Enter it here</p>
                        <div className="cart-promocode-input">
                            <input type="text" placeholder='PROMOCODE' />
                            <button>Submit</button>
                        </div>
                    </div>
                </div>

            </div>

        </section>
    )
}

export default Cart