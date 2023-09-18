import React from 'react'
import Navbar from '../compnents/Navbar/Navbar'
import Product from '../compnents/prodact/product'
import Promo from '../compnents/Promo/Promo'
import { Routes, Route } from 'react-router-dom'
import Team from '../compnents/Team/Team'
import Content from '../compnents/Content/Content'

const Header = () => {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path='/' element={<Product />} />
        <Route path='/promo' element={<Promo />} />
        <Route path='/team' element={<Team />} />
        <Route path='/promo/content' element={<Content />} />
      </Routes>
      
    </>
  )
}

export default Header