const button = document.getElementById("button");
const header = document.getElementById("header");

button.addEventListener("click", function() {
    if (header.style.display === "none" || header.style.display === "") {
        header.style.display = "block";
    } else {
        header.style.display = "none";
    }
});