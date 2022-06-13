import React from 'react'
import Featured from '../../components/featured/Featured'
import FeaturedProperties from '../../components/featuredProperties/FeaturedProperties'
import Header from '../../components/header/Header'
import Navbar from '../../components/navbar/Navbar'
import NewsLetter from '../../components/newsletter/NewsLetter'
import PropertyList from '../../components/propertyList/PropertyList'
import "./home.css"

const HomePage = () => {
  return (
    <div>
       <Navbar/>
       <Header/>

       <div className="homeContainer">
         <Featured/>
         <h1 className="homeTitle">Browse by property type</h1>
        <PropertyList/>
        <h1 className="homeTitle">Homes guests love</h1>
        <FeaturedProperties/>
        <NewsLetter/>
       </div>
    </div>
  )
}

export default HomePage