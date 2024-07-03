import React from 'react'
import './cart.css'

const WishList = () => {
  return (
    <div className='cart_main'>
        <div className='cart_container'>
            <div className='cart_item'>
                <div className='cart_product_icon'>
                    <i class="fa-regular fa-circle-xmark"></i>
                </div>
                <div className='product_img'>
                    <img className='prduct_img' src="https://res.cloudinary.com/djfi9rtlx/image/upload/v1719740472/images-1661697129774_ss1nrx.webp" alt="" />
                </div>
                <div className='cart_prodcut_title'>
                    <p>Versace</p>
                </div>
                <div className='cart_prodcut_title'>
                    <p>&#8377;999</p>
                </div>
                <div>
                    <button className='cart_product_btn'>ADD TO CART</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default WishList