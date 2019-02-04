var attempt = 3; // Variable to count number of attempts.
// Below function Executes on click of login button.
function validate(){
var password = document.getElementById("password").value;
if ( username == "senkgo" && password == "postsenkgo"){
alert ("Login successfully GENG");
window.location = "login.html"; // Redirecting to other page.
return false;
}
else{
attempt --;// Decrementing by one.
alert("salah Password "+attempt+" UPAYA MASUK");
// Disabling fields after 3 attempts.
if( attempt == 0){
document.getElementById("password").disabled = true;
document.getElementById("submit").disabled = true;
return false;
}
}
}
