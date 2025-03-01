const VOLUME_ON_ICON = "assets/volume-on.svg";
const VOLUME_OFF_ICON = "assets/volume-off.svg";
const volume = document.querySelector(".sound-btn");
const audio = document.querySelector("audio");

volume.addEventListener("click", () => {
  const icon = volume.querySelector("img");

  if (audio.paused) audio.play();
  audio.muted = !audio.muted;

  if (icon.getAttribute("src") === VOLUME_ON_ICON) {
    icon.setAttribute("src", VOLUME_OFF_ICON);
    return;
  }

  icon.setAttribute("src", VOLUME_ON_ICON);
});
