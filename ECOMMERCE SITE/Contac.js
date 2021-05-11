const dbRef = firebase.database().ref();
const detailsRef = dbRef.child('userderails');
detailsRef.on("child_added", function(snapshot,prevChildKey) {
    var newPost = snapshot.val();

});

function send(){
    var email = document.getElementById("email").value;
    var name = document.getElementById("name").value;
    var phone = document.getElementById("phone").value;
    var message = document.getElementById("message").value;


    detailsRef.push().set({
        email: email,
        name: name,
        phone: phone,
        message :message,

    });
}