import React from 'react'
import {useParams} from 'react-router-dom'
import mockProducts from '../Data/products';

const ProductDetail = () => {

  const {categoryName, id} = useParams();

  const products = mockProducts[categoryName]

  const product = products.find((item)=>item.id==id)

  return (
    <div>
      <div className='px-52 bg-amber-200 h-full w-full'>

      </div>
    </div>
  )
}

export default ProductDetail
