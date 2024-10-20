// imports.js - Centralized imports

// React imports
import React, { useEffect, useState } from 'react';

// React Router imports
import { Link } from 'react-router-dom';

// Axios for API calls
import axios from 'axios';

// Toast notifications
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// PDF generation
import jsPDF from 'jspdf';

//Import the xlsx library
import * as XLSX from 'xlsx';

//Import toast message 
import toastr from 'toastr';
import 'toastr/build/toastr.min.css';

// import html2canvas from 'html2canvas';
import html2canvas from 'html2canvas';

// Import jsPDF's autoTable plugin
import 'jspdf-autotable'; 

// Export everything as named exports
export {
  React,
  useEffect,
  useState,
  Link,
  axios,
  toast,
  toastr,
  ToastContainer,
  jsPDF,
  XLSX,
  html2canvas
};
