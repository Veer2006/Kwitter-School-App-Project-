
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyBNxbgkN6dJJwJh0RXzOoAcAnkitMsbZX8",
      authDomain: "doctor-and-patient-chat-ec56c.firebaseapp.com",
      databaseURL: "https://doctor-and-patient-chat-ec56c.firebaseio.com",
      projectId: "doctor-and-patient-chat-ec56c",
      storageBucket: "doctor-and-patient-chat-ec56c.appspot.com",
      messagingSenderId: "866526094312",
      appId: "1:866526094312:web:31e33cb8e46daeeba5ba5d",
      measurementId: "G-G40EY07H3B"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
  

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
