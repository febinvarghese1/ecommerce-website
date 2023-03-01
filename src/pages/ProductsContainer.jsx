import React from 'react'
import ProductList from '../components/Products/ProductList'
import Sidebar from '../components/Sidebar/Sidebar';
import Layout from '../Layout/Layout';
const ProductsContainer = () => {
  return (
    <div className="productComp">
      <Layout >

    <div className='productList__container'>
      <div className="productList__container_left">
      <Sidebar />
      </div>
      <section className="productList__container_right">

      <ProductList />
      </section>

    </div>
    </Layout>

    </div>
  )
}

export default ProductsContainer