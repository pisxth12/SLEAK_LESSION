
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import AppProvider from './providers/AppProvider'
import MainLayout from './components/layout/MainLayout'
import HomePage from './pages/HomePage'
import ProductDetail from './components/ProductDetail'
import UsersLayout from './components/layout/UsersLayout'
import UserPage from './pages/UserPage'
import AuthLayout from './components/layout/AuthLayout'
import Login from './components/Login'



const App = () => {
  return (
    <BrowserRouter>
      <AppProvider>
        <Routes>
          <Route path='/' element={
            <MainLayout>
                <HomePage/>
             </MainLayout>}/>

            <Route
              path="/products/:id"
              element={
                <MainLayout>
                  <ProductDetail />
                </MainLayout>
              }
            />

            <Route
            path="/users"
            element={
              <UsersLayout>
                <UserPage />
              </UsersLayout>
            }
          />

           <Route
            path="/login"
            element={
              <AuthLayout>
                <Login />
              </AuthLayout>
            }
          />


        </Routes>

      </AppProvider>
    </BrowserRouter>
  )
}

export default App