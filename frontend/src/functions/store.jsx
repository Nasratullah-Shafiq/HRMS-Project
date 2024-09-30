import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import toastr from 'toastr';
import 'toastr/build/toastr.min.css';

// dataLoaders.js
import axios from 'axios';
export async function saveOrganization(data, stateSetters) {
    const {
      id, name
    } = data; // Destructure data object
  
    const {
      setId, setName
    } = stateSetters; // Destructure state setters
  
    try {
      await axios.post("http://127.0.0.1:8000/organization/", {
        id,
        name,
      });
  
      toastr.success("Data Added Successfully");
  
      // Reset the fields
      setId("");
      setName("");
        
      // Load updated data
      loadFunction();
    } catch (err) {
      toastr.error("Course Registration Failed");
    }
  }
  