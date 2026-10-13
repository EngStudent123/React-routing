import React from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Fashion from './Fashion'
import Mobiles from './Mobiles'

const App = () => {
  return (
    <div>
      <center>
        <h2>Welocomt to my first routing app</h2>

        


        <Routes>
          <Route path='mobiles' element={<Mobiles/>}/>

          <Route path='Fashion' element={<Fashion/>}/>
        </Routes>


      </center>
    </div>
  )
}

export default App
