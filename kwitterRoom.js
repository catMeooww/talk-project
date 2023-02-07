

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyD9-Va-TTj-62Q8EhOi93feGH2YPHCxJck",
  authDomain: "text-twitter-7b963.firebaseapp.com",
  databaseURL: "https://text-twitter-7b963-default-rtdb.firebaseio.com",
  projectId: "text-twitter-7b963",
  storageBucket: "text-twitter-7b963.appspot.com",
  messagingSenderId: "283914978216",
  appId: "1:283914978216:web:61c2b7ca02f30c12bc939d"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

//load user
function loadUser() {
  user = localStorage.getItem("userName");
  document.getElementById("userName").innerHTML = user;
}

function addRoom() {
  roomName = document.getElementById("roomName").value;

  firebase.database().ref("/").child(roomName).update({
    purpose: roomName
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