
function exportToExcel(event) {
  event.preventDefault(); // Prevent default behavior

  // Filter the selected degrees
  const selectedDegrees = degrees.filter((degree) =>
    checkedDegrees.includes(degree.id)
  );

  if (selectedDegrees.length === 0) {
    toast.error("No degrees selected for export.");
    return;
  }

  // Prepare the data for Excel
  const excelData = selectedDegrees.map((degree) => ({
    ID: degree.id,
    Name: degree.name,
  }));

  // Create a new workbook and worksheet
  const worksheet = XLSX.utils.json_to_sheet(excelData);
  const workbook = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(workbook, worksheet, "Degrees");

  // Generate Excel file and trigger download
  XLSX.writeFile(workbook, "Selected_Degrees.xlsx");
}
export default exportToExcel;