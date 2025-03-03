const pauseBtn = document.querySelector("#pauseBtn");
const playIcon = `
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    <path fill="#fff" d="M8,5.14V19.14L19,12.14L8,5.14Z" />
  </svg>
`;
const pauseIcon = `
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    <path fill="#fff" d="M14,19H18V5H14M6,19H10V5H6V19Z" />
  </svg>
`;
const preview = document.querySelector("#preview");
let gamePaused = false;
const pauseScreen = document.getElementById("pauseScreen");
const settingsBtn = document.querySelector(".link--settings"); 
const settingsScreen = document.getElementById("settingsScreen");
const closeSettings = document.getElementById("closeSettings");

/* pauseBtn.addEventListener("click", () => {
  gamePaused = !gamePaused;
  pauseBtn.innerHTML = gamePaused ? playIcon : pauseIcon;
  preview[gamePaused ? "pause" : "play"]();
}); */

function pauseGame(){
  gamePaused = !gamePaused;
  pauseBtn.innerHTML = gamePaused ? playIcon : pauseIcon;
  preview[gamePaused ? "pause" : "play"]();
  pauseScreen.style.display = "flex"; 
};

function resumeGame(){
  gamePaused = !gamePaused;
  pauseBtn.innerHTML = gamePaused ? playIcon : pauseIcon;
  preview[gamePaused ? "pause" : "play"]();
  pauseScreen.style.display = "none"; 
};

settingsBtn.addEventListener("click", () => {
  settingsScreen.style.display = "flex";
  gamePaused = !gamePaused;
  preview[gamePaused ? "pause" : "play"]();
});

closeSettings.addEventListener("click", () => {
  settingsScreen.style.display = "none";
  gamePaused = !gamePaused;
  preview[gamePaused ? "pause" : "play"]();
});
