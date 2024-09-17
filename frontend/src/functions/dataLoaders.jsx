// dataLoaders.js
import axios from 'axios';

// Function to load universities
export async function loadUniversity(setUniversity) {
  try {
    const result = await axios.get("http://127.0.0.1:8000/university/");
    setUniversity(result.data);
  } catch (error) {
    console.error("Error loading universities:", error);
  }
}

// Function to load faculties
export async function loadFaculty(setFaculty) {
  try {
    const result = await axios.get("http://127.0.0.1:8000/faculty/");
    setFaculty(result.data);
  } catch (error) {
    console.error("Error loading faculties:", error);
  }
}

// Function to load majors
export async function loadMajor(setMajor) {
  try {
    const result = await axios.get("http://127.0.0.1:8000/major/");
    setMajor(result.data);
  } catch (error) {
    console.error("Error loading majors:", error);
  }
}

// Function to load degrees
export async function loadDegree(setDegree) {
  try {
    const result = await axios.get("http://127.0.0.1:8000/degree/");
    setDegree(result.data);
  } catch (error) {
    console.error("Error loading degrees:", error);
  }
}
