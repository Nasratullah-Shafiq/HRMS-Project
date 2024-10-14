import Navbar from './components/Navbar.jsx';
import Titlebar from './components/Titlebar.jsx';
import Sidebar from './components/Sidebar.jsx';
import MyRouter from './router/index.js';
import { ToastContainer, toast } from 'react-toastify';

function App() {
  return (
    <div className="App">
      <div className="row">
        <div className='col-sm-12' >  
          <Navbar />
        </div>
        <div className='col-sm-3'>
          <Sidebar />
        </div>
        <div className='col-sm-9'>
          <Titlebar />
          <MyRouter />
        </div>
      </div>      
      <ToastContainer />
      
    </div>
  );
}

export default App;
