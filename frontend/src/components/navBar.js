import React from 'react'
import "../styles/NavBar.css";
import { Link } from "react-router-dom";

const links = [
    {
      name: "Kanban",
      href: "/"
    },
    {
      name: "Clima",
      href: "/clima"
    } 
]

function navBar(){
  return (
    <div className='navbar'>
    {links.map((x) =>(
                  
        <div className="nav-links">
        <Link to={x.href}>{x.name}</Link>
        </div>
      ))}
    </div>
  )
}

export default navBar