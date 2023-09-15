import React from 'react'
import Navbar from './Navbar/Navbar'
import Product from './prodact/product'
import Promo from './Promo/Promo'
import { Routes, Route } from 'react-router-dom'
import Team from './Team/Team'

const Header = () => {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path='/' element={<Product />} />
        <Route path='/promo' element={<Promo />} />
        <Route path='/team' element={<Team />} />
      </Routes>
      
    </>
  )
}

export default Header