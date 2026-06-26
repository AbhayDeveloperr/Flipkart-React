import React from 'react'
import {useParams} from 'react-router-dom'
import mockProducts from '../Data/products';

const ProductDetail = ({cart,setCart}) => {

  const addToCart=()=>{
    setCart([...cart,product])
    console.log(cart); 
  }

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
            <button onClick={addToCart} className="ml-12 bg-yellow-400 px-8 py-3 rounded cursor-pointer active:scale-95">Add To Cart</button>
        </div>
        <div className='py-4'>
            <p>{product.description}</p>
        </div>
      </div>
    </div>
  )
}

export default ProductDetail
