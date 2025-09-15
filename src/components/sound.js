if (localStorage.getItem("sound-enabled") === null) {
  localStorage.setItem("sound-enabled", "true");
}

window.toggleSound = () => {
  const current = localStorage.getItem("sound-enabled") === "true";
  localStorage.setItem("sound-enabled", String(!current));
};

const sounds = {
  select: new Audio('./assets/audio/sci-fi-click.mp3'),
};

window.playSound = (soundName, options = {}) => {
  const {
    loop = false,
    volume = 1.0,
  } = options;

  const soundEnabled = localStorage.getItem("sound-enabled") === "true";
  if (!soundEnabled) return;

  const sound = sounds[soundName];
  if (sound) {
    sound.currentTime = 0;
    sound.loop = loop;
    sound.volume = Math.min(Math.max(volume, 0), 1);
    sound.play().catch(err => console.error('Error playing sound:', err));
  }
};

window.stopSound = (soundName) => {
  const sound = sounds[soundName];
  if (sound) {
    sound.pause();
    sound.currentTime = 0;
  }
};
