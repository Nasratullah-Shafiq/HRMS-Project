// educationService.js
import axios from 'axios';

export async function loadUniversity(setUniversity) {
  const result = await axios.get("http://127.0.0.1:8000/university/");
  setUniversity(result.data);
}

export async function loadMajor(setMajor) {
  const result = await axios.get("http://127.0.0.1:8000/major/");
  setMajor(result.data);
}

export async function loadDegree(setDegree) {
  const result = await axios.get("http://127.0.0.1:8000/degree/");
  setDegree(result.data);
}

export async function loadFaculty(setFaculty) {
  const result = await axios.get("http://127.0.0.1:8000/faculty/");
  setFaculty(result.data);
}

export async function loadCountry(setCountry) {
  const result = await axios.get("http://127.0.0.1:8000/country/");
  setCountry(result.data);
}

export async function loadEducation(setEducation) {
  const result = await axios.get("http://127.0.0.1:8000/education/");
  setEducation(result.data);
}

export async function saveEducation(data, load, toastr) {
  try {
    await axios.post("http://127.0.0.1:8000/education/", data);
    toastr.success("Data Added Successfully");
    load(); // Reload data after save
  } catch (err) {
    toastr.error("Course Registration Failed");
  }
}

export async function updateEducation(id, data, load, toastr) {
  try {
    await axios.put(`http://127.0.0.1:8000/education/${id}`, data);
    toastr.success("Data Updated Successfully");
    load(); // Reload data after update
  } catch (err) {
    toastr.error("Data Update Failed");
  }
}

export async function deleteEducation(id, load, toast) {
  try {
    await axios.delete(`http://127.0.0.1:8000/education/${id}`);
    toast.error("Course Deleted Successfully");
    load(); // Reload data after delete
  } catch (err) {
    toast.error("Failed to Delete Course");
  }
}
