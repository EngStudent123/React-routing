import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

//const ProtectedRoute = ({children}) => {
    const ProtectedRoute = () => {  //children prop is removed when multiple child routes are present

  let loginedIn =  localStorage.getItem("loginStatus");

   // return loginedIn == "success" ? children : <Navigate to ={"/login"}/>;
    return loginedIn == "success" ? <Outlet/> : <Navigate to ={"/login"}/>;


  return (
    <div>
      
    </div>
  )
}

export default ProtectedRoute
