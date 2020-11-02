 // Your web app's Firebase configuration
 var firebaseConfig = {
    apiKey: "AIzaSyAEG5v_yiJeuiEIb9jn4bjosP5O4nlvx-g",
    authDomain: "kwitter-let-s-chat.firebaseapp.com",
    databaseURL: "https://kwitter-let-s-chat.firebaseio.com",
    projectId: "kwitter-let-s-chat",
    storageBucket: "kwitter-let-s-chat.appspot.com",
    messagingSenderId: "163618188930",
    appId: "1:163618188930:web:ffe6af781484fa8a5ace9b"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);


  user_name = localStorage.getItem("Username");
  room_name = localStorage.getItem("roomname");

  function send(){
      msg = document.getElementById("msg").value;

      firebase.database().ref(room_name).push({
            name : user_name,
            message : msg,
            like : 0
      });

      document.getElementById("msg").value = "";
}