import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import MainLayout from './layout/MainLayout'
import HomePage from './pages/HomePage'
import AppProvider from './providers/AppProvider'
import LoginForm from './components/LoginForm'

const App = () => {
  return (
    <BrowserRouter>
      <AppProvider>
        <Routes>
        <Route path='/' element={<MainLayout/>}>
            <Route index element={<HomePage/>}/>
            <Route path='login' element={<LoginForm/>}/>
        </Route>
      </Routes>
      </AppProvider>
    </BrowserRouter>
  )
}

export default App