import React from 'react'

const Categories2 = () => {

  const categories = [
    {
        name:'Mobile',
        image:"https://rukminim2.flixcart.com/fk-p-flap/196/196/image/a6189afdd765a687.jpg?q=60"
    },
    {
        name:'Sports',
        image:"https://rukminim2.flixcart.com/fk-p-flap/196/196/image/c632b839ac6d183e.jpg?q=60"
    },
    {
        name:'Groceries',
        image:"https://rukminim2.flixcart.com/fk-p-flap/196/196/image/050d2cfd58ff4b44.jpg?q=60"
    },
    {
        name:'',
        image:""
    },
    {
        name:'Mobile',
        image:""
    },
    {
        name:'Mobile',
        image:""
    },
    {
        name:'Mobile',
        image:""
    },
    {
        name:'Mobile',
        image:""
    }
  ]  

  return (
    <div>
       <h1 className='text-2xl font-semibold pb-2 px-52 py-6'>Categories</h1>
        <div className='px-52 py-6 gap-12 flex grid grid-cols-6 '>
            <div className='grid col-span-1'>
                    <div className="w-36 bg-cover mb-1">
                        <img className="" src="https://rukminim2.flixcart.com/fk-p-flap/196/196/image/a6189afdd765a687.jpg?q=60" alt=""/>
                    </div>
                    <p className='flex items-center justify-center'>Mobile</p>
            </div>
        </div>
    </div>
  )
}

export default Categories2
