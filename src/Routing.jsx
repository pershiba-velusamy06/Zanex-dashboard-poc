import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import User from './pages/User/User';
import LayoutIndex from './pages/layout/LayoutIndex';
const Routing = () => {
    return (
        <Router>

            <Routes>
                {/* <Route element={<LayoutIndex />} /> */}

                <Route path="/" element={<User />} />

            </Routes>

        </Router >
    )
}

export default Routing
