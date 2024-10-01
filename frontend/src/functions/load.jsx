import axios from 'axios';

// Function to load Appraisal data
export async function loadAppraisal(setAppraisal) {
    try {
      const result = await axios.get("http://127.0.0.1:8000/appraisal/");
      setAppraisal(result.data);
    } catch (error) {
      console.error("Error loading Appraisal Record:", error);
    }
  }

  // Function to load Course data
export async function loadCourse(setCourse) {
  try {
    const result = await axios.get("http://127.0.0.1:8000/course/");
    setCourse(result.data);
  } catch (error) {
    console.error("Error loading Course Record:", error);
  }
}

// Function to load Degree data
export async function loadDegree(setDegree) {
  try {
    const result = await axios.get("http://127.0.0.1:8000/degree/");
    setDegree(result.data);
  } catch (error) {
    console.error("Error loading Degree:", error);
  }
}

// Function to load Department data
export async function loadDepartment(setDepartment) {
  try {
    const result = await axios.get("http://127.0.0.1:8000/department/");
    setDepartment(result.data);
  } catch (error) {
    console.error("Error loading Department:", error);
  }
}

// Function to load Document data
export async function loadDocument(setDocument) {
  try {
    const result = await axios.get("http://127.0.0.1:8000/document/");
    setDocument(result.data);
  } catch (error) {
    console.error("Error loading Document:", error);
  }
}

// Function to load Education data
export async function loadEdcuation(setEducation) {
  try {
    const result = await axios.get("http://127.0.0.1:8000/education/");
    setEducation(result.data);
  } catch (error) {
    console.error("Error loading Education:", error);
  }
}

// Function to load Employee data
export async function loadEmployee(setEmployee) {
  try {
    const result = await axios.get("http://127.0.0.1:8000/employee/");
    setEmployee(result.data);
  } catch (error) {
    console.error("Error loading Employee:", error);
  }
}

// Function to load Exam data
export async function loadExam(setExam) {
  try {
    const result = await axios.get("http://127.0.0.1:8000/exam/");
    setExam(result.data);
  } catch (error) {
    console.error("Error loading Exam:", error);
  }
}

// Function to load Experience data
export async function loadExperience(setExperience) {
  try {
    const result = await axios.get("http://127.0.0.1:8000/experience/");
    setExperience(result.data);
  } catch (error) {
    console.error("Error loading Experience:", error);
  }
}

// Function to load Faculty data
export async function loadFaculty(setFaculty) {
  try {
    const result = await axios.get("http://127.0.0.1:8000/faculty/");
    setFaculty(result.data);
  } catch (error) {
    console.error("Error loading Faculty:", error);
  }
}

// Function to load Fire data
export async function loadFire(setFire) {
  try {
    const result = await axios.get("http://127.0.0.1:8000/fire/");
    setFire(result.data);
  } catch (error) {
    console.error("Error loading Fire:", error);
  }
}

// Function to load Organization data
export async function loadGrade(setGrade) {
  try {
    const result = await axios.get("http://127.0.0.1:8000/grade/");
    setGrade(result.data);
  } catch (error) {
    console.error("Error loading Grade:", error);
  }
}

// Function to load Guarantee data
export async function loadGuarantee(setGuarantee) {
  try {
    const result = await axios.get("http://127.0.0.1:8000/guarantee/");
    setGuarantee(result.data);
  } catch (error) {
    console.error("Error loading Guarantee:", error);
  }
}

// Function to load Health data
export async function loadHealth(setHealth) {
  try {
    const result = await axios.get("http://127.0.0.1:8000/health/");
    setHealth(result.data);
  } catch (error) {
    console.error("Error loading Health Data:", error);
  }
}

// Function to load Job Position data
export async function loadJobPosition(setJobPosition) {
  try {
    const result = await axios.get("http://127.0.0.1:8000/job-position/");
    setJobPosition(result.data);
  } catch (error) {
    console.error("Error loading Job Positions :", error);
  }
}
// Function to load Language data
export async function loadLanguage(setLanguage) {
  try {
    const result = await axios.get("http://127.0.0.1:8000/language/");
    setLanguage(result.data);
  } catch (error) {
    console.error("Error loading Language:", error);
  }
}
// Function to load Major data
export async function loadMajor(setMajor) {
  try {
    const result = await axios.get("http://127.0.0.1:8000/major/");
    setMajor(result.data);
  } catch (error) {
    console.error("Error loading Major:", error);
  }
}
// Function to load Organization data
export async function loadOrganization(setOrganization) {
  try {
    const result = await axios.get("http://127.0.0.1:8000/organization/");
    setOrganization(result.data);
  } catch (error) {
    console.error("Error loading Organization:", error);
  }
}
// Function to load Publication data
export async function loadPublication(setPublication) {
  try {
    const result = await axios.get("http://127.0.0.1:8000/publication/");
    setPublication(result.data);
  } catch (error) {
    console.error("Error loading Publication:", error);
  }
}
// Function to load Punishment data
export async function loadPunishment(setPunishment) {
  try {
    const result = await axios.get("http://127.0.0.1:8000/punishment/");
    setPunishment(result.data);
  } catch (error) {
    console.error("Error loading Punishment:", error);
  }
}
// Function to load Relatives data
export async function loadRelative(setRelative) {
  try {
    const result = await axios.get("http://127.0.0.1:8000/relative/");
    setRelative(result.data);
  } catch (error) {
    console.error("Error loading Relative:", error);
  }
}

// Function to load Retirement data
export async function loadRetirement(setRetirement) {
  try {
    const result = await axios.get("http://127.0.0.1:8000/retirement/");
    setRetirement(result.data);
  } catch (error) {
    console.error("Error loading Retirement:", error);
  }
}

// Function to load Reward data
export async function loadReward(setReward) {
  try {
    const result = await axios.get("http://127.0.0.1:8000/reward/");
    setReward(result.data);
  } catch (error) {
    console.error("Error loading Reward:", error);
  }
}

// Function to load Status data
export async function loadStatus(setStep) {
  try {
    const result = await axios.get("http://127.0.0.1:8000/status/");
    setStep(result.data);
  } catch (error) {
    console.error("Error loading Status:", error);
  }
}
// Function to load Step data
export async function loadStep(setStep) {
  try {
    const result = await axios.get("http://127.0.0.1:8000/step/");
    setStep(result.data);
  } catch (error) {
    console.error("Error loading Step:", error);
  }
}

// Function to load Training data
export async function loadTraining(setTraining) {
  try {
    const result = await axios.get("http://127.0.0.1:8000/training/");
    setTraining(result.data);
  } catch (error) {
    console.error("Error loading Training:", error);
  }
}

// Function to load Travel data
export async function loadTravel(setTravel) {
  try {
    const result = await axios.get("http://127.0.0.1:8000/travel/");
    setTravel(result.data);
  } catch (error) {
    console.error("Error loading Travel:", error);
  }
}

// Function to load University data
export async function loadUniversity(setUniversity) {
  try {
    const result = await axios.get("http://127.0.0.1:8000/university/");
    setUniversity(result.data);
  } catch (error) {
    console.error("Error loading University:", error);
  }
}