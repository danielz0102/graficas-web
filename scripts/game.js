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

pauseBtn.addEventListener("click", () => {
  gamePaused = !gamePaused;
  pauseBtn.innerHTML = gamePaused ? playIcon : pauseIcon;
  preview[gamePaused ? "pause" : "play"]();
});
