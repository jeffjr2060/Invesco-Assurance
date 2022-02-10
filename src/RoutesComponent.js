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
import UploadDocument from './screens/Branch/FileUpload/Uploaddocument';
import Documentupload from './screens/Intimation/Screens/uploaddocuments';
import ClaimManager from './screens/Branch/BranchComponent/home';
import Claimform1 from './screens/Branch/BranchScreens/Claimform1';
import ClaimForm2 from './screens/Branch/BranchScreens/ClaimForm2';
import ReportedClaim from './screens/Branch/BranchComponent/ReportedClaim';
import Assigned from './screens/Intimation/Screens/Assigned';
import Repudiated from './screens/Intimation/Screens/Repudiated';
import TaskInbox from './screens/Intimation/Screens/TaskInbox';
import ClaimForm3 from './screens/Branch/BranchScreens/Claimform3';
import ClaimForm4 from './screens/Branch/BranchScreens/claimform4';
import ClaimForm5 from './screens/Branch/BranchScreens/claimform5';
import ClaimForm6 from './screens/Branch/BranchScreens/Claimform6';
import ClaimForm7 from './screens/Branch/BranchScreens/Claimform7';
import ClaimForm8 from './screens/Branch/BranchScreens/ClaimForm8';
import ClaimnotificatioReport from './screens/Branch/BranchComponent/ClaimnotificationReport';
import BranchDocuments from './screens/Branch/BranchComponent/branchdocument';
import Assignedpersonel from './screens/Intimation/Components/ScreenComponents/Assignpersonel';


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
                <Route path="/claimform3" element={<ClaimForm3 />} />
                <Route path="/claimdetails/:id" element={<Claimdetails />} />
                <Route path="/claimnotification" element={<ClaimNotification />} />
                <Route path="/intimation" element={<Intimationhome />} />
                <Route path="/claimform" element={<Claimform />} />
                <Route path="/branchhome" element={<Branchhome />} />
                <Route path="/claimmanager" element={<UploadDocument />} />
                <Route path="/form" element={<Form />} />
                <Route path="/reportedclaim" element={<ReportedClaim />} />
                <Route path="/assigned" element={<Assigned  />} />
                <Route path="/repudiated" element={<Repudiated  />} />
                <Route path="/taskinbox" element={<TaskInbox />} />
                <Route path="/documentupload" element={<Documentupload />} /> 
                <Route path="/claimform3" element={<ClaimForm3 />} />  
                <Route path="/claimform4" element={<ClaimForm4 />} /> 
                <Route path="/claimform5" element={<ClaimForm5 />} /> 
                <Route path="/claimform6" element={<ClaimForm6 />} /> 
                <Route path="/claimform7" element={<ClaimForm7 />} />  
                <Route path="/claimform8" element={<ClaimForm8 />} />    
                <Route path="/claimnotificatioreport" element={<ClaimnotificatioReport />} />                   
                <Route path="/BranchDocuments" element={<BranchDocuments/>} />    
                <Route path="/assignedpersonel" element={<Assignedpersonel/>} />                                                                 

            </Routes>

        </>
    )
}
