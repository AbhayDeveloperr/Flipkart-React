import React from 'react'

const Categories2 = (props) => {
  return (
    <div className='cursor-pointer' >
        <div className='w-36 bg-cover mb-1'>
            <img src={props.img}/>
        </div>
        <p className='flex items-center justify-center text-sm'>{props.name}</p>
    </div>
  )
}

export default Categories2
