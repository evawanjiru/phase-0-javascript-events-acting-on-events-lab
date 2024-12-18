// Your code here
const dodger = document.getElementById("dodger");

// Function to move the dodger to the left
function moveDodgerLeft() {
  const leftNumbers = dodger.style.left.replace("px", "");
  const left = parseInt(leftNumbers, 10); 

  if (left > 0) { 
    dodger.style.left = `${left - 1}px`; 
  }
}

// Function to move the dodger to the right
function moveDodgerRight() {
    const leftNumbers = dodger.style.left.replace("px", ""); 
    const left = parseInt(leftNumbers, 10); 
    if (left < 360) { 
      dodger.style.left = `${left + 1}px`; 
    }
  }