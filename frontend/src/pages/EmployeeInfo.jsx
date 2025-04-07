import { Routes, Route, Link } from "react-router-dom";
import Navbar from "../components/employeeInfo/Navbar";
import Sidebar from "../components/employeeInfo/Sidebar";
import PersonalInfo from "../components/employeeInfo/PersonalInfo";

const EmployeeInfo = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1">
        <Navbar />
        <Routes>
          <Route path="personal-info" element={<PersonalInfo />} />
        </Routes>
      </div>
    </div>
  );
};

export default EmployeeInfo;
