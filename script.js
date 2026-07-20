document.querySelector("button").addEventListener("click", function(){
    alert("Welcome to the University of Kabianga Smart Campus Navigator!");
});
document.getElementById("searchBtn").addEventListener("click", function () {

    let search = document.getElementById("searchBox").value.toLowerCase().trim();

    if (search === "ltb1") {
        window.location.href = "ltb1.html";
    }

    else if (search === "ltb2") {
        window.location.href = "ltb2.html";
    }

    else if (search === "ltb3") {
        window.location.href = "ltb3.html";
    }

    else if (search === "ltb4") {
        window.location.href = "ltb4.html";
    }

    else {
        alert("Venue not found. Please try again.");
    }

});
