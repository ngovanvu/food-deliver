import React from 'react'
import Header from '../Header/Header.jsx'
import Footer from '../Footer/Footer.jsx'
import Routers from '../../routers/Routers.js'
import Carts from '../UI/cart/Carts.jsx'

import { useSelector } from 'react-redux'

const Layout = () => {
  const showCart = useSelector(state => state.cartUI.cartIsVisible)
  return (
    <div>
    <Header/>

    {
      showCart && <Carts/>
    }
    
    <div>
    <Routers></Routers>
    </div>
    <Footer/>
    </div>
  )
}

export default Layout
