import React from 'react'
import { useNavigate } from 'react-router-dom'

const Logout = () => {

    let naviGateMe = useNavigate();

     const handleClick = () =>{
        localStorage.removeItem("loginStatus")
        naviGateMe("/");
    }
  return (
    <div>
      <button type='button'onClick={handleClick}>Logout</button>
    </div>
  )
}

export default Logout
