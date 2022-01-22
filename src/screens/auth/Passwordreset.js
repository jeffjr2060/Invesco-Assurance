import React, { useState } from 'react';
import { useSearchParams, useNavigate } from "react-router-dom";
import axios from 'axios';
import '../../styles/admin.css';

export default function Passwordreset() {
    const [searchParams, setSearchParams] = useSearchParams();
    const [password, setPassword] = useState('');
    const [response, setResponse] = useState();
    const [tokenMissing, setTokenMissing] = useState();
    const navigate = useNavigate();

    const resetPassword = (e) => {
        e.preventDefault();
        const token = searchParams.get("token");
        if (!token) {
            console.log("No token");
            setTokenMissing("Use link sent to your email to reset your password");
            alert("Use link sent to your email to reset your password")
        } else {
            axios.post("/passwordreset", {
                password: password
            }, {
                params: {
                    token: token
                }
            }).then((response) => {
                setResponse("Successfully changed password. Please log in.");
                console.log(response.data);
                navigate("/login");
            }).catch((err) => {
                console.log(err.message);
            })
        }
    }

    return (
        <div className="passwordContainer">
            <h1 style={{ position: 'absolute', color: '#fff', marginTop: '-25%' }}>Enter your new password</h1>
            {
                response &&
                <div className="Response">
                    <h2>{response}</h2>
                </div>
            }
            <form className='form' onSubmit={resetPassword} >
                <input type="text" placeholder='Enter New password' value={password} onChange={(e) => { setPassword(e.target.value) }} required />
                <button type="submit" className='submit sub' >Reset Password</button>
            </form>
        </div>
    )
}
