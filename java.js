// script.js

// Array of image URLs
const images = [
    "portfolio-1.jpg",
    "portfolio-2.jpg",
    "portfolio-3.jpg",
    "portfolio-4.jpg",
    // Add more image URLs as needed
  ];

// Get the button and image elements
const imageButton = document.getElementById("imageButton");
const displayImage = document.getElementById("displayImage");
const forwardButton = document.getElementById("forwardButton");
const backwardButton = document.getElementById("backwardButton");
// Initialize index for image array
let currentIndex = 0;

// Function to change image when button is clicked
function changeImage() {
  // Change the source attribute of the image
  displayImage.src = images[currentIndex];

  // Increment index or reset to 0 if it exceeds image array length
  currentIndex = (currentIndex + 1) % images.length;
}

for (let i = 0; i < images.length; i++) {
    console.log(images[i]);
  }

function forwardImage() {
  displayImage.src = images[currentIndex + 1];
  currentIndex = (currentIndex + 1) % images.length;
}
function backwardImage() {
    displayImage.src = images[currentIndex - 1];
    currentIndex = (currentIndex - 1 + images.length) % images.length; // Decrement currentIndex correctly
}

// Attach click event listener to the button
imageButton.addEventListener("click", changeImage);
forwardButton.addEventListener("click", forwardImage);
backwardButton.addEventListener("click", backwardImage);
