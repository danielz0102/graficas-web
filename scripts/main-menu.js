const VOLUME_ON_ICON = "assets/volume-on.svg";
const VOLUME_OFF_ICON = "assets/volume-off.svg";
const volume = document.querySelector(".sound-btn");

volume.addEventListener("click", () => {
  const icon = volume.querySelector("img");

  if (icon.getAttribute("src") === VOLUME_ON_ICON) {
    icon.setAttribute("src", VOLUME_OFF_ICON);
    return;
  }

  icon.setAttribute("src", VOLUME_ON_ICON);
});
