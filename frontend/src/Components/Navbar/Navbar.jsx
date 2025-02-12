import React, { useContext } from 'react'
import './Navbar.css'
import { assets } from '../../assets/assets'
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { StoreContext } from '../../context/StoreContext';

const Navbar = ({ setShowLogin }) => {

    const [menu, setmenu] = useState("home");
    const { getTotalCartAmount, token, setToken } = useContext(StoreContext)

    const navigate = useNavigate();
const logout = ()=>{
localStorage.removeItem("token")
setToken("");
naviagte("/")

}

    return (
        <>
            <nav>
                <div className="nav-logo">
                    <Link to='/'><img src={assets.logo} alt="site-logo" /></Link>
                </div>

                <div className="nav-middle">
                    <ul>
                        <Link to='/'><li onClick={() => { setmenu("home") }} className={menu === "home" ? "active" : ""}>Home</li></Link>
                        <Link to='/menu'><li onClick={() => { setmenu("menu") }} className={menu === "menu" ? "active" : ""}>Menu</li></Link>
                        <Link to='/mobile-app'><li onClick={() => { setmenu("mobile-app") }} className={menu === "mobile-app" ? "active" : ""}>Mobile-App</li></Link>
                        <Link to='/contact-us'><li onClick={() => { setmenu("contact-us") }} className={menu === "contact-us" ? "active" : ""}>Contact Us</li></Link>
                    </ul>
                </div>

                <div className="nav-right">
                    <img src={assets.search_icon} alt="" />
                    <Link to='/cart'><img src={assets.basket_icon} alt="" /> </Link>
                    <div className={getTotalCartAmount() === 0 ? "" : "dot"}></div>
                    {
                        !token ? <button onClick={() => setShowLogin(true)} className='btn'>Sign In</button> : <div className="navbar-profile">
                            <img src={assets.profile_icon} alt="" />
                            <ul className='nav-profile-dropdown'>
                                <li onClick={()=>{navigate('/myorders')}}><img src={assets.bag_icon} alt="" /><p>Orders</p></li>
                                <hr />
                                <li onClick={logout}><img src={assets.logout_icon} alt="" /><p>Logout</p></li>
                            </ul>

                        </div>
                    }

                </div>
            </nav>
        </>
    )
}

export default Navbar
