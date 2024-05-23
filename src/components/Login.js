import React, { useState } from 'react';
import { checkCredentials } from '../utilis/common';
import { useNavigate } from 'react-router-dom';
import { updateContext, updateStore } from '../store/actions';
import '../index.css'; 

const Login = () => {
    const { BookDispatch } = updateContext();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const validateEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setError('');

        if (!validateEmail(email)) {
            setError('Email is neither alphanumeric nor matching the email pattern');
            return;
        } else if (!checkCredentials(email, password)) {
            setError('Invalid password');
            return;
        }
       updateStore(BookDispatch,{logged:true});
       navigate("/adminpanel");    

    };

    return (
        <div className="login-container">
            <form className="login-form" onSubmit={handleSubmit}>
                <h2>Login</h2>
                {error && <p className="error-text">{error}</p>}
                <div className="form-group">
                    <label>Email:</label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label>Password:</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <button type="submit" disabled={!email || !password}>
                    Login
                </button>
            </form>
        </div>
    );
};

export default Login;