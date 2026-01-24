import { useProduct } from "../context/ProductContext";

const ProductCart = () => {
    const { count, addProduct} = useProduct();
    console.log(count);

  return (
    <div>
      {[...Array(6)].map((_, index) => (
            <div key={index}>
                <button onClick={addProduct} className="bg-blue-500 text-white p-2 rounded">
                Add to cart
                </button>
            </div>
            ))}
    </div>
  )
}

export default ProductCart
