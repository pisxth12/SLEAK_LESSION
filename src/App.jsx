
import MainLayout from './components/layout/MainLayout'
import Navbar from './components/Navbar'
import { ProductProvider } from './context/ProductContext'
import HomePage from './pages/HomePage'

const App = () => {
  return (
    <ProductProvider>
      <MainLayout>
        <HomePage/>
      </MainLayout>
    </ProductProvider>
  )
}

export default App