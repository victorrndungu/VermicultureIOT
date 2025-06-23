// Firebase config
const firebaseConfig = {
    apiKey: "AIzaSyDoosWAz64CILHuBPOrNq0kjcvfimRvMPM",
    authDomain: "vermicultureiot.firebaseapp.com",
    databaseURL: "https://vermicultureiot-default-rtdb.firebaseio.com",
    projectId: "vermicultureiot",
    storageBucket: "vermicultureiot.firebasestorage.app",
    messagingSenderId: "48951942012",
    appId: "1:48951942012:web:3f08f0baf4d7bfbbfbe2f9",
    measurementId: "G-VN28Z8653L"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  const database = firebase.database();
  
  // Function to log data
  function logTestData() {
    const logRef = database.ref("vermiculture/logs");
    const newLog = {
      temperature: Math.floor(Math.random() * 10 + 25),
      moisture: Math.floor(Math.random() * 20 + 50),
      timestamp: new Date().toISOString()
    };
  
    logRef.push(newLog, (error) => {
      if (error) {
        alert("Error logging data: " + error);
      } else {
        alert("Test entry logged successfully!");
      }
    });
  }