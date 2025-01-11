// Function to dynamically adjust font sizes based on screen width
function adjustFontSize() {
    const width = window.innerWidth;

    if (width < 768) {
        // Small screens (phones)
        document.body.style.fontSize = "14px";
    } else if (width >= 768 && width <= 1024) {
        // Medium screens (tablets)
        document.body.style.fontSize = "16px";
    } else {
        // Large screens (desktop)
        document.body.style.fontSize = "18px";
    }
}

// Function to highlight the table row when hovered
function highlightRow() {
    const rows = document.querySelectorAll("table tr");
    rows.forEach((row) => {
        row.addEventListener("mouseenter", () => {
            row.style.backgroundColor = "#f0f0f0";
        });
        row.addEventListener("mouseleave", () => {
            row.style.backgroundColor = "transparent";
        });
    });
}

// Function to display an alert when the audio starts playing
function setupAudioAlert() {
    const audio = document.querySelector("audio");
    audio.addEventListener("play", () => {
        alert("Enjoy the audio!");
    });
}

// Initial function calls
adjustFontSize();
highlightRow();
setupAudioAlert();

// Add a resize event listener to adjust font sizes dynamically
window.addEventListener("resize", adjustFontSize);
