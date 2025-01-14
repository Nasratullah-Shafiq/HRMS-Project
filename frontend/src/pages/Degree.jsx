import { React, useEffect, useState, Link, axios, toast, toastr, jsPDF, XLSX } from '../components/import'; // Adjust path as needed
import { loadData } from '../functions/dataLoader'; // Adjust path if necessary
  
// function Degree() {

 const Degree = () => {
  // State variables
  const [id, setId] = useState('');
  const [name, setName] = useState('');
  // const [degrees, setDegrees] = useState([]);
  const [checkedDegrees, setCheckedDegrees] = useState([]); // Track selected degrees
  const [selectAllChecked, setSelectAllChecked] = useState(false); // Track "Select All" checkbox state

  
    const [degrees, setDegrees] = useState([]);
    const [error, setError] = useState(null);
  
    useEffect(() => {
      async function fetchDegrees() {
        try {
          const data = await loadData('degree'); // Use the appropriate endpoint
          setDegrees(data);
        } catch (err) {
          setError('Failed to fetch degrees');
        }
      }
  
      fetchDegrees(); // Call the function inside useEffect
    }, []); // Runs once on component mount
  
  // Save a new degree
  async function save(event) {
    event.preventDefault();
    try {
      await axios.post('http://127.0.0.1:8000/degree/', { id, name });
      toastr.success('Record Registered Successfully');
      resetForm();
      loadData();
    } catch (err) {
      toast.error('Failed to Register Degree');
    }
  }

  // Edit an existing degree
  async function editDegree(degree) {
    setId(degree.id);
    setName(degree.name);
  }

  // Update an existing degree
  async function update(event) {
    event.preventDefault();
    try {
      await axios.put(`http://127.0.0.1:8000/degree/${id}`, { id, name });
      toast.info('Record Updated Successfully');
      resetForm();
      loadData();
    } catch (err) {
      toast.error('Failed to Update Degree');
    }
  }

  // Delete a single degree
  async function deleteDegree(id) {
    try {
      await axios.delete(`http://127.0.0.1:8000/degree/${id}`);
      toast.info('Degree Deleted Successfully');
      loadData();
    } catch (err) {
      toast.error('Failed to Delete Degree');
    }
  }

  // Delete selected degrees
  async function deleteSelectedDegrees() {
    try {
      await Promise.all(
        checkedDegrees.map((degreeId) =>
          axios.delete(`http://127.0.0.1:8000/degree/${degreeId}`)
        )
      );
      toastr.error('Selected Degrees Deleted Successfully');
      setCheckedDegrees([]);
      loadData();
    } catch (err) {
      toast.error('Failed to Delete Selected Degrees');
    }
  }

  // Reset form fields
  function resetForm() {
    setId('');
    setName('');
  }

  // Handle individual checkbox change
  const handleCheckboxChange = (e, degreeId) => {
    const isChecked = e.target.checked;
    setCheckedDegrees((prev) =>
      isChecked ? [...prev, degreeId] : prev.filter((id) => id !== degreeId)
    );

    setSelectAllChecked(
      degrees.length === checkedDegrees.length + (isChecked ? 1 : -1)
    );
  };

  // Handle "Select All" checkbox change
  const handleSelectAllChange = (e) => {
    const isChecked = e.target.checked;
    setSelectAllChecked(isChecked);
    setCheckedDegrees(isChecked ? degrees.map((degree) => degree.id) : []);
  };


// Generate PDF report for selected degrees
const generatePDF = (e) => {
  e.preventDefault();
  
  const doc = new jsPDF('p', 'mm', 'a4'); // Create a new PDF with portrait orientation
  
  // Title of the PDF
  doc.setFontSize(20);
  doc.text('Degree Report', 105, 15, { align: 'center' });

  // Define starting points and table headers
  let startY = 30;
  const pageWidth = doc.internal.pageSize.getWidth();
  const cellPadding = 5; // Padding inside each cell

  // Table column widths
  const colWidths = [20, 100, 60]; // Adjust as per your content (ID, Degree Name, Date)

  // Draw Table Header
  doc.setFontSize(12);
  doc.setFillColor(200, 200, 200); // Light gray background for the header
  doc.rect(10, startY, pageWidth - 20, 10, 'F'); // Draw filled header row

  doc.text('ID', 15, startY + 7);             // ID Column
  doc.text('Degree Name', 35, startY + 7);    // Name Column
  doc.text('Degree Name', 35, startY + 7);    // Name Column
  doc.text('Date', 145, startY + 7);          // Date Column

  startY += 10; // Move Y-axis down for content rows

  // Populate the PDF with selected degrees (striped rows)
  degrees
    .filter((degree) => checkedDegrees.includes(degree.id))
    .forEach((degree, index) => {
      const isEvenRow = index % 2 === 0; // Check if row is even for striping
      if (isEvenRow) {
        doc.setFillColor(240, 240, 240); // Light gray for even rows
        doc.rect(10, startY, pageWidth - 20, 10, 'F'); // Filled rectangle
      }

      // Content inside the table row
      doc.text(`${degree.id}`, 15, startY + 7); // ID
      doc.text(degree.name, 35, startY + 7);    // Degree Name
      doc.text(new Date().toLocaleDateString(), 145, startY + 7); // Example date

      startY += 10; // Move Y-axis down for the next row

      // Check if new page is needed
      if (startY > 280) {
        doc.addPage(); // Add new page
        startY = 30; // Reset Y-axis for the new page
      }
    });

  // Save the generated PDF
  doc.save('degree-report.pdf');
};

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

 // Notify user when the number of checked degrees changes
 useEffect(() => {
  if (checkedDegrees.length > 0) {
    toast.info(`You have selected ${checkedDegrees.length} degree(s).`, {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  }
}, [checkedDegrees]);

//  // useEffect to display the length of selected checkboxes
//  useEffect(() => {
//   if (checkedDegrees.length > 0) {
//     toastr.success(`You have selected ${checkedDegrees.length} degree(s).`);
//   }
// }, [checkedDegrees]); 

const archiveSelectedDegrees = (e) => {
  e.preventDefault(); // Prevent page reload

  if (checkedDegrees.length === 0) {
    alert("No degrees selected for archiving.");
    return;
  }

  const updatedDegrees = degrees.map((degree) =>
    checkedDegrees.includes(degree.id)
      ? { ...degree, isArchived: true } // Mark as archived
      : degree
  );

  setDegrees(updatedDegrees); // Update state with archived degrees
  setCheckedDegrees([]); // Clear selected checkboxes
  alert("Selected degrees have been archived.");
};




  // Render component
  return (
    <div className="App">
      <div className="container">
        <form>
          <div className="form-group">
          <label className="form-label col-sm-2"><h2> Degree </h2></label>
            <label className = "col-sm-1 col-form-label"> <button className="btn btn-primary" onClick={save} disabled={!name}> Save </button></label>
            <label className = "col-sm-1 col-form-label"> <button className="btn btn-warning" onClick={update}> Update </button> </label>

            {/* {isChecked && ( */}
             {checkedDegrees.length > 0 && (
              <label className = "alert alert-success" style={{ padding: '7px'}}> 
                  {checkedDegrees.length} selected
              </label>
              )}
              {checkedDegrees.length > 0 && (
             <label className = "col-sm-1 col-form-label"> 
             <button className="btn btn-default" onClick={(e) => generatePDF(e)}> <i className='fa-solid fa-print'></i> Print </button> </label>
             )}
             {/* Conditionally render the buttons based on checkbox selection */}
             {checkedDegrees.length > 0 && (
             <label className = "col-sm-1 col-form-label">
            
             <div className="dropdown">
               <button type="button" className="btn btn-default dropdown-toggle" data-bs-toggle="dropdown">
               <i className='fa-solid fa-gear'></i> Action
               </button>
               <ul className="dropdown-menu"> 
                 <li><Link to="#" className="dropdown-item"  onClick={(e) => exportToExcel(e)}> <i className="fa-solid fa-file-export"></i> Export </Link></li>
                 <li><Link to="#" className="dropdown-item" onClick={archiveSelectedDegrees}> <i className='fa-solid fa-archive'></i> Archive </Link></li>
                 <li><Link to="#" className="dropdown-item"> <i className="fa-solid fa-inbox"></i> Unarchive </Link></li>
                 <li><Link to="#" className="dropdown-item"> <i className='fa-solid fa-copy'></i> Duplicate </Link></li>
                 <li onClick={deleteSelectedDegrees} ><Link to="#" className="dropdown-item"> <i className='fa-solid fa-trash'></i> Delete </Link></li>
               </ul>
             </div>
            
             </label>
             )}
          </div>

          <div className="mb-3 row">
            <label className="col-sm-2 col-form-label">Degree</label>
            <div className="col-sm-10">
              <input
                type="text"
                className="form-control"
                placeholder="Enter Degree Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
          </div>
        </form>

        <table className="table table-striped table-hover" align="center">
          <thead>
            <tr>
              <th style={{ width: '20px' }}>
                <input
                  type="checkbox"
                  id="select-all"
                  onChange={handleSelectAllChange}
                  checked={selectAllChecked}
                />
              </th>
              <th>Degree</th>
              <th style={{ textAlign: 'right' }}>Actions</th>
            </tr>
          </thead>
          <tbody>
          {degrees
          .filter((degree) => !degree.isArchived) // Show only non-archived degrees
            .map((degree) => (
            
              <tr key={degree.id}>
                <td>
                  <input
                    type="checkbox"
                    checked={checkedDegrees.includes(degree.id)}
                    onChange={(e) => handleCheckboxChange(e, degree.id)}
                  />
                </td>
                <td>{degree.name}</td>
                <td style={{ textAlign: 'right', padding: '10px' }}>
                  <i
                    className="fa-regular fa-pen-to-square"
                    onClick={() => editDegree(degree)}
                  ></i>
                  <i
                    className="fa-solid fa-trash"
                    style={{ paddingLeft: '15px' }}
                    onClick={() => deleteDegree(degree.id)}
                  ></i>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Degree;
