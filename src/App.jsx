import React from 'react'
import Mobiles from './Mobiles'
import Fashion from './Fashion'
import { Route, Routes } from 'react-router-dom'
import Navibarr from './Navibarr'
import Login from './Login'
import Dashboard from './Dashboard'
import ProtectedRoute from './ProtectedRoute'
import Profile from './Profile'
import Message from './Message'

const App = () => {
  
  return (
    <div>
      <center>
        <h1>Welocome to my routing app</h1>
        {/* <Mobiles/> */}
        {/* <Fashion/> */}

        {/* set url to the components / page / content */}
      <Navibarr/>
      <br/>
      <Routes>
        <Route path='mobiles' element={<Mobiles/>}/>
        <Route path='fash' element={<Fashion/>}/>
        <Route path='login' element = {<Login/>}/>
        {/* <Route path='/' element = {<Home/>}/> */}
        {/* <Route path='dashboard' element = {<Dashboard/>}/> */}
      
{/*         
        <Route path='dashboard' element={
        <ProtectedRoute>
          <Dashboard/>
        </ProtectedRoute>
        }/>

        
        <Route path='profile' element={
        <ProtectedRoute>
          <Profile/>
        </ProtectedRoute>
        }/>

        
        <Route path='message' element={
        <ProtectedRoute>
          <Message/>
        </ProtectedRoute>
        }/>
 */}

        <Route element={<ProtectedRoute/>}>
         <Route path='dashboard' element = {<Dashboard/>}/>
         <Route path='profile' element = {<Profile/>}/>
         <Route path='message' element = {<Message/>}/>
        
        </Route>


        </Routes>
      </center>
      
    </div>
  )
}

export default App
