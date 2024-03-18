const button = document.getElementById("button");
const header = document.getElementById("header");

button.addEventListener("click", function() {
    if (header.style.display === "none" || header.style.display === "") {
        header.style.display = "block";
    } else {
        header.style.display = "none";
    }
});



const trialButtons = document.querySelectorAll('.trial, .trial2, .trial3');

// Function to handle button click
function handleClick(event) {
    // Reset the color of all buttons
    trialButtons.forEach(button => {
        button.style.backgroundColor = "whitesmoke"; // Change to default color
    });
    
    // Set the background color of the clicked button
    event.target.style.backgroundColor = "grey";
}

// Add event listener to each trial button
trialButtons.forEach(button => {
    button.addEventListener('click', handleClick);
});

// Click the first trial button by default
document.querySelector('.trial').click();