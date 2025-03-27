import React, { useState } from 'react';
import logo from './logo.png';
import './../css/public/layout-login.css';
import { useNavigate } from 'react-router-dom';

export const Login = () => {
    const navigate = useNavigate();

    //  Use state to track which form is active
    const [activeForm, setActiveForm] = useState('admin'); // Default: Show Admin Login

    //  Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        navigate('/dashboard');
    };

    return (
        <>
            <div className='loginpage'>
                <div>
                    <img src={logo} alt="VSH Teknologi logo" id="logo" draggable="false" className="unselectable" />
                </div>

                <div id="login">
                    <div className="container">
                        {/* Step 3: Buttons to switch forms */}
                        <div className="buttoncontainer">
                            <button 
                                className={`button ${activeForm === 'admin' ? 'active' : ''}`} 
                                type="button" 
                                onClick={() => setActiveForm('admin')}
                            >
                                Admin Login
                            </button>
                            <p> | </p>
                            <button 
                                className={`button ${activeForm === 'selfService' ? 'active' : ''}`} 
                                type="button" 
                                onClick={() => setActiveForm('selfService')}
                            >
                                Self-Service
                            </button>
                        </div>

                        {/* Step 4: Conditionally render forms */}
                        {activeForm === 'admin' ? (
                            <form onSubmit={handleSubmit} className="form">
                                <input type="text" placeholder="Username" name="Username" className="inputarea" />
                                <input type="password" placeholder="Password" name="Password" className="inputarea" />
                                <div className="loginbutton">
                                    <button type='submit'>Login</button>
                                    <button type="button">Fingerprint</button>
                                </div>
                            </form>
                        ) : (
                            <form onSubmit={handleSubmit} className="form">
                                <input type="text" placeholder="Employee ID" name="Employee ID" className="inputarea" />
                                <input type="password" placeholder="Password" name="Password" className="inputarea" />
                                <div className="loginbutton">
                                    <button type='submit'>Login</button>
                                </div>
                            </form>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
};
