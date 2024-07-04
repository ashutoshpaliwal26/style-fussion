import React from 'react'
import "./login.css"

const Login = () => {
<<<<<<< HEAD
=======
    
>>>>>>> 82bd202 (Adding Server)
  return (
    <>
        <div className='login_main'>
            <div className='login_container'>
                <h1 className='login_lable'>Login</h1>
                <form action="" className='login_form'>
                    

                    <lable >Email</lable><br/>
                    <input className='form_input' type="text" placeholder='Email'/>
                    <lable >Password</lable><br/>
                    <input className='form_input' type="Password" placeholder='********'/><br/>
                    <button className='form_btn' type='submit'>LOG IN</button>
                </form>
                <button className='btn_fgtCA'>Forgot password?</button>
                <button className='btn_fgtCA'>Create Account</button>
            </div>
        </div>
    
    
    
    </>
  )
}

export default Login