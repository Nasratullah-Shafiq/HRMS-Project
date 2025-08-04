// services/crudService.js
import axios from "axios";
import { toast } from "react-toastify";

const API_BASE = "http://127.0.0.1:8000";
// Load Records
// export const loadRecords = async (endpoint, setData) => {
//   try {
//     const response = await axios.get(`${API_BASE}/${endpoint}/`);
//     setData(response.data);
//   } catch (err) {
//     toast.error("Failed to Load Records");
//   }
// };

export const loadRecord = async (endpoint) => {
  try {
    const response = await axios.get(`${API_BASE}/${endpoint}/`);
    return response.data;
  } catch (err) {
    toast.error("Failed to Load Records");
    throw err;
  }
};


export const saveRecord = async (endpoint, data, resetForm, toast) => {
  try {
    await axios.post(`${API_BASE}/${endpoint}/`, data);
    toast.success(`${endpoint} saved successfully`);
    resetForm();
    // loadData();
  } catch (err) {
    toast.error("Failed to Save Record");
  }
};

export const updateRecord = async (endpoint, id, data, resetForm, loadData) => {
  try {
    await axios.put(`${API_BASE}/${endpoint}/${id}`, data);
    toast.info(`${endpoint} Updated successfully`);
    resetForm();
    loadData();
  } catch (err) {
    toast.error("Failed to Update Record");
  }
};

export async function deleteRecord(endpoint, id, loadRecord, toast) {
  try {
    await axios.delete(`${API_BASE}/${endpoint}/${id}`);
    toast.warn(`${endpoint} deleted successfully`);
    loadRecord(); // Refresh data
  } catch (err) {
    toast.error(err?.response?.data?.message || `Failed to delete ${endpoint}`);
  }
}

// export const deleteRecord = async (endpoint, id, loadData) => {
//   try {
//     await axios.delete(`${API_BASE}/${endpoint}/${id}`);
//     toast.warn(`${endpoint} Deleted successfully`);
//     loadData();
//   } catch (err) {
//     toast.error("Failed to Delete Record");
//   }
// };
