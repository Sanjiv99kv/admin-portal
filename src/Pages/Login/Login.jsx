import React from 'react'
import img2 from '../../assets/2.svg'
import img3 from '../../assets/3.svg'
import img4 from '../../assets/4.svg'
import './Login.css'
import {useNavigate} from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate();
    return (
        <div className='login-form'>
            <form className="form">
                <div className="flex-column">
                    <label>Email </label></div>
                <div className="inputForm">
                    <img src={img2} alt="" />
                    <input type="text" className="input" placeholder="Enter your Email"></input>
                </div>

                <div className="flex-column">
                    <label>Password </label></div>
                <div className="inputForm">
                    <img src={img3} alt="" />
                    <input type="password" className="input" placeholder="Enter your Password"></input>
                    <img src={img4} alt="" />
                </div>

                <div className="flex-row">
                    <div>
                        <input type="checkbox"></input>
                        <label>Remember me </label>
                    </div>
                    <span className="span">Forgot password?</span>
                </div>
                <button onClick={()=>{navigate("/admin")}}  className="button-submit">Sign In</button>



            </form>
        </div>

    )
}

export default Login
