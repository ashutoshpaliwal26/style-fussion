import React from 'react'
import './featureItem.css'
import ProductCard from '../Card/ProductCard'

const FeaturedItem = (props) => {
  return (
    <div className='feature_item'>
      <div className='lable_div'>
        <p>
          {props.title}
        </p>
        <div className='line'>
        </div>
      </div>
      <div className='featured_prouduct_item'>
        <div className='product_card_div'>
          <ProductCard/>
        </div>
        <div className='product_card_div'>
          <ProductCard/>
        </div>
        <div className='product_card_div'>
          <ProductCard/>
        </div>
        <div className='product_card_div'>
          <ProductCard/>
        </div>
        <div className='product_card_div'>
          <ProductCard/>
        </div>
        <div className='product_card_div'>
          <ProductCard/>
        </div>
        <div className='product_card_div'>
          <ProductCard/>
        </div>
        <div className='product_card_div'>
          <ProductCard/>
        </div>
      </div>
    </div>
  )
}

export default FeaturedItem