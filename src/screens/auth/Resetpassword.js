import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../../styles/admin.css'
export default function Resetpassword() {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState();
    const navigate = useNavigate();

    const resetPasswordEmail = (e) => {
        e.preventDefault();
        axios.post('/resetpassword', {
            email: email
        }).then((response) => {
            console.log(response.data);
            alert("Email to reset password sent");
            setMessage("Email sent");
            navigate('/passwordreset');
        }).catch(err => console.error(err))
    }

    return (
        <>
            <div className="passwordContainer">
                <h1 style={{ position: 'absolute', color: '#fff', marginTop: '-25%' }}>Enter your Email Address</h1>
                {
                    message &&
                    <div>
                        <h2>{message}</h2>
                    </div>
                }
                <form className='form' onSubmit={resetPasswordEmail} >
                    <input type="text" placeholder=' Enter Email address ' value={email} onChange={(e) => { setEmail(e.target.value) }} required />
                    <button type="submit" className='submit sub' >Submit</button>
                </form>
            </div>
        </>
    )
}
