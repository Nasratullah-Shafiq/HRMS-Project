import React from 'react'
import { Routes, Route } from 'react-router-dom';

import Home from '../pages/Home.jsx';
import About from '../pages/About.jsx';
import Contact from '../pages/Contact.jsx';
import StudentList from '../pages/Student.jsx';
import Employee from '../pages/Employee.jsx';
import HealthInfo from '../pages/Health.jsx';
import Courses from '../pages/Course.jsx';
import EducationData from '../pages/Education.jsx';


function MyRouter(){
    return(
        <Routes>
            <Route path="/" element={<Home />} />  
            <Route path="/about-us" element={<About />} />  
            <Route path="/contact-us" element={<Contact />} />
            <Route path="/students" element={<StudentList />} />
            <Route path="/course" element={<Courses />} />
            <Route path="/employee" element={<Employee />} />
            <Route path="/health" element={<HealthInfo />} />
            <Route path="/education" element={<EducationData />} />
        </Routes>
    )
}

export default MyRouter;