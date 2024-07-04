<<<<<<< HEAD
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
=======
import React, { useState } from "react";
import axios from "axios";
import "./login.css";

const Signup = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        address: "",
        password: "",
    });

    const [message, setMessage] = useState("");

    const handelChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handelSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post(
                "https://ad0bd6ea-920b-4e7f-9329-fa3df6e6081e-00-exssz4pf3ckc.spock.replit.dev:8000/api/signup",
                formData,
            );
            setFormData({
                name: "",
                email: "",
                address: "",
                password: "",
            });

            if(!res.data.success){
                setMessage("User Already Exist");
            }
            console.log(res.data);
        } catch (err) {
            console.log(err);
        }
    };
    return (
        <>
            <div className="login_main">
                <div className="error_message">
                <p>{message}</p></div>
                <div className="login_container">
                    <h1 className="login_lable">Create Account</h1>
                    <form
                        action=""
                        className="login_form"
                        onSubmit={handelSubmit}
                    >
                        <lable>Name</lable>
                        <br />
                        <input
                            className="form_input"
                            type="text"
                            placeholder="Name"
                            name="name"
                            value={formData.name}
                            onChange={handelChange}
                        />
                        <lable>Email</lable>
                        <br />
                        <input
                            className="form_input"
                            type="text"
                            placeholder="Email"
                            name="email"
                            value={formData.email}
                            onChange={handelChange}
                        />
                        <lable>Address</lable>
                        <br />
                        <input
                            className="form_input"
                            type="text"
                            placeholder="Address"
                            name="address"
                            value={formData.address}
                            onChange={handelChange}
                        />
                        <lable>Password</lable>
                        <br />
                        <input
                            className="form_input"
                            type="Password"
                            placeholder="********"
                            name="password"
                            value={formData.password}
                            onChange={handelChange}
                        />
                        <br />
                        <button className="form_btn" type="submit">
                            LOG IN
                        </button>
                    </form>
                    <button className="btn_fgtCA">Log In</button>
                </div>
            </div>
        </>
    );
};

export default Signup;
>>>>>>> 82bd202 (Adding Server)
