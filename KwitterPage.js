import { initializeApp } from "firebase/app";
const firebaseConfig = {
  apiKey: "AIzaSyB4aKcBiy9PfDS42V_7CN60w3s7Lq5A8TY",
  authDomain: "text-talking.firebaseapp.com",
  databaseURL: "https://text-talking-default-rtdb.firebaseio.com",
  projectId: "text-talking",
  storageBucket: "text-talking.appspot.com",
  messagingSenderId: "488401112127",
  appId: "1:488401112127:web:0d1b551c0217b7dc963c8a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

function loadUser() {
    user = localStorage.getItem("userName");
    room = localStorage.getItem("roomName");
}
  
function send(){
    mensagem = document.getElementById("mensageInput").value;
    firebase.database().ref(roomName).push(
        {
          name:userName,
          message:mensagem,
          like:0
        }
    );
    document.getElementById("mensageInput").value = "";
}

function logout() {
    localStorage.removeItem("userName");
    localStorage.removeItem("roomName");
    window.location = "index.html";
  }