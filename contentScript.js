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
  progressBar.style.top = "100px";
  progressBar.style.left = "100px";
  progressBar.style.width = "100px";
  progressBar.style.height = "100px";
  progressBar.style.background = `url('${chrome.runtime.getURL('assets/monster1.png')}') repeat-x`;
  document.body.appendChild(progressBar);

  let width = 0;
  const interval = setInterval(function () {
    if (width >= 100) {
      clearInterval(interval);
      progressBar.remove();
      console.log('Monster Energy Bar: Progress bar completed and removed');
    } else {
      width++;
      progressBar.style.width = width + "%";
    }
  }, 50);
}

injectMonsterEnergyBar();
