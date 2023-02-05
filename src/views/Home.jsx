import React from 'react'
import Footer from './layouts/Footer'
import Carousel from './layouts/Carousel'
import Navbar from './layouts/Navbar'
import Cards from './layouts/Cards'




import './layouts/layouts.css'


const Home = () => {
  return (
    <div id='main'>
      <Navbar/>
      <Carousel/>
      <Cards/>
    
      <Footer/>
    </div>
  )
}

export default Home
