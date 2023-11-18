console.log('Monster Energy Bar: Script injected');

function injectMonsterEnergyBar() {
  console.log('Monster Energy Bar: starting injectingMonsterEnergyBar');

  // Ensure the document is ready before attempting to append the progressBar
  if (document.readyState === 'complete' || document.readyState === 'interactive') {
    addProgressBar();
  } else {
    document.addEventListener('DOMContentLoaded', addProgressBar);
  }
}

function addProgressBar() {
  const progressBar = document.createElement("div");
  progressBar.id = "monster-energy-bar";
  progressBar.style.position = "fixed";
  progressBar.style.top = "-30px";
  progressBar.style.left = "100px";
  progressBar.style.width = "100px";
  progressBar.style.height = "100px";
  progressBar.style.zIndex = "9999";

  // Array of image filenames
  const imageFilenames = ['monster1.png', 'mango-loco.png', 'zero.png', 'pipeline-punch.png'];
  
  // Randomly choose an image from the array
  const randomImageFilename = imageFilenames[Math.floor(Math.random() * imageFilenames.length)];
  console.log('Randomly selected image URL:', randomImageFilename);
  progressBar.style.background = `url('${chrome.runtime.getURL(`/assets/${randomImageFilename}`)}') repeat-x`;
  progressBar.style.backgroundSize = "contain"; // Ensure the entire image is visible
  progressBar.style.transform = "rotate(90deg)";
  document.body.appendChild(progressBar);

  let startTime = performance.now(); // Record the start time
  let position = -100; // Initial position outside the visible area
  const interval = setInterval(function () {
    const elapsedTime = performance.now() - startTime; // Calculate elapsed time
    const speed = window.innerWidth / elapsedTime; // Adjust speed dynamically

    if (position >= window.innerWidth) {
      clearInterval(interval);
      progressBar.remove();
      console.log('Monster Energy Bar: Progress bar completed and removed');
    } else {
      position += speed; // Adjust the speed dynamically
      progressBar.style.left = position + "px";
    }
  }, 5); // Decreased interval for smoother movement
}

injectMonsterEnergyBar();

