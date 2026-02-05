
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import MainLayout from './components/layout/MainLayout'
import UsersLayout from './components/layout/UsersLayout'
import Navbar from './components/Navbar'
import { ProductProvider } from './context/ProductContext'
import { UserProvider } from './context/UserContext'
import HomePage from './pages/HomePage'
import UserPage from './pages/UserPage'

const App = () => {
  return (
    <BrowserRouter>
      <ProductProvider>
        <UserProvider>
          <Routes>
            <Route path='/' index  element={
              <MainLayout>
              <HomePage/>
            </MainLayout>}/>

            <Route path="/users" element={
              <UsersLayout>
                <UserPage/>
              </UsersLayout>
            } />
          </Routes>
        </UserProvider>
      </ProductProvider>
    </BrowserRouter>
  )
}

export default App