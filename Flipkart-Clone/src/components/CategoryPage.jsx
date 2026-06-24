import React from 'react'
import {useParams} from 'react-router-dom'

const CategoryPage = () => {

  const mockProducts = {
  Mobile: [
    { id: 1, title: "iPhone 15 Pro", price: "₹1,29,900", img: "https://placehold.co/150" },
    { id: 2, title: "Samsung Galaxy S24", price: "₹79,999", img: "https://placehold.co/150" }
  ],
  Sports: [
    { id: 1, title: "Cricket Bat (Kashmir Willow)", price: "₹1,499", img: "https://placehold.co/150" },
    { id: 2, title: "Football Size 5", price: "₹599", img: "https://placehold.co/150" }
  ],
  Grocery: [
    { id: 1, title: "Basmati Rice 5kg", price: "₹450", img: "https://placehold.co/150" }
  ]
}

  // teesre pe ye dekho ab yha pe categoryName = mobile ho gaya hai
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
              <img src={product.img} alt={product.title} className="w-full h-40 object-contain mb-3" />
              <h3 className="font-medium text-lg">{product.title}</h3>
              <p className="text-green-600 font-semibold mt-1">{product.price}</p>
              <button className="mt-3 w-full bg-[#FFE51F] text-black font-medium py-1.5 rounded-md text-sm">
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
