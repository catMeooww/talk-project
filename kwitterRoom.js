//Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyB4aKcBiy9PfDS42V_7CN60w3s7Lq5A8TY",
    authDomain: "text-talking.firebaseapp.com",
    databaseURL: "https://text-talking-default-rtdb.firebaseio.com/",
    projectId: "text-talking",
    storageBucket: "text-talking.appspot.com",
    messagingSenderId: "488401112127",
    appId: "1:488401112127:web:0d1b551c0217b7dc963c8a"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

  //load user
  function loadUser(){
    user = localStorage.getItem("userName")
    document.getElementById("userName").innerHTML = user;
  }