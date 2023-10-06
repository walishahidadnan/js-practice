import React from 'react'
import Navbar from '../compnents/Navbar/Navbar'
import Header from '../compnents/Header/Header'
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
      <Content />
    </>
  )
}

export default Home