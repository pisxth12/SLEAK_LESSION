
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import MainLayout from './components/layout/MainLayout'
import UsersLayout from './components/layout/UsersLayout'
import { ProductProvider } from './context/ProductContext'
import { UserProvider } from './context/UserContext'
import HomePage from './pages/HomePage'
import UserPage from './pages/UserPage'
import AuthLayout from './components/layout/AuthLayout'
import Login from './components/Login'
import { AuthProvider } from './context/AuthContext'

const App = () => {
  return (
    <BrowserRouter>
      <ProductProvider>
        <UserProvider>
          <AuthProvider>
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

                <Route path='/login' element={<AuthLayout>
                  <Login/>
                </AuthLayout>}/>

              </Routes>
          </AuthProvider>
        </UserProvider>
      </ProductProvider>
    </BrowserRouter>
  )
}

export default App