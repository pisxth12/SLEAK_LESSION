import React from 'react'
import { useProducts } from '../hooks/useProducts'
import ProductCard from '../components/ProductCard'
import Loading from './ui/Loading';
import Error from './ui/Error';

const FeaturedProducts  = () => {
    const { products, error, loading} = useProducts();  
    if(loading) return <Loading/>;
    if(error) return <Error error={error} fetchProducts={fetchProducts}/>


  return (
    <div>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4'>
            {products.map((product) =>(
                <ProductCard key={product.id} product={product}/>
            ))}
        </div>
    </div>
  )
}

export default FeaturedProducts 