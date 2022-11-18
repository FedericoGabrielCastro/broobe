import { useEffect } from "react";
import { BrowserRouter, Routes, Route, Navigate, useLocation } from "react-router-dom";
import AuthPage from "../pages/AuthPage/AuthPage";
import IssuesPage from "../pages/IssuesPage/IssuesPage";
import AllIssuesView from "../views/allIssuesView/AllIssuesView";
import CreateIssueView from "../views/createIssueView/CreateIssueView";
import EditIssueView from "../views/editIssueView/EditIssueView";
import {AnimatePresence} from "framer-motion"

import LoginView from "../views/loginView/LoginView";
import RegisterView from "../views/registerView/RegisterView";

const ProviderRoutes = () => {

    // let location = useLocation()

    useEffect(() => {
        localStorage.getItem("bearer")
    },[localStorage])

    return (
        <BrowserRouter>
            <AnimatePresence>
                <Routes >
                    {
                        localStorage.getItem("bearer") ? 
                            <Route path="/" element={<IssuesPage />}>
                                <Route path="issues" element={<AllIssuesView />}/>
                                <Route path="createIssue" element={<CreateIssueView />}/>
                                <Route path="editIssue/:id" element={<EditIssueView />}/>
                                <Route path="/editIssue" element={<Navigate to="/issues" replace/>} />
                                <Route path="*" element={<Navigate to="/issues" replace/>} />
                            </Route>
                        :
                            <>
                                <Route path="/auth" element={<AuthPage />} >
                                    <Route path="register" element={<RegisterView />}/>
                                    <Route path="login" element={<LoginView />}/>
                                    <Route path="/auth" element={<Navigate to="/auth/login" replace/>} />
                                </Route>
                                <Route path="*" element={<Navigate to="/auth/login" replace/>} />
                            </>
                    }
                </Routes>

            </AnimatePresence>
        </BrowserRouter>
    )
}

export default ProviderRoutes