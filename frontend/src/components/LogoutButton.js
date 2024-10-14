import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'; 
//import { IoMdLogOut } from "react-icons/io";


const LogoutButton = () => {
    const{logout}=useAuth0()
    return (
      <div className='button-logout'>
          <button type="button" class="btn btn-light"  onClick={()=>logout()}>{/*<IoMdLogOut fontSize="25px" />*/} Logout</button>
      </div>
    )
}

export default LogoutButton