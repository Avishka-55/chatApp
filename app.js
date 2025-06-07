// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAL8czEH4PIsOSGJ7b1Sjg3qBjc-zvANu4",
  authDomain: "chatapp-7192c.firebaseapp.com",
  databaseURL: "https://chatapp-7192c-default-rtdb.firebaseio.com/",
  projectId: "chatapp-7192c",
  storageBucket: "chatapp-7192c.appspot.com",
  messagingSenderId: "548441326854",
  appId: "1:548441326854:web:705e2d5591124ac0a24a87"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const database = firebase.database();
const messagesRef = database.ref('messages');

function sendMessage() {
  const input = document.getElementById("messageInput");
  const message = input.value.trim();
  if (message === "") return;

  messagesRef.push({
    text: message,
    timestamp: Date.now()
  });

  input.value = "";
}

messagesRef.on('child_added', (snapshot) => {
  const messageData = snapshot.val();
  const messagesDiv = document.getElementById("messages");
  const messageElement = document.createElement("div");
  messageElement.textContent = messageData.text;
  messagesDiv.appendChild(messageElement);
});
