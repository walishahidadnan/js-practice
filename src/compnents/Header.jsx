import React from 'react'
import Navbar from './Navbar/Navbar'
import Product from './prodact/product'
import { Routes, Route } from 'react-router-dom'

const Header = () => {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path='/' element={<Product />} />
      </Routes>
      
    </>
  )
}

export default Header