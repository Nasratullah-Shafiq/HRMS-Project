import axios from "axios";

// Generic save function
export async function saveData(event, endpoint, data, load, toast, reset) {
  event.preventDefault();
  try {
    await axios.post(`http://127.0.0.1:8000/${endpoint}/`, data);
    toast.success(`${endpoint} registered successfully`);
    reset(); // Clear form
    load();  // Reload data
  } catch (err) {
    toast.error(`Failed to register ${endpoint}`);
  }
}
