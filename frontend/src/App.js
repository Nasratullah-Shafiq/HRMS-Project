import Navbar from './components/Navbar.jsx';
import Sidebar from './components/Sidebar.jsx';
import MyRouter from './router/index.js';
import { ToastContainer, toast } from 'react-toastify';

function App() {
  return (
    <div className="App">
      <div className="row">
        <div className='col-sm-12'> 
          <Navbar />
        </div>
        <div className='col-sm-2'>
          <Sidebar />
        </div>
        <div className='col-sm-10' style={{padding:'50px'}}>
          <MyRouter />
        </div>
      </div>      
      <ToastContainer />
      
    </div>
  );
}

export default App;
