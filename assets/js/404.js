let countdown = 10;
const timer = document.getElementById("countdownTimer");

const countdownInterval = setInterval(() => {
  countdown--;
  timer.textContent = countdown;

  if (countdown <= 0) {
    clearInterval(countdownInterval);
    window.location.href = "/";
  }
}, 1000);

function createMatrixChar() {
  const chars = "01";
  const char = document.createElement("div");
  char.className = "matrix-char";
  char.textContent = chars[Math.floor(Math.random() * chars.length)];
  char.style.left = Math.random() * 100 + "%";
  char.style.animationDuration = Math.random() * 3 + 2 + "s";
  char.style.fontSize = Math.random() * 10 + 10 + "px";

  document.getElementById("matrixBg").appendChild(char);

  setTimeout(() => {
    char.remove();
  }, 5000);
}

setInterval(createMatrixChar, 10);

document.addEventListener("DOMContentLoaded", () => {
  const commands = document.querySelectorAll(".command");
  commands.forEach((cmd, index) => {
    const text = cmd.textContent;
    cmd.textContent = "";

    setTimeout(() => {
      let i = 0;
      const typeInterval = setInterval(() => {
        cmd.textContent += text[i];
        i++;
        if (i >= text.length) {
          clearInterval(typeInterval);
        }
      }, 50);
    }, index * 1000);
  });
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Enter" || e.key === " ") {
    window.location.href = "/";
  }
});
