
import { Link } from "react-router-dom";

function Titlebar(){
    return(
        // <label className = "col-sm-1 col-form-label"> <button className="btn btn-primary" onClick={handleSave} disabled={!name}> Save </button></label>
        //     <label className = "col-sm-1 col-form-label"> <button className="btn btn-warning" onClick={update} disabled={!name}> Update </button> </label>
            // {/* {isChecked && ( */}
            // <label className = "col-sm-1 col-form-label"> 
            // {isChecked && <button class="btn btn-default"> <i class='fa-solid fa-print'></i> Print </button> }</label>
            // {isChecked && (
            // <label className = "col-sm-1 col-form-label">
            
            <div class="dropdown">
              <button type="button" class="btn btn-default dropdown-toggle" data-bs-toggle="dropdown">
              <i className='fa-solid fa-gear'></i> Action
              </button>
              <ul class="dropdown-menu"> 
                <li><Link to="#" class="dropdown-item"> <i className="fa-solid fa-file-export"></i> Export </Link></li>
                <li><Link to="#" class="dropdown-item"> <i className='fa-solid fa-archive'></i> Archive </Link></li>
                <li><Link to="#" class="dropdown-item"> <i className="fa-solid fa-inbox"></i> Unarchive </Link></li>
                <li><Link to="#" class="dropdown-item"> <i className='fa-solid fa-copy'></i> Duplicate </Link></li>
                <li><Link to="#" class="dropdown-item"> <i className='fa-solid fa-trash'></i> Delete </Link></li>
              </ul>
            </div>
            
            // </label>
            // )}
    )
}
export default Titlebar;