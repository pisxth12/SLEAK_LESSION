import React, { useEffect, useState } from 'react'
import Loading from './components/Loading';
import ProductCard from './components/ProductCard';

const App = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch('https://fakestoreapi.com/products');
      const data = await response.json();
      setProducts(data);
    } catch (error) {
      const errorMessage = error.message;
      setError(errorMessage);
    } finally {
      setLoading(false);  
    }
  }
  if(loading) {
    <Loading message='Product is loading...'/>
  }
  
  return (
    <>
      <p>{error}</p>
      <div className='grid grid-cols-1 sm:grid-cols-2  md:grid-cols-3 lg:grid-cols-4 gap-2 mt-5'>
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </div>
    </>
  )
}

export default App