import Navbar from './components/Navbar.jsx';
import Titlebar from './components/Titlebar.jsx';
import Sidebar from './components/Sidebar.jsx';
import MyRouter from './router/index.js';
import { ToastContainer, toast } from 'react-toastify';

// function App() {
//   return (
//     <div className="App">
//       <div className="row">
//         <div className='col-sm-12' >  
//           <Navbar />
//         </div>
//         <div className='col-sm-2' >
//           <Sidebar />
//         </div>
//         <div className='col-sm-10' style={{ paddingLeft: '50px'}}>
//           <Titlebar />
//           <MyRouter />
//         </div>
//       </div>      
//       <ToastContainer />
      
//     </div>
//   );
// }

// export default App;




// src/App.js
import React from 'react';
import { useTranslation } from 'react-i18next';
import './i18n/i18n'; // Import the i18n configuration



export default function App() {
  const {t, i18n} = useTranslation()

  // Function to handle language change
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng)
  };

  return (
    <div className="">
      <select onClick ={(e)=>changeLanguage(e.target.value)}>
        <option value="en"> English </option>
        <option value="dr"> Dari </option>
      </select>
      <div>{t('welcome_message')}</div>
   </div>
  );
}


// src/App.jsx
// import React from 'react';
// import { useTranslation } from 'react-i18next';


// const App = () => {
//   const { t } = useTranslation(); // Hook to fetch translations

//   return (
//     <div>
      
//       <h1>{t('welcome_message')}</h1> {/* Example translation */}
//       <button>{t('login')}</button> {/* Example translation */}
//     </div>
//   );
// };

// export default App;
