
import React, { Component } from 'react'
import { Route, Routes } from 'react-router-dom'
import './Component/Css/Bootstrap.map.css'
import  './Component/Css/Style.css'
import './Component/Js/Custom'
// import './Component/Js/Bootstrap'
// import './Component/Script/bootstrap.js'

import Main from './Component/Main/Main'
import Mac from './Component/Page/Mac/Mac'
import Iphone from './Component/Page/Iphone/Iphone'
import Ipad from './Component/Page/Ipad/Ipad'
import Watch from './Component/Page/Watch/Watch'
import Tv from './Component/Page/Tv/Tv'
import Music from './Component/Page/Music/Music'
import Support from './Component/Page/Support/Support'
import Cart from './Component/Page/Cart/Cart'
import Four04 from './Component/Page/Four04/Four04'
import SharedLayout from './Component/Main/SharedLayout'




function App() {
  return (
    <>
      
 <Routes>
        <Route path="/" element={<SharedLayout />}>
        <Route path='/' element={ <Main />} />
        
          <Route path='mac' element={  <Mac />} />
          <Route path='iphone' element={  <Iphone />} />
          <Route path='ipad' element={  <Ipad /> } />
          <Route path='watch' element={  <Watch /> } />
          <Route path='tv' element={  <Tv />} />
          <Route path='music' element={  <Music />} />
          <Route path='support' element={  <Support />} />
          <Route path='cart' element={  <Cart />} />
          <Route path='*' element={ <Four04/> } />
        </Route>
</Routes>
      
    </>
  )
} 

export default App

