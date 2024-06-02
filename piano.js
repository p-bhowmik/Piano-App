let pianoKeys = document.querySelectorAll(".piano-keys .key");
let volumeControl = document.querySelector(".volume-range input");

let audio = new Audio("piano-mp3/a.mp3");
console.log(audio);

const playPiano = (key) => {
  audio.src = `piano-mp3/${key}.mp3`;
  audio.play();
};
const handleVolume = (e) => {
  audio.volume = e.target.value;
};

pianoKeys.forEach((key) => {
  key.addEventListener("click", () => {
    playPiano(key.dataset.key);
  });
  // console.log(key.dataset.key);
});

volumeControl.addEventListener("input", handleVolume);
