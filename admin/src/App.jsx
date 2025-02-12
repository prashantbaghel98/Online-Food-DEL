import { useState } from 'react'
import './App.css'
import Siderbar from './components/Sidebar/Siderbar.jsx'
import Add from './Pages/Add/Add.jsx'
import List from './Pages/List/List.jsx'
import Orders from './Pages/Orders/Orders.jsx'
import Navbar from './components/Navbar/Navbar.jsx'
import { Routes, Route } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {
  const url = "http://localhost:4000";
  return (
    <>
  <ToastContainer/>
     <Navbar/>
     <hr />
     <br />
     <div className="app-content">
     <Siderbar/>
     <Routes>
      <Route path="/add" element={<Add url={url} />}/>
      <Route path="/list" element={<List url={url} />}/>
      <Route path="/orders" element={<Orders url={url} />}/>
      </Routes>
     </div>
    </>
  )
}

export default App
