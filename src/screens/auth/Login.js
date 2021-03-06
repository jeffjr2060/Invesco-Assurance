import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { useAuth } from '../../context-stores/AuthContext';
import '../../styles/admin.css';
import { FaRegUserCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';


const axios = require('axios');

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const { user, dispatch } = useAuth();

    useEffect(() => {
        // if (user) {
        //     if (user.role === "claims") {
        //         navigate("/claimform");
        //     } else {
        //         navigate("/adminpanel");
        //     }
        // }
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
                navigate("/branchhome");
            } else {
                navigate("/intimation");
            }
        }).catch(err => {
            setError("Check password or email");
            console.log(err.message)
        });
    }

    return (
        <div className="pageContainer">
            <div className='containerHolder'>
                {error && <div className="error">{error}</div>}
                <div className='loginForm'>
                    <div className='profileicon'>
                        <AccountCircleIcon
                            sx={{
                                fontSize: "70px", color: "white"

                            }}

                        />
                    </div>
                    <form className='form' onSubmit={login} >
                        <input style={{ "color": "black" }} type="text" placeholder='Email' value={email} onChange={(e) => { setEmail(e.target.value) }} required />
                        <input style={{ "color": "black" }} type="password" placeholder='Password' value={password} onChange={(e) => { setPassword(e.target.value) }} required />
                        <Link className="link" to='/resetpassword'>Forgot Password</Link>
                        <button className="submit" type="submit">Login</button>
                    </form>
                   <div style={{
                       marginTop:"-25%"
                   }}>
                    <Link className="link" to='/branchhome'>Proceed</Link>
                  </div>
                </div>

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
