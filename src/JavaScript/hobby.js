// Function to handle video interaction
function setupVideoEvents() {
    const video = document.querySelector("video");

    // Play video when hovered
    video.addEventListener("mouseenter", () => {
        video.play();
    });

    // Pause video when not hovered
    video.addEventListener("mouseleave", () => {
        video.pause();
    });

    // Alert when the video ends
    video.addEventListener("ended", () => {
        alert("Hope you enjoyed the video!");
    });
}

// Function to highlight images when clicked
function setupImageHighlight() {
    const images = document.querySelectorAll(".container img");

    images.forEach((img) => {
        img.addEventListener("click", () => {
            images.forEach((i) => i.classList.remove("highlight")); // Remove highlight from all
            img.classList.add("highlight"); // Add highlight to clicked image
        });
    });
}

// Function to toggle 'Surprising Things I Don't Like' section
function toggleDislikeSection() {
    const dislikeSection = document.querySelector(".pbot2");
    const dislikeButton = document.createElement("button");
    dislikeButton.textContent = "Toggle Dislikes";
    dislikeButton.style.display = "block";
    dislikeButton.style.margin = "20px auto";
    dislikeButton.style.padding = "10px 20px";
    dislikeButton.style.backgroundColor = "#007BFF";
    dislikeButton.style.color = "#fff";
    dislikeButton.style.border = "none";
    dislikeButton.style.cursor = "pointer";

    dislikeButton.addEventListener("click", () => {
        if (dislikeSection.style.display === "none") {
            dislikeSection.style.display = "block";
        } else {
            dislikeSection.style.display = "none";
        }
    });

    dislikeSection.parentElement.appendChild(dislikeButton);
}

// Initial function calls
setupVideoEvents();
setupImageHighlight();
toggleDislikeSection();
