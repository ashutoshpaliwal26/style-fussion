import React from 'react';
import './header.css';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <>
      <div className='Navigation_bar'>
        <div className='logo_img' style={{ cursor: 'pointer', objectFit : "contain"}}>
          <img className='logo_img'  src="https://res.cloudinary.com/djfi9rtlx/image/upload/v1688367398/Style%20Fussion/Assets/Logo/Style_Fussion_3_hg54oi.png" alt="" />
        </div>
        <div className='search'>
          <form className='search_input'>
            <input type="text" placeholder="Search Product" />
            <button className='search_icon'><i class="fa-solid fa-magnifying-glass"></i></button>
          </form>
        </div>
        <div className='auth_container'>
          <div className='account'>
            <div className="icon_account">
              <i class="fa-regular fa-user"></i>
            </div>
          </div>
          <div className='account'>
            <Link to={"/wishlist"}>
              <div className="icon_account">
                <p>
                <i class="fa-regular fa-heart"></i>
                </p>
              </div>
            </Link>
          </div>
          <div className='account'>
            <Link to={"/cart"}>
              <div className="icon_account">
                <p>
                <i class="fa-solid fa-cart-shopping"></i>
                </p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default Header;