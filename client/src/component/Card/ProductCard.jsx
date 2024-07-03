import React from 'react'
import "./productcard.css"

const ProductCard = () => {
    return (
        <div className='product_card'>
            <div className='product_card_img'>
                <img className='product_card_img' src="https://res.cloudinary.com/djfi9rtlx/image/upload/v1719740472/images-1661697129774_ss1nrx.webp" width="100%" alt="" />
            </div>
            <div className='product_card_title'>
                <p>Versace</p>
            </div>
            <div className='product_card_desc'>
                <p>This is Description</p>
            </div>
            <div className='product_card_btn'>
                <div className='product_like'>
                    <i class="fa-regular fa-heart"></i>
                </div>
                <div className='product_price'>
                    <p>&#8377;999</p>
                </div>
                <div className='product_cart'>
                    <i class="fa-solid fa-cart-shopping"></i>
                </div>
            </div>
        </div>
    )
}

export default ProductCard