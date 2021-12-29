import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingPage from '../pages/LandingPage';

const Routers = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/">
                    <Route index element={<LandingPage />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
};

export default Routers;
