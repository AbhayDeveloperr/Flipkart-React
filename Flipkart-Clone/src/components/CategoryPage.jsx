import React from 'react'
import {Link, useParams} from 'react-router-dom'
import mockProducts from '../Data/products'

const CategoryPage = () => {


  // teesre pe ye dekho ab yha pe categoryName = Mobile ho gaya hai
  const { categoryName } = useParams();

  // Us category ke products nikalenge, agar data nahi hai toh khali array milega
  const products = mockProducts[categoryName] || [];

  return (
    <div className="px-52 py-10">
      <h2 className="text-3xl font-bold mb-6">{categoryName} Products</h2>
      
      {products.length === 0 ? (
        <p className="text-gray-500">Filhal is category me koi products nahi hain.</p>
      ) : (
        <div className="grid grid-cols-4 gap-6">
          {products.map((product) => (
            <div key={product.id} className="border p-4 rounded-lg shadow-sm hover:shadow-md transition">
              <Link to={`/product/${categoryName}/${product.id}`}>
                <img src={product.img} alt={product.title} className="w-full h-44 object-contain mb-3" />
              </Link>
              <h3 className="font-medium text-lg">{product.title}</h3>
              <p className="text-green-600 font-semibold mt-1">{product.price}</p>
              <button className="mt-3 w-full bg-[#FFE51F] text-black font-medium py-1.5 rounded-md text-sm cursor-pointer active:scale-95">
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}


export default CategoryPage
