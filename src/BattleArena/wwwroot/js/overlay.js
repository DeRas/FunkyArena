/* Open when someone clicks on the span element */
function openNav() {
    document.getElementById("cover").style.width = "100%";
}
/* Close when someone clicks on the "x" symbol inside the overlay */
function closeNav() {
    document.getElementById("cover").style.width = "0%";
}
function beginClick() {
    var username = document.getElementById("username").value;
    console.log(username);
    //Sign in to signalr
    closeNav();
}
