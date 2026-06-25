import React from 'react'
import {useParams} from 'react-router-dom'
import mockProducts from '../Data/products';

const ProductDetail = () => {

  const {categoryName, id} = useParams();

  const products = mockProducts[categoryName]

  const product = products.find((item)=>item.id==id)

  return (
    <div>
      <div className='px-52 py-8'>
        <div>
            <img className='w-1/3' src={product.img}/>
            <h1 className='font-bold text-4xl pl-12'>{product.title}</h1>
            <h2 className='font-semibold text-green-500 pl-12 py-3 text-3xl'>{product.price}</h2>
            <button className="ml-12 bg-yellow-400 px-6 py-3 rounded">Add To Cart</button>
        </div>
        <div>
            <p>{product.description}</p>
        </div>
      </div>
    </div>
  )
}

export default ProductDetail
