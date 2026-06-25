import React from 'react'
import { Link } from 'react-router-dom'

const Banner = () => {
  return (
    <Link to="/category/Electronic">
      <div className="px-52 py-4">
        <div className="w-full h-64 bg-blue-500 rounded-xl flex items-center justify-between px-12 text-white overflow-hidden shadow-md">
          <div>
            <h2 className="text-4xl font-bold mb-2">Big Shopping Days!</h2>
            <p className="text-lg opacity-90">Get up to 50% OFF on Electronics</p>
            <button className="mt-4 bg-white text-blue-600 font-semibold px-5 py-2 rounded-lg shadow-sm hover:bg-gray-100 transition">
              Shop Now
            </button>
          </div>
          <img 
            src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=500" 
            alt="Banner" 
            className="h-full object-cover opacity-80"
          />
        </div>
      </div>
    </Link>
  )
}

export default Banner