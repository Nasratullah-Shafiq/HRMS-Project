
// import React, { useState } from 'react';
// import axios from 'axios';



// CompanyForm.js (React component)

import React, { useState } from 'react';
import axios from 'axios'; // Install Axios if not already done

const CompanyForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    course: '',
    email: '',
    phone: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Send a POST request to your Laravel API endpoint
      await axios.post('http://localhost:8000/api/students', formData);
      console.log('Data inserted successfully!');
      // Optionally, reset the form or show a success message
    } catch (error) {
      console.error('Error inserting data:', error.message);
      // Handle the error (e.g., show an error message to the user)
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        placeholder="employee Name"
        value={formData.name}
        onChange={handleChange}
      />
      {/* Other input fields for email, address, and website */}
      <button className='button' type="submit">Add Company</button>
    </form>
  );
};

export default CompanyForm;






// const AddStudentForm = () => {
//     const [formData, setFormData] = useState({
//         name: '',
//         course: '',
//         email: '',
//         phone: '',
//     });

//     const handleChange = (e) => {
//         setFormData({ ...formData, [e.target.name]: e.target.value });
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault();

//         try {
//             const response = await axios.post('http://localhost:8000/api/students', formData);
//             console.log(response.data);
//             // Handle success or redirect to a new page
//         } catch (error) {
//             console.error('Error creating student:', error.message);
//             // Handle error
//         }
//     };

//     return (
//         <form onSubmit={handleSubmit}>
//             <label>Name:</label>
//             <input type="text" name="name" onChange={handleChange} required />

//             <label>Course:</label>
//             <input type="text" name="course" onChange={handleChange} required />

//             <label>Email:</label>
//             <input type="email" name="email" onChange={handleChange} required />

//             <label>Phone:</label>
//             <input type="text" name="phone" onChange={handleChange} required />

//             <button type="submit">Add Student</button>
//         </form>
//     );
// };

// export default AddStudentForm;
