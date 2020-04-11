(function () {
  var firebaseConfig = {
    apiKey: "AIzaSyDe6jloKy_0iykTw7HtGyKM62ZmJ5Npfo0",
    authDomain: "personal-web-b95bd.firebaseapp.com",
    databaseURL: "https://personal-web-b95bd.firebaseio.com",
    projectId: "personal-web-b95bd",
    storageBucket: "personal-web-b95bd.appspot.com",
    messagingSenderId: "611454640863",
    appId: "1:611454640863:web:4cc815ae45ad1f05443f6a",
    measurementId: "G-DZ22M9BVPL",
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

  var messagesRef = firebase.database().ref("messages");

  document.getElementById("cont").addEventListener("submit", submitForm);

  function submitForm(e) {
    e.preventDefault();

    var name = getInputVal("nombre");
    var email = getInputVal("email");
    var asunto = getInputVal("asunto");
    var msg = getInputVal("msg");

    saveMessage(name, email, asunto, msg);
  }

  function getInputVal(id) {
    return document.getElementById(id).value;
  }

  function saveMessage(name, email, asunto, msg) {
    var newMessageRef = messagesRef.push();
    newMessageRef.set({
      name: name,
      email: email,
      asunto: asunto,
      msg: msg,
    });
  }
})();
