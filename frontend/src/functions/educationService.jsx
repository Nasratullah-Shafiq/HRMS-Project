// educationService.js
import axios from 'axios';


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
