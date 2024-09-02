import React, { useState } from 'react';
import axios from 'axios';

const AddStudentForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        course: '',
        email: '',
        phone: '',
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('http://localhost:8000/api/students', formData);
            console.log(response.data);
            // Handle success or redirect to a new page
        } catch (error) {
            console.error('Error creating student:', error.message);
            // Handle error
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>Name:</label>
            <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
            />

            <label>Course:</label>
            <input
                type="text"
                name="course"
                value={formData.course}
                onChange={handleChange}
                required
            />

            <label>Email:</label>
            <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
            />

            <label>Phone:</label>
            <input
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
            />

            <button type="submit">Add Student</button>
        </form>
    );
};

export default AddStudentForm;
