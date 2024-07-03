import React from 'react'
import './product.css';

const Product = () => {
    return (
        <div className='main_product_container'>
            <div className='product_image'>
                <img src="https://res.cloudinary.com/djfi9rtlx/image/upload/v1719740472/images-1661697129774_ss1nrx.webp" alt="" />
            </div>
            <div className='product_details'>
                <div className='product_lable'>
                    <p>Lable</p>
                </div>
                <div className='procut_desc'>
                    <p>Short Descrition</p>
                </div>
                <div>
                    <p>&#8377;999</p>
                </div>
                <div className='product_selectors'>

                    <div>
                        <p>Items</p>
                    </div>
                    <div>
                        <p>Size</p>
                    </div>
                </div>

                <div className='product_btn'>

                    <div>
                        <button>Add to Cart</button>                </div>
                    <div>
                        w
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Product