const soundFiles = {
  bass: "sounds/bass.wav",
  snare: "sounds/snare.wav",
};

function playSound(name) {
  const src = soundFiles[name];
  if (!src) return;
  const audio = new Audio(src);
  audio.play().catch(err => console.warn(err));
}

function animatePad(pad) {
  if (!pad) return;
  pad.classList.add("active");
  setTimeout(() => pad.classList.remove("active"), 100);
}

document.querySelectorAll(".pad").forEach(pad => {
  pad.addEventListener("click", () => {
    playSound(pad.dataset.sound);
    animatePad(pad);
  });
});

window.addEventListener("keydown", e => {
  const key = e.key.toLowerCase();
  if (key === "b") {
    playSound("bass");
    animatePad(document.querySelector('.pad-bass'));
  } else if (key === "s") {
    playSound("snare");
    animatePad(document.querySelector('.pad-snare'));
  }
});
