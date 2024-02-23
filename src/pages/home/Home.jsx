import React, { useContext } from 'react'
import Layout from '../../components/layout/Layout'
import myContext from '../../context/data/Context'
import HeroSection from '../../components/heroSection/HeroSection'
import Filter from '../../components/filter/Filter'
import ProductCard from '../../components/productCard/ProductCard'
import Testimonial from '../../components/testimonial/Testimonial'
import Track from '../../components/track/Track'
function Home() {
  
  return (
    <Layout>
          <HeroSection></HeroSection>
          <Filter></Filter>
          <ProductCard></ProductCard>
          <Track></Track>
          <Testimonial></Testimonial>
    </Layout>
  )
}

export default Home