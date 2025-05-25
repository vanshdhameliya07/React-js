import Header from './Header'
import Navbar from './Navbar'
import Banner from './Banner'
import CardX from './CardX'
import Card2 from './Card2'
import Banner2 from './Banner2'
import Card3 from './Card3'
import News from './News'
import Footer from './Footer'
import Card4 from './Card4'
import ProductCard from './ProductCard'
import Product from '../Product'
import { category, product } from './Data'
import { useState } from 'react'
import './App.css'



function App() {
  let [filters, setFilter] = useState([])

  let filter = (name, id) => {
    if (!name || id == 0) {
      setFilter(category);
    }

    else {
      let filtered = category.filter(c => c.name === name);

      setFilter(filtered);
      setFilter(filtered.length > 0 ? filtered : category);
    }
  }

  return (
    <>
      <Header />
      <Navbar />
      <Banner />
      <div align="center" className='mt-5 dd'>
        <button className='butto'  onClick={() => filter()}>All</button>

        {
          product.map((val, index) => {


            let { name, id } = val

            return (
                <button className='butto' onClick={() => filter(val.name, id)}>{name}</button>

            )
          })
        }
      </div>
      <Product product={filters} />
      <ProductCard />
      <CardX />
      <Card2 />
      <Banner2 />
      <Card4 />
      <Card3 />
      <News />
      <Footer />
    </>
  )
}

export default App
