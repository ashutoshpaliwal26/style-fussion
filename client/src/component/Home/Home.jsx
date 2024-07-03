import React, { useEffect, useState } from 'react'
import BrandImage from './BrandImage'
import FeatureCatagory from './catagory/FeatureCatagory'
import FeaturedItem from './FeaturedItem'
import Loading from '../Loading'

const Home = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState("");

  useEffect(()=>{
    setTimeout(() => {
      setData("Hello world")
      setLoading(false)
    }, 2000);
  }, [])

  if(loading){
    return <Loading/>
  }
  
    return (
      <>
      
      <BrandImage/>
      <FeatureCatagory/>
      <FeaturedItem title={"Featured Item"}/>
      
      
      
      </>
    )
}

export default Home