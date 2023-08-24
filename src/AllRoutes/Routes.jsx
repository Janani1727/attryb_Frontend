import React from 'react'
import { Route,Routes } from 'react-router-dom'
import MarketPlace from '../pages/MarketPlace'
import Oem from '../pages/Oem'
import Authentication from '../pages/Authentication'
const AllRoutes = () => {
  return (

 <>
 <Routes>
    <Route path='/' element={<MarketPlace/>}>

    </Route>

    <Route path='/auth' element={<Authentication/>}>
        
    </Route>

    <Route path='/oem' element={<Oem/>}>
        
    </Route>

 </Routes>
 </>
  )
}

export default AllRoutes