export const updateRecord = async (endpoint, id, data, resetForm, loadData) => {
  try {
    await axios.put(`http://127.0.0.1:8000/${endpoint}/${id}`, data);
    toast.info("Record Updated Successfully");
    resetForm();
    loadData();
  } catch (err) {
    toast.error("Failed to Update Record");
  }
};