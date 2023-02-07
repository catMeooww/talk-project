// Your web app's Firebase configuration
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

//load user
function loadUser() {
  user = localStorage.getItem("userName");
  document.getElementById("userName").innerHTML = user;
}

function addRoom() {
  roomName = document.getElementById("roomName").value;

  firebase.database().ref("/").child(roomName).update({
    purpose: "adicionar nome de sala"
  });

  localStorage.setItem("roomName", roomName);

  window.location = "kwitterPage.html";
}

function getData() {
  firebase.database().ref("/").on('value', function (snapshot) {
    document.getElementById("output").innerHTML = "";
     snapshot.forEach(function (childSnapshot) {
      childKey = childSnapshot.key;
      roomNames = childKey;
      console.log("Nome da Sala - " + roomNames);
      row = "<div class='roomName' id=" + roomNames + " onclick='redirectToRoomName(this.id)' >#" + roomNames + "</div><hr>";
      document.getElementById("output").innerHTML += row;
    });
  });

}

getData();

function redirectToRoomName(name) {
  console.log(name);
  localStorage.setItem("roomName", name);
  window.location = "kwitterPage.html";
}

function logout() {
  localStorage.removeItem("userName");
  localStorage.removeItem("roomName");
  window.location = "index.html";
}