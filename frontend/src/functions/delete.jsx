// deleteItem.js

import axios from "axios";

export async function deleteItem(endpoint, id, load, toast) {
  try {
    await axios.delete(`http://127.0.0.1:8000/${endpoint}/${id}/`);
    toast.success(`${endpoint} deleted successfully`);
    load(); // Refresh data
  } catch (err) {
    toast.error(`Failed to delete ${endpoint}`);
  }
}
