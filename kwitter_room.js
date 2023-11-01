// Your web app's Firebase configuration
const firebaseConfig = {
      apiKey: "AIzaSyChWDCeEw5zTHyN-D8BhlMEhskuhxPPPwo",
      authDomain: "ktwitter-f6477.firebaseapp.com",
      projectId: "ktwitter-f6477",
      storageBucket: "ktwitter-f6477.appspot.com",
      messagingSenderId: "395649976869",
      appId: "1:395649976869:web:86404c9bbe5542171d0dcc"
};
// Initialize Firebase const app = initializeApp(firebaseConfig);
function getData() {
      firebase.database().ref("/").on('value', function (snapshot) {
            document.getElementById("output").innerHTML = "";
            snapshot.forEach(function (childSnapshot) {
                  childKey = childSnapshot.key;
                  Room_names = childKey;
                  console.log("nombre de la sala" + Room_names);
                  row = "<div class-'room_name' id =" + Room_names + "onclick='redirectToRoomName(this.id)' >#" + Room_names + "</div><hr>";
                  document.getElementById("output").innerHTML += row;
            });
      });
}
getData();
function addRoom() {
      Room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(Room_name).update({ purpose: "adding room name " });

      localStorage.setItem("room_name", Room_name);
}

function redirectToRoomName(name) {
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_room.html";
}

user_name = localStorage.getItem("user_name");
room_name = localStorage.getItem("room_name");

function send() {
      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name: user_name,
            message: msg,
            like: 0
      });
      
      document.getElementById("msg").value = "";

}
