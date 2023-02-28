import React from 'react'
import ProductList from '../components/Products/ProductList'
import Sidebar from '../components/Sidebar/Sidebar';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
const ProductsContainer = () => {
  return (
    <div className="productComp">
      <Header />

    <div className='productList__container'>
      <div className="productList__container_left">
      <Sidebar />
      </div>
      <section className="productList__container_right">

      <ProductList />
      </section>

    </div>
    <Footer />

    </div>
  )
}

export default ProductsContainer