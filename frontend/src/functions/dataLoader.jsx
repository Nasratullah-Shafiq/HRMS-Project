// dataLoader.jsx

import axios from 'axios';

export async function loadData(endpoint) {
  try {
    const result = await axios.get(`http://127.0.0.1:8000/${endpoint}/`);
    return result.data;
  } catch (err) {
    console.error('Error fetching Data:', err);
    throw err; // Rethrow to handle it in the component
  }
}


// Save all data via this function 
// async function saveData(event, endpoint) {
//     event.preventDefault();
//     try {
//       await axios.post(`http://127.0.0.1:8000/${endpoint}/`, {
//         id: id,
//         // name: name
//       });
//       toastr.success("Record Registered Successfully");
//       setId("");
//       setName("");
//       loadData();
//     } catch (err) {
//       toastr.error("Faculty Registration Failed");
//     }
  // }
  