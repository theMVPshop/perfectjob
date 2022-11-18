import React from 'react'
import { Routes, Route } from 'react-router'

import Home from './components/Home'


// Start Router function here //
const Router = () => {
    return (
        <Routes>
            <Route exact path="/" component={Home} />
        </Routes>
    );
};

export default Router;