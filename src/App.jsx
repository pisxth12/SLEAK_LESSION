import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import MainLayout from './layouts/MainLayout'
import HomePage from './pages/HomePage'
import About from './pages/About'
import ProductDetail from './components/ProductDetail'
import { CartProvider } from './context/CartContext'
import Cart from './components/Cart'
import Login from './pages/Login'
import Products from './pages/Products'
import Contact from './pages/Contact'

const App = () => {
  return (
    <BrowserRouter>
      <CartProvider>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<HomePage />} />
            <Route path="products" element={<Products/>} />
            <Route path="about" element={<About/>} />
            <Route path='product/:id' element={<ProductDetail/>}/>  
            <Route path="contact" element={<Contact/>} />
            <Route path='cart' element={<Cart/>}/>
          </Route>
          <Route path='/login' element={<Login/>}/>
        </Routes>
      </CartProvider>
    </BrowserRouter>
  )
}

export default App