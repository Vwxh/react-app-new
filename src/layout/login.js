import React from 'react'
import logo from './logo.png'
import './../css/public/layout-login.css'
import { useNavigate } from 'react-router-dom'

export const Login = () => {
    //logic
    const navigate = useNavigate()
    const handleSubmit = async (e)=>{
        navigate('/dashboard')
    }

  return (
    <>
    <div className='loginpage'>
          <div>
          <img src={logo} alt="VSH Teknologi logo" id="logo" draggable="false" className="unselectable" aria-selected/>
    </div>
    <div id="login">
        <div className="container">
            <div className="buttoncontainer">
                <button id="Admin-Login" className="button" type="button">Admin Login</button>
                <p> | </p>
                <button id="Self-Service" className="button" type="button">Self-Service</button>
            </div>
            <div>
                <form onSubmit={handleSubmit} className="form" id="form1">
                    <input type="text" placeholder="Username" name="Username" className="inputarea" id="Username1"/>
                    <input type="text" placeholder="Password" name="Password" className="inputarea" id="Password1"/>
                    <div className="loginbutton">
                        <button type='submit'>Login</button>
                        <button>Fingerprint</button>
                    </div>
                </form>
 
                <form onSubmit={handleSubmit} id="form2">
                    <input type="text" placeholder="Employee ID" name="Employee ID" className="inputarea" id="Username"/>
                    <input type="password" placeholder="Password"  name="Password" className="inputarea" id="Password"/>
                    <div className="loginbutton">
                        <button type='submit'>Login</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
    </div>
    </>
  )
}

//if you want to make comment just select the part you want then ctrl+/