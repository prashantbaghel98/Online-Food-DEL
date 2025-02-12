import React from 'react'
import { useState } from 'react'
import './Home.css'
import Navbar from '../../Components/Navbar/Navbar'
import Header from '../../Components/Header/Header'
import ExplorerMenu from '../../Components/ExplorerMenu/ExplorerMenu'
import FoodDisplay from '../../Components/FoodDisplay/FoodDisplay'
import AppDownload from '../../Components/AppDownload/AppDownload'


const Home = () => {

const [category, setcategory] = useState("All")

  return (
    <div className='body'>
      <Header />
      <ExplorerMenu category={category} setcategory={setcategory}/>
      <FoodDisplay category={category} ></FoodDisplay>
      <AppDownload/>
      

    </div>
  )
}

export default Home
