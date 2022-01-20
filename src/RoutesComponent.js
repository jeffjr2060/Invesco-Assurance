import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useAuth } from './context-stores/AuthContext';
import Login from './screens/auth/Login';
import Resetpassword from './screens/auth/Resetpassword';
import Adminpanel from './screens/AdminPanel';
import Userpanel from './screens/UserPanel';
import Passwordreset from './screens/auth/Passwordreset';

export default function RoutesComponent() {
    const { user } = useAuth();

    return (
        <>
            <Routes>
                {!user &&
                    <>
                        <Route exact path="/" element={<Login />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/resetpassword" element={<Resetpassword />} />
                        <Route path="/passwordreset" element={<Passwordreset />} />
                    </>
                }
                {
                    user && (
                        <>
                            <Route path="/adminpanel" element={<Adminpanel />} />
                            <Route path="/userpanel" element={<Userpanel />} />
                        </>
                    )
                }
                <Route path="*" element={<Navigate to={user ? "/userpanel" : "/"} />} />
            </Routes>

            {/* <Routes>
                <Route exact path="/" element={<Login />} />
                <Route path="/login" element={<Login />} />
                <Route path="/userpanel" element={<Userpanel />} />
                <Route path="/adminpanel" element={<Adminpanel />} />
            </Routes> */}
        </>
    )
}
