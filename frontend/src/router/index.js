import React from 'react'
import { Routes, Route } from 'react-router-dom';

import Home from '../pages/Home.jsx';
import About from '../pages/About.jsx';
import Contact from '../pages/Contact.jsx';
import StudentList from '../pages/Student.jsx';
import Addstudents from '../pages/Addstudents.jsx';
import Addemployee from '../pages/Addemp.jsx';
import Courses from '../pages/Course.jsx';


function MyRouter(){
    return(
        <Routes>
            <Route path="/" element={<Home />} />  
            <Route path="/about-us" element={<About />} />  
            <Route path="/contact-us" element={<Contact />} />
            <Route path="/students" element={<StudentList />} />
            <Route path="/course" element={<Courses />} />
            <Route path="/student/create" element={<Addstudents />} />
            <Route path="/student/store" element={<Addemployee />} />
        </Routes>
    )
}

export default MyRouter;