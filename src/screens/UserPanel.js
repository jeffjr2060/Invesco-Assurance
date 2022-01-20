import React, { useState, useEffect } from 'react';
import { useAuth } from '../context-stores/AuthContext';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function UserPanel() {
    const { user, logout } = useAuth();
    const navigate = useNavigate();
    const [password, setPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        if (user.role === "admin") {
            navigate("/adminpanel")
        }
    })

    const changePassword = (e) => {
        e.preventDefault();
        axios.post("/changepassword", {
            oldPassword: password,
            newPassword: newPassword
        }).then((response) => {
            console.log(response.data)
        }).catch((error) => {
            console.log(error.message)
        })
        handleModal()
    }

    const handleModal = () => {
        setShowModal(!showModal)
    }

    return (
        <div>
            {showModal &&
                <div>
                    <form onSubmit={changePassword}>
                        <input type="text" placeholder='Email' value={password} onChange={(e) => { setPassword(e.target.value) }} required />
                        <input type="password" placeholder='Password' value={newPassword} onChange={(e) => { setNewPassword(e.target.value) }} required />
                        <button type="submit" className='btn' >Login</button>
                    </form>
                </div>
            }
            <h1>User Panel</h1>
            <button onClick={handleModal}>Change Password</button>
            <button onClick={logout}>Logout</button>
            {user && <p>Logged in as {user.email}</p>}
        </div>
    )
}
