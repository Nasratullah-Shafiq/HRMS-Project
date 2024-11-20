// src/App.js
import React from 'react';
import '../i18n/i18n'; // Import the i18n configuration

import { useTranslation } from 'react-i18next';

function Translation() {
  const { t, i18n } = useTranslation();

  // Function to handle language change
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="App">
      <h1>{t('welcome')}</h1>
      <p>{t('description')}</p>
      <button onClick={() => changeLanguage('en')}>English</button>
      <button onClick={() => changeLanguage('fr')}>French</button>
    </div>
  );
}

export default Translation;
