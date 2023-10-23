import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import User from './pages/User/User';
import ProfileIndex from './pages/profile/ProfileIndex';
const Routing = () => {
    return (
        <Router>

            <Routes>
                <Route path="/" element={<User />} />
                <Route path="/users" element={<User />} />
                <Route path="/users/profile" element={<ProfileIndex />} />
            </Routes>

        </Router >
    )
}

export default Routing
