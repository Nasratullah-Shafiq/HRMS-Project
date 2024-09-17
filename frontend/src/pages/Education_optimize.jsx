import axios from 'axios';
import { Link } from 'react-router-dom';
import { useEffect, useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import toastr from 'toastr';
import 'toastr/build/toastr.min.css';
import Swal from 'sweetalert2';

function HR_Employee() {
  const [formData, setFormData] = useState({
    id: '',
    country: '',
    degree: '',
    university: '',
    faculty: '',
    major: '',
    education_start_date: '',
    education_end_date: '',
    batch_no: '',
    education_remarks: ''
  });

  const [educations, setEducation] = useState([]);
  const [dropdowns, setDropdowns] = useState({
    countries: [],
    universities: [],
    faculties: [],
    majors: [],
    degrees: []
  });

  // Generic loader function to fetch data
  const loadData = async (url, setter) => {
    try {
      const result = await axios.get(url);
      setter(result.data);
    } catch (error) {
      console.error(`Error loading ${url}:`, error);
    }
  };

  // Load data on mount
  useEffect(() => {
    loadData("http://127.0.0.1:8000/country/", data => setDropdowns(prev => ({ ...prev, countries: data })));
    loadData("http://127.0.0.1:8000/university/", data => setDropdowns(prev => ({ ...prev, universities: data })));
    loadData("http://127.0.0.1:8000/faculty/", data => setDropdowns(prev => ({ ...prev, faculties: data })));
    loadData("http://127.0.0.1:8000/major/", data => setDropdowns(prev => ({ ...prev, majors: data })));
    loadData("http://127.0.0.1:8000/degree/", data => setDropdowns(prev => ({ ...prev, degrees: data })));
    loadData("http://127.0.0.1:8000/education/", setEducation);
  }, []);

  // Handle form input changes
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  // Save new education entry
  const save = async (event) => {
    event.preventDefault();
    try {
      await axios.post("http://127.0.0.1:8000/education/", formData);
      toastr.success("Data Added Successfully");
      setFormData({
        id: '',
        country: '',
        degree: '',
        university: '',
        faculty: '',
        major: '',
        education_start_date: '',
        education_end_date: '',
        batch_no: '',
        education_remarks: ''
      });
      loadData("http://127.0.0.1:8000/education/", setEducation);  // Reload data
    } catch (err) {
      toastr.error("Failed to Add Data");
    }
  };

  // Edit education entry
  const editEducation = (education) => {
    setFormData({
      id: education.id,
      country: education.country,
      degree: education.degree,
      university: education.university,
      faculty: education.faculty,
      major: education.major,
      education_start_date: education.education_start_date,
      education_end_date: education.education_end_date,
      batch_no: education.batch_no,
      education_remarks: education.education_remarks
    });
  };

  // Update an existing education entry
  const update = async (event) => {
    event.preventDefault();
    try {
      await axios.put(`http://127.0.0.1:8000/education/${formData.id}`, formData);
      toast.success("Data Updated Successfully");
      loadData("http://127.0.0.1:8000/education/", setEducation);  // Reload data
      setFormData({
        id: '',
        country: '',
        degree: '',
        university: '',
        faculty: '',
        major: '',
        education_start_date: '',
        education_end_date: '',
        batch_no: '',
        education_remarks: ''
      });
    } catch (err) {
      toast.error("Failed to Update Data");
    }
  };

  // Delete education entry
  const deleteEducation = async (id) => {
    try {
      await axios.delete(`http://127.0.0.1:8000/education/${id}`);
      toast.error("Data Deleted Successfully");
      loadData("http://127.0.0.1:8000/education/", setEducation);  // Reload data
    } catch (err) {
      toast.error("Failed to Delete Data");
    }
  };

  return (
    <div className="App">
      <div className="container">
        <form onSubmit={formData.id ? update : save}>
          <div className="mb-3 row">
            <label className="col-sm-1 col-form-label">Country</label>
            <div className="col-sm-5">
              <select className="form-select" name="country" value={formData.country} onChange={handleInputChange}>
                <option value="">Select a Country</option>
                {dropdowns.countries.map(country => (
                  <option key={country.id} value={country.id}>{country.name}</option>
                ))}
              </select>
            </div>

            <label className="col-sm-1 col-form-label">University</label>
            <div className="col-sm-5">
              <select className="form-select" name="university" value={formData.university} onChange={handleInputChange}>
                <option value="">Select a University</option>
                {dropdowns.universities.map(university => (
                  <option key={university.id} value={university.id}>{university.name}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Additional form fields for faculty, major, degree, etc. */}

          <button className="btn btn-primary">{formData.id ? 'Update' : 'Register'}</button>
        </form>

        {/* Education Data Table */}
        <div className="container mt-5">
          <div className="card">
            <div className="card-header">
              <h4>
                Education
                <Link to="/course/store" className="btn btn-primary float-end">New</Link>
              </h4>
            </div>
            <div className="card-body">
              <table className="table table-striped">
                <thead>
                  <tr>
                    <td>ID</td>
                    <td>Country</td>
                    <td>Degree</td>
                    <td>University</td>
                    <td>Faculty</td>
                    <td>Major</td>
                    <td>Start Date</td>
                    <td>End Date</td>
                    <td>Batch No</td>
                    <td>Remarks</td>
                    <td>Actions</td>
                  </tr>
                </thead>
                <tbody>
                  {educations.map(education => (
                    <tr key={education.id}>
                      <td>{education.id}</td>
                      <td>{education.country}</td>
                      <td>{education.degree}</td>
                      <td>{education.university}</td>
                      <td>{education.faculty}</td>
                      <td>{education.major}</td>
                      <td>{education.education_start_date}</td>
                      <td>{education.education_end_date}</td>
                      <td>{education.batch_no}</td>
                      <td>{education.education_remarks}</td>
                      <td>
                        <button className="btn btn-warning" onClick={() => editEducation(education)}>Edit</button>
                        <button className="btn btn-danger" onClick={() => deleteEducation(education.id)}>Delete</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HR_Employee;
