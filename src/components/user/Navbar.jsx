import React from 'react'
import { NavLink } from 'react-router-dom';
import './NavBar.css'

const Navbar = () => {

  const NavItems = [
    {
      name:"Home",
      link:"/home"
    },
    {
      name:"Products",
      link:"/products"
    },
    {
      name:"Cart",
      link:"/cart"
    },
  ]

  return (
    <div>
      <ul>
        {NavItems.map((item,index) =><li key={index}>
          <NavLink to={item.link}>{item.name}</NavLink>
        </li>)}
      </ul>
    </div>
  )
}

export default Navbar
