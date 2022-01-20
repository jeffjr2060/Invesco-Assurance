import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { useAuth } from '../../context-stores/AuthContext';
import '../../styles/admin.css';
import { FaRegUserCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';


const axios = require('axios');

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const { user, dispatch } = useAuth();
    const arr = [{
        policy_no: 07777,
        period_from: new Date(8, 3, 2010)

    }];

    useEffect(() => {
        if (user) {
            if (user.role === "claims") {
                navigate("/userpanel");
            } else {
                navigate("/adminpanel");
            }
        }
    })

    const login = (e) => {
        e.preventDefault();
        axios.post("/login", {
            email: email,
            password: password
        }).then((response) => {
            let user = response.data.user;
            localStorage.setItem("access_token", response.data.access_token);
            dispatch({ type: 'ADD_USER', user: user });
            console.log(user.role === "admin");
            if (user.role === "admin") {
                navigate("/adminpanel");
            } else {
                navigate("/userpanel");
            }
        }).catch(err => {
            setError("Check password or email");
            console.log(err.message)
        });
    }

    return (
        <div className="pageContainer">
            <div className='containerHolder'>
                <div className='profileicon'>
                    <FaRegUserCircle size="120px" color="#000" />
                </div>
                {error && <div className="error">{error}</div>}
                <div className='loginForm'>
                    <form className='form' onSubmit={login} >
                        <input type="text" placeholder='Email' value={email} onChange={(e) => { setEmail(e.target.value) }} required />
                        <input type="password" placeholder='Password' value={password} onChange={(e) => { setPassword(e.target.value) }} required />
                        <button type="submit" className='btn' >Login</button>
                    </form>
                </div>'['
                <Link to='/resetpassword'>Forgot Password</Link>
            </div>
            {/* {
                <Formik
                    initialValues={{
                        email: '',
                        password: ''
                    }}
                    validationSchema={Yup.object({
                        email: Yup.string().email().required(),
                        password: Yup.string().min(5, "Requires at least 5 characters").required()
                    })}
                    onSubmit={(values, { setSubmitting, resetForm }) => {

                    }}
                >

                </Formik>
            } */}
        </div>
    )
}
