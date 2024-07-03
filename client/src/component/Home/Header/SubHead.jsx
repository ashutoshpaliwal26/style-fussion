import React from 'react';
import './subhead.css';
import { Link } from 'react-router-dom';

const Subhead = () => {
  return (
        <div className='subhead'>
            <div ><Link to="/"><button className='subhead_catagrory'><p>Home</p></button></Link></div>
            <div ><Link to="/shop"><button className='subhead_catagrory'><p>Shop</p></button></Link></div>
            <div ><Link to="/men"><button className='subhead_catagrory'><p>Mens</p></button></Link></div>
            <div ><Link to="/women"><button className='subhead_catagrory'><p>Women</p></button></Link></div>
            <div ><Link to="/kids"><button className='subhead_catagrory'><p>Kids</p></button></Link></div>
        </div>
  )
}

export default Subhead;