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
import DegreeData from '../pages/Degree.jsx';
import UniversityData from '../pages/University.jsx';
// import ExperienceData from '../pages/Experience.jsx';
// import AppraisalData from '../pages/Appraisal.jsx';
// import DistrictData from '../pages/District.jsx';
// import FireData from '../pages/Fire.jsx';
// import LanguageData from '../pages/Language.jsx';
// import OrganizationData from '../pages/Organization.jsx';
// import PropertyData from '../pages/Property.jsx';
// import PublicationData from '../pages/Publication.jsx';
// import PunishmentData from '../pages/Punishment.jsx';
// import RelativeData from '../pages/Relative.jsx';
// import TrainingData from '../pages/Training.jsx';
// import TravelData from '../pages/Travel.jsx';
// import RewardData from '../pages/Reward.jsx';



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
            <Route path="/degree" element={<DegreeData />} />
            <Route path="/university" element={<UniversityData />} />
            {/* <Route path="/experience" element={<ExperienceData />} /> */}
            {/* <Route path="/appraisal" element={<AppraisalData />} />
            <Route path="/district" element={<DistrictData />} />
            <Route path="/fire" element={<FireData />} />
            <Route path="/guarantee" element={<GuaranteeData />} />
            <Route path="/language" element={<LanguageData />} />
            <Route path="/organization" element={<OrganizationData />} />
            <Route path="/proprty" element={<PropertyData />} />
            <Route path="/publication" element={<PublicationData />} />
            <Route path="/punishment" element={<PunishmentData />} />
            <Route path="/relatives" element={<RelativesData />} />
            <Route path="/retiremnet" element={<RetirementData />} />
            <Route path="/reward" element={<RewardData />} />
            <Route path="/training" element={<TrainingData />} />
            <Route path="/travel" element={<TravelData />} /> */}
        </Routes>
    )
}

export default MyRouter;