import axios from 'axios';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import toastr from 'toastr';
import 'toastr/build/toastr.min.css';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

function Degree() {
  // State variables
  const [id, setId] = useState('');
  const [name, setName] = useState('');
  const [degrees, setDegrees] = useState([]);
  const [checkedDegrees, setCheckedDegrees] = useState([]); // Track selected degrees
  const [selectAllChecked, setSelectAllChecked] = useState(false); // Track "Select All" checkbox state

  // Fetch degree data on component mount
  useEffect(() => {
    (async () => await loadDegrees())();
  }, []);

  // Fetch all degrees from the API
  async function loadDegrees() {
    try {
      const result = await axios.get('http://127.0.0.1:8000/degree/');
      setDegrees(result.data);
      console.log(result.data);
    } catch (err) {
      console.error('Error fetching degrees:', err);
    }
  }

  // Save a new degree
  async function save(event) {
    event.preventDefault();
    try {
      await axios.post('http://127.0.0.1:8000/degree/', { id, name });
      toastr.success('Record Registered Successfully');
      resetForm();
      loadDegrees();
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
      loadDegrees();
    } catch (err) {
      toast.error('Failed to Update Degree');
    }
  }

  // Delete a single degree
  async function deleteDegree(id) {
    try {
      await axios.delete(`http://127.0.0.1:8000/degree/${id}`);
      toast.info('Degree Deleted Successfully');
      loadDegrees();
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
      loadDegrees();
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


  function generatePDF(event) {
    event.preventDefault(); // Prevent the default behavior
  
    // Filter the selected degrees based on the checked IDs
    const selectedDegrees = degrees.filter((degree) =>
      checkedDegrees.includes(degree.id)
    );
  
    if (selectedDegrees.length === 0) {
      toast.error("No degrees selected for printing.");
      return;
    }
  
    // Create a temporary div to hold the HTML content for the PDF
    const tempDiv = document.createElement('div');
    tempDiv.innerHTML = `
      <table style="width: 100%; border-collapse: collapse;">
        <thead>
          <tr>
            <th style="border: 1px solid black; padding: 8px;">ID</th>
            <th style="border: 1px solid black; padding: 8px;">Degree</th>
          </tr>
        </thead>
        <tbody>
          ${selectedDegrees
            .map(
              (degree) => `
            <tr>
              
              <td style="border: 1px solid black; padding: 8px;">${degree.name}</td>
            </tr>`
            )
            .join('')}
        </tbody>
      </table>
    `;
  

  // Append the temporary div to the body (but keep it hidden)
  document.body.appendChild(tempDiv);
  tempDiv.style.display = 'none';

  // Use html2canvas to convert the content into an image
  html2canvas(tempDiv).then((canvas) => {
    const imgData = canvas.toDataURL('image/png');
    const doc = new jsPDF();
    const imgWidth = 190; // Fit to A4 width
    const imgHeight = (canvas.height * imgWidth) / canvas.width;

    doc.addImage(imgData, 'PNG', 10, 10, imgWidth, imgHeight);
    doc.save('Selected_Degrees.pdf');

    // Remove the temporary div from the document after use
    document.body.removeChild(tempDiv);
  }).catch((error) => {
    console.error('Error generating PDF:', error);
    toast.error('Failed to generate PDF.');
  });
}

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
                 <li><Link to="#" className="dropdown-item"> <i className="fa-solid fa-file-export"></i> Export </Link></li>
                 <li><Link to="#" className="dropdown-item"> <i className='fa-solid fa-archive'></i> Archive </Link></li>
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

        <table className="table table-striped" align="center">
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
            {degrees.map((degree) => (
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
