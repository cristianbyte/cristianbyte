// caret:
const input = document.getElementById('input');
const mirror = document.getElementById('mirror');
const caret = document.getElementById('caret');

function updateCaret() {
  const value = input.value;
  const caretPos = input.selectionStart;

  mirror.textContent = value.slice(0, caretPos);

  const span = document.createElement('span');
  span.textContent = '\u200B'; // invisible
  mirror.appendChild(span);

  const rect = span.getBoundingClientRect();
  const inputRect = input.getBoundingClientRect();

  caret.style.left = (rect.left - inputRect.left) + 'px';
  caret.style.top = (rect.top - inputRect.top ) + 'px';
}

input.addEventListener('input', updateCaret);
input.addEventListener('click', updateCaret);
input.addEventListener('keyup', updateCaret);
input.addEventListener('keydown', updateCaret);

updateCaret();

let blinkTimeout;

function stopCaretBlink() {
  caret.style.animation = 'none';
  clearTimeout(blinkTimeout);

  blinkTimeout = setTimeout(() => {
    caret.style.animation = 'blink 1s step-start infinite';
  }, 500);
}

input.addEventListener('keydown', stopCaretBlink);
input.addEventListener('click', stopCaretBlink);
input.addEventListener('input', stopCaretBlink);

//
