import React from 'react'
import { NavLink } from 'react-router-dom'


const Navibarr = () => {
  return (
    <div>
        <center>
                <NavLink to={"/mobiles"}> Mobiles</NavLink>{"  |  "}
                <NavLink to={"/fash"}>Fashion</NavLink>{"  |  "}
                <NavLink to={"/login"}>Login</NavLink>{"  |  "}
                 <NavLink to={"/dashboard"}>Dashboard</NavLink>{"  |  "}
                 <NavLink to={"/profile"}>Profile</NavLink>{"  |  "}
                 <NavLink to={"/message"}>Message</NavLink>
                </center>
    </div>
  )
}

export default Navibarr
