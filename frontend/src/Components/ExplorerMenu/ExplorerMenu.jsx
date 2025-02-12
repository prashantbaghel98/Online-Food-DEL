import React from 'react'
import './ExplorerMenu.css'
import { menu_list } from '../../assets/assets'

const ExplorerMenu = ({category,setcategory}) => {
  return (
   <section className='explorer-menu'>
<h1>Explorer Our Menu</h1>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, itaque.</p>
<div className="menu-list">
    {
        menu_list.map((items,id)=>{
            return <div onClick={()=>setcategory(prev=>prev===items.menu_name?"All":items.menu_name)} className='menu-list-single-item' key={id}>
                <img className={category===items.menu_name?"active":""} src={items.menu_image} alt={items.menu_name} />
                <p>{items.menu_name}</p>
            </div>
        })
    }
</div>
   </section>
  )
}

export default ExplorerMenu
