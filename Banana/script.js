// old version
/* 
let scoreVar = 0;

function bananaClick() {
  scoreVar += 1; // Increment score
  const scoreElement = document.getElementById('scoreElement'); // Access element
  if (scoreElement) {
    scoreElement.textContent = scoreVar; // Update score display
  } else {
    console.error('Element with ID "scoreElement" not found.'); // Error handling
  }
}
*/

let scoreVar = 0;

// Load the score from local storage when the page loads
window.onload = function() {
    const savedScore = localStorage.getItem('score');
    if (savedScore !== null) {
        scoreVar = parseInt(savedScore); // Parse the saved score
    }
    updateScoreDisplay(); // Update the display with the loaded score
};

function bananaClick() {
    scoreVar += 1; // Increment score
    localStorage.setItem('score', scoreVar); // Save the updated score to local storage
    updateScoreDisplay(); // Update the score display
}

function updateScoreDisplay() {
    const scoreElement = document.getElementById('scoreElement'); // Access element
    if (scoreElement) {
        scoreElement.textContent = scoreVar; // Update score display
    } else {
        console.error('Element with ID "scoreElement" not found.'); // Error handling
    }
}