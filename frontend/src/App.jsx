import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './Pages/Home/Home'
import Cart from './Pages/Cart/Cart'
import ReactDOM from "react-dom/client";
import Navbar from './Components/Navbar/Navbar'
import Footer from './Components/Footer/Footer'
import LoginPopup from './Components/LoginPopup/LoginPopup'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PlaceOrder from './Pages/PlaceOrder/PlaceOrder'
import Verify from './Pages/Verify/Verify'
import Order from './Pages/Order/Order'

function App() {

  const [showLogin, setShowLogin] = useState(false)

  return (
    <>
      {showLogin ? <LoginPopup setShowLogin={setShowLogin} /> : null}

      <Router>
        <Navbar setShowLogin={setShowLogin} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/order" element={<PlaceOrder />} />
          <Route path="/verify" element={<Verify/>} />
          <Route path="/myorders" element={<Order/>} />
        </Routes>
        <Footer />
      </Router>
    </>
  )
}

export default App