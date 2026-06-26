import React from 'react'

const CartPage = ({cart,setCart}) => {
  if(cart.length==0){
    return (
       <h1 className="text-center text-3xl mt-20">
            Cart is Empty
        </h1>
    )
  }

  const removeFromCart=(indexToRemove)=>{
    // Jo index match nahi karega, wo cart me reh jayega
    const updateCart = cart.filter((_,index)=> index !== indexToRemove)
    setCart(updateCart)
  }

  const data = localStorage.setItem("cartData",cart)
  console.log(data);
  

  return (
    <div className='px-52 py-10'>
      {cart.map((item,index)=>{
          return(
              <div key={index} className="flex justify-between items-center border rounded-lg p-5 mb-5 shadow">
                  <div className="flex gap-8 items-center">
                      <img className="w-40" src={item.img} alt={item.title} />
                      <div>
                          <h2 className="text-2xl font-semibold">{item.title}</h2>
                          <p className="text-green-600 text-xl mt-2">{item.price}</p>
                      </div>
                  </div>
                  <button onClick={()=>{
                    removeFromCart(index)
                  }} className="bg-red-500 text-white px-5 py-2 rounded cursor-pointer">
                      Remove
                  </button>
              </div>
          )
        })
      }
    </div>
  )
}

export default CartPage
