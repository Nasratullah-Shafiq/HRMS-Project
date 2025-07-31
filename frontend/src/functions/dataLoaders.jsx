import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import toastr from 'toastr';
import 'toastr/build/toastr.min.css';

// dataLoaders.js
import axios from 'axios';


// Function to save education data
export async function saveEducation(data, stateSetters) {
  const {
    id, country, degree, university, faculty, major, education_start_date, education_end_date, batch_no,education_remarks
  } = data; // Destructure data object

  const {
    setId, setCountryId, setUniversityId, setFacultyId, setStartDate, setEndDate, setBatchNo, setRemarks,loadFunction
  } = stateSetters; // Destructure state setters

  try {
    await axios.post("http://127.0.0.1:8000/education/", {
      id,
      country,
      degree,
      university,
      faculty,
      major,
      education_start_date,
      education_end_date,
      batch_no,
      education_remarks
    });

    toastr.success("Data Added Successfully");

    // Reset the fields
    setId("");
    setCountryId("");
    setUniversityId("");
    setFacultyId("");
    setStartDate("");
    setEndDate("");
    setBatchNo("");
    setRemarks("");

    // Load updated data
    loadFunction();
  } catch (err) {
    toastr.error("Course Registration Failed");
  }
}

// Function to load Education data
export async function loadEducation(setEducation) {
  try {
    const result = await axios.get("http://127.0.0.1:8000/education/");
    setEducation(result.data);
  } catch (error) {
    console.error("Error loading Education:", error);
  }
}

