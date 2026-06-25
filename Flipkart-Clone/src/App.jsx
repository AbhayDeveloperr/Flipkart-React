import React from 'react'
import {Route,Routes} from 'react-router-dom'
import Navbar from './components/Navbar'
import Categories from './components/Categories'
import CategoryPage from './components/CategoryPage'
import Banner from './components/Banner'

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
        name:'Grocery',
        image:"https://rukminim2.flixcart.com/fk-p-flap/196/196/image/050d2cfd58ff4b44.jpg?q=60"
    },
    {
        name:'Electronic',
        image:"https://rukminim2.flixcart.com/fk-p-flap/196/196/image/51b0d5f9aabc2462.jpg?q=60"
    },
    {
        name:'Home&Kitchen',
        image:"https://rukminim2.flixcart.com/fk-p-flap/196/196/image/d31d524f681630af.jpg?q=60"
    },
    {
        name:'Food & Health',
        image:"https://rukminim2.flixcart.com/fk-p-flap/196/196/image/f9ebd80a4825f28e.jpg?q=60"
    },
    {
        name:'Appliances',
        image:"https://rukminim2.flixcart.com/fk-p-flap/196/196/image/e8bb656b404b6151.jpg?q=60"
    },
    {
        name:'Fashion',
        image:"https://rukminim2.flixcart.com/fk-p-flap/196/196/image/f03c562321e764bb.jpg?q=60"
    },
    {
        name:'Toys,Baby',
        image:"https://rukminim2.flixcart.com/fk-p-flap/196/196/image/d4d87d1307cd2a29.jpg?q=60"
    },
    {
        name:'GenZ Trends',
        image:"https://rukminim2.flixcart.com/fk-p-flap/196/196/image/e1b4ec56637b0ac0.jpg?q=60"
    }
  ] 


const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        {/* Main Home Page jahan saari categories dikhengi */}
        <Route path="/" element={
          <div>
            <Banner/>
            <h1 className='text-2xl font-semibold px-52 pt-8 pb-4'>Categories</h1>
            <div className='flex flex-wrap px-52 py-6 gap-8'>
              {categories.map(function(elem, idx){
                return <Categories key={idx} name={elem.name} img={elem.image}/>
              })}
            </div>
          </div>
        } />

        {/* Dynamic Category Page Route (`:categoryName` ek variable ki tarah kaam karega) */}
        {/* Dusre pe ye dekho to url bana hai (/category/Mobile) ab :categoryName= (Mobile) ho jayega */}
        <Route path="/category/:categoryName" element={<CategoryPage/>} />
      </Routes>
    </>
  )
}

export default App
