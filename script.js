let bar = document.getElementById("bar");
let status = document.getElementById("status");
let loading = document.getElementById("loading-screen");
let main = document.getElementById("main-content");

let percent = 0;

let interval = setInterval(function(){

    percent++;

    bar.style.width = percent + "%";
    status.innerHTML = percent + "%";

    if(percent >= 100){

        clearInterval(interval);

        loading.style.display = "none";
        main.style.display = "block";

        alert("Welcome to Our Story ❤️");

    }

},30);
document.getElementById("beginBtn").addEventListener("click", function(){

    window.location.href = "password.html";

});