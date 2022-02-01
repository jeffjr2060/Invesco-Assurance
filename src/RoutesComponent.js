import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useAuth } from './context-stores/AuthContext';
import Login from './screens/auth/Login';
import Adminpanel from './screens/AdminPanel';
import Userpanel from './screens/UserPanel';
import Branchhome from './screens/Branch/BranchScreens/branchhome';
import Intimationhome from './screens/Intimation/Screens/home';
import Claimform from './screens/Branch/BranchComponent/Claimform';
import ClaimNotification from './screens/Branch/BranchScreens/Claimnotification';



import Form from './screens/Branch/BranchScreens/form';
import Claimdetails from './screens/Branch/BranchComponent/claimdetails';
import Test from './screens/Branch/BranchScreens/test';
import UploadDocument from './screens/Branch/BranchScreens/Uploaddocument';
import ClaimManager from './screens/Branch/BranchComponent/home';
import Claimform1 from './screens/Branch/Claimform1';
import ClaimForm2 from './screens/Branch/ClaimForm2';

export default function RoutesComponent() {
    const { user } = useAuth();

    return (
        <>
            {/* <Routes>
                {!user &&
                    <>
                        <Route exact path="/" element={<Form />} />
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
                            <Route path="/form" element={<Form />} />
                            <Route path="/branchhome" element={<Branchhome />} />
                            <Route path="/claimdetails" element={<Claimdetails />} />
                        </>
                    )
                }
                <Route path="*" element={<Navigate to={user ? "/branchhome" : "/"} />} />
            </Routes> */}

            <Routes>
                <Route exact path="/" element={<Login />} />
                <Route path="/login" element={<Login />} />
                <Route path="/userpanel" element={<Userpanel />} />
                <Route path="/adminpanel" element={<Adminpanel />} />
                <Route path="/claimform1" element={<Claimform1 />} />
                <Route path="/claimform2" element={<ClaimForm2 />} />
                {/* <Route path="/branchhome" element={<Branchhome />} />
                <Route path="/claimdetails" element={<Claimdetails />} />
                <Route path="/intimation" element={<Intimationhome />} />
                <Route path="/claimform" element={<Claimform />} />
                <Route path="/uploadDocument" element={<UploadDocument />} />
                <Route path="/claimmanager" element={<UploadDocument />} />
                <Route path="/claimnotification" element={<ClaimNotification />} /> */}
            </Routes>

        </>
    )
}
