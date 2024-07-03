import React from 'react'
import './login.css'

const Signup = () => {
  return (
    <>
    <div className='login_main'>
            <div className='login_container'>
                <h1 className='login_lable'>Create Account</h1>
                <form action="" className='login_form'>
                    <lable >Name</lable><br/>
                    <input className='form_input' type="text" placeholder='Name'/>
                    <lable >Email</lable><br/>
                    <input className='form_input' type="text" placeholder='Email'/>
                    <lable >Address</lable><br/>
                    <input className='form_input' type="text" placeholder='Address'/>
                    <lable >Password</lable><br/>
                    <input className='form_input' type="Password" placeholder='********'/><br/>
                    <button className='form_btn' type='submit'>LOG IN</button>
                </form>
                <button className='btn_fgtCA'>Log In</button>
            </div>
        </div>
    
    
    </>
  )
}

export default Signup