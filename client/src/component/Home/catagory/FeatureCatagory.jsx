import React from 'react'
import "./FeatureCatagory.css"


const FeatureCatagory = (props) => {
    return (
        <>
            <div className='full_feature'>

                <div className='featured_catagory'>
                    <div className='featured_catagory_label'>Feature Catagrory</div>
                    <div className='cat_line'></div>
                </div>

                <div className="card">
                    <div className='card_cont'>
                        <div className='image_cont image_man'>
                            <button className='feature_button'>SHOP NOW</button>
                        </div>
                    </div>
                    <div className='card_cont'>
                        <div className='image_cont image_woman'>
                            <button className='feature_button'>SHOP NOW</button>
                        </div>
                    </div>
                    <div className='card_cont'>
                        <div className='image_cont image_kids'>
                            <button className='feature_button'>SHOP NOW</button>
                        </div>
                    </div>
                </div>
            </div>


        </>
    )
}

export default FeatureCatagory