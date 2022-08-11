import './Content.css'
import React from 'react'
import { Routes, Route } from "react-router-dom";

import Home from '../../views/example/Home'
import About from '../../views/example/About'
import Param from '../../views/example/Param';
import NotFound from '../../views/example/NotFound';

const Content = props => (
    <main className="Content">
        <Routes>
            <Route path="/about" element={<About />} />
            <Route path="/" element={<Home />} />
            <Route path="/param/:id" element={<Param />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    </main>
)

export default Content