import React from 'react'
import {Link} from 'react-router-dom'

const Categories = (props) => {
  return (
    // Sabse pehle ye wala chlega to man lo maine Mobile pe click kar diya to url bn jyega (/category/Mobile)
    <Link to={`/category/${props.name}`}>
      <div className='cursor-pointer' >
        <div className='w-36 bg-cover mb-1'>
            <img src={props.img}/>
        </div>
        <p className='flex items-center justify-center text-sm'>{props.name}</p>
    </div>
    </Link>
  )
}

export default Categories
