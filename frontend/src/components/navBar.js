import React from 'react'
import "../styles/NavBar.css";
import { Link } from "react-router-dom";
import { useAuth0 } from '@auth0/auth0-react'; 
import LoginButton from  "./LoginButton"
//import LoginProfile from "./LoginProfile"
import LogoutButton from './LogoutButton';

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

function NavBar(){

const{isAuthenticated}=useAuth0()

  return (
    <div className='navbar'>
    {links.map((x) =>(
                  
        <div className="nav-links">
        <Link to={x.href}>{x.name}</Link>
        
        </div>
        
      ))}
        {isAuthenticated ?
          <LogoutButton/>
          :
          <LoginButton/>
        }
    </div>
  )
}

export default NavBar