import React, { useContext } from 'react'
import './FoodItem.css'
import { assets } from '../../assets/assets'
import { StoreContext } from '../../context/StoreContext'

const FoodItem = ({ id, name, price, description, image }) => {

    const { cartItems, addToCart, removeFromCart,url } = useContext(StoreContext);

    return (
        <div className='food-item'>
            <div className="food-item-image">
                <img className='food-item-main-image' src={url+"/image/"+image} alt="" />   
                {
                    !cartItems[id] ? <img className='food-item-add' onClick={() => addToCart(id)} src={assets.add_icon_white} alt="" /> : <div className='food-item-counter'>
                        <img onClick={() => removeFromCart(id)} src={assets.remove_icon_red} alt=""  />
                        <p>{cartItems[id]}</p>
                        <img onClick={() => addToCart(id)} src={assets.add_icon_green} alt=""  />
                    </div>
                }
            </div>
            <div className="food-item-content">

                <div className="food-item-name-rating">
                    <h2>{name}</h2>
                    <img src={assets.rating_starts} alt="" height={20} />
                </div>

                <div className="food-item-des-price">
                    <p>{description}</p>
                    <p className='food-item-price'>${price}</p>
                </div>
            </div>
        </div>
    )
}

export default FoodItem
