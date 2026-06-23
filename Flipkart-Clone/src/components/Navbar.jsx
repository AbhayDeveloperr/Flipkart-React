import React from 'react'

const Navbar = () => {
  return (
    <div>
       <header className="shadow-sm">
        <div className="container mx-auto px-32 py-3">
            <div className="grid grid-cols-7 space-x-8">
                <div className="col-span-1 bg-[#FFE51F] flex justify-center rounded-lg cursor-pointer">
                    <img className="w-24" src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/fk-mp-c815b6.svg" alt="" />
                </div>
                <div className="col-span-4">
                    <label htmlFor="search" className="block mb-2.5 text-sm font-medium text-heading sr-only ">Search</label>
                    <div className="relative">
                        <div className="absolute inset-y-0 inset-s-0 flex items-center ps-3 pointer-events-none">
                            <svg className="w-4 h-4 text-body" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" strokeLinecap="round" strokeWidth="2" d="m21 21-3.5-3.5M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z"/></svg>
                        </div>
                        <input type="search" id="search" className="block w-full px-3 py-2 ps-9 bg-neutral-secondary-medium border-2 border-[#2EA1FF] rounded-lg  text-heading text-sm rounded-base focus:ring-brand focus:border-brand shadow-xs placeholder:text-body" placeholder="Search for Products, Brands and More" required />
        
                    </div>
                </div>
                <div className="col-span-2 flex space-x-8 px-4 items-center text-sm">
                    <div className="flex space-x-2 items-center cursor-pointer">
                        <img src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/profile-6bae67.svg" alt="" />
                        <p>Account</p>
                    </div>
                    <div className="cursor-pointer">More</div>
                    <div className="flex space-x-2 items-center cursor-pointer">
                        <img src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/header_cart_v4-6ac9a8.svg" alt="" />
                        <p>Cart</p>
                    </div>
                </div>
            </div>
        </div>
       </header>
    </div>
  )
}

export default Navbar
