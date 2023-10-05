import React from 'react'
import Navbar from '../compnents/Navbar/Navbar'
import Product from '../compnents/prodact/product'
import Promo from '../compnents/Promo/Promo'
import Header from '../compnents/Header/Header'
import Team from '../compnents/Team/Team'
import Content from '../compnents/Content/Content'

const Home = () => {
  return (
    <>
      <Navbar />

      {/* <Routes>
        <Route path='/' element={<Product />} />
        <Route path='/promo' element={<Promo />} />
        <Route path='/team' element={<Team />} />
        <Route path='/promo/content' element={<Content />} />
      </Routes> */}
      <Header />
      <Product />
      <Promo />
      <Team />
      <Content />
    </>
  )
}

export default Home