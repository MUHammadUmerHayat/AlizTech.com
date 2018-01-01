// Initialize Firebase
var config = {
    apiKey: "AIzaSyA6RiEm8XA8cVOAsCuvf9CftIkFx6-5MbU",
    authDomain: "technical-mare-sath.firebaseapp.com",
    databaseURL: "https://technical-mare-sath.firebaseio.com",
    projectId: "technical-mare-sath",
    storageBucket: "technical-mare-sath.appspot.com",
    messagingSenderId: "1030722589751"
};
firebase.initializeApp(config);

function checkForLastName() {

}

count = 0;
function send() {

    var name = document.getElementById('name');
    var email = document.getElementById('email');
    var message = document.getElementById('message');
    var firebaseRef = firebase.database().ref('/');
    if (document.getElementById("name").value.length > 2 && document.getElementById("email").value.length > 6 && document.getElementById("message").value.length > 2) {
        document.getElementById('alert').style.display = "none";

        document.getElementById('alert1').style.display = "block";

        setInterval(function () {
            document.getElementById('alert1').style.display = "none";
        }, 4000)

        var userKey = firebase.database().ref().child('User').push().key;
        firebaseRef.child('User/' + userKey + '/Name').set(name.value);
        firebaseRef.child('User/' + userKey + '/Email').set(email.value);
        firebaseRef.child('User/' + userKey + '/Message').set(message.value);

        name.value = "";
        email.value = "";
        message.value = "";

    }
    else {
        document.getElementById('alert').style.display = "block";

    }


}



function messag() {
    document.getElementById('alert').style.display = "none";

    var feedback = document.getElementById('feedback');
    feedback.style.display = "block"
}
function closeMessage() {

    var feedback = document.getElementById('feedback');
    feedback.style.display = "none"
}

