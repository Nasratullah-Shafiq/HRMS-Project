// src/App.js
import React from 'react';
import '../i18n/i18n'; // Import the i18n configuration

import { useTranslation } from 'react-i18next';

export default function Translation() {
  const { t, i18n } = useTranslation()

  // Function to handle language change
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
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





// // src/App.jsx
// import React, { useState, useEffect } from "react";
// import { getTranslations } from '../i18n/i18n';

// const App = () => {
//   const [language, setLanguage] = useState("en"); // Default language
//   const [translations, setTranslations] = useState(getTranslations(language));

//   // Update translations when the language changes
//   useEffect(() => {
//     setTranslations(getTranslations(language));
//   }, [language]);

//   const handleLanguageChange = (event) => {
//     setLanguage(event.target.value); // Update language state
//   };

  
// };

// export default App;





// export default Translation;
