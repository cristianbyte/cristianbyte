function getFormattedTime() {
  const now = new Date();
  const hours = String(now.getHours()).padStart(2, "0");
  const minutes = String(now.getMinutes()).padStart(2, "0");
  const seconds = String(now.getSeconds()).padStart(2, "0");
  return `[${hours}:${minutes}:${seconds}]`;
}

const consoleDiv = document.getElementById("console");
const os = navigator.userAgentData.platform.toLowerCase();
const logs = [
  "[coder.red boot sequence initialized...]",
  "Loading config: /config/backend.json",
  "Fetching articles from database...",
  "Activating AI modules...",
  "Setting up user authentication...",
  "Connecting to external APIs...",
  "Loading assets from /assets/images...",
  "Initializing session variables...",
  "Language set: en",
  "Verifying server health...",
  "Cache cleared for performance...",
  "Preloading content for optimized user experience...",
  "Syncing user preferences...",
  "Applying security patches...",
  "Ready. Welcome to coder.red",
  "User logged in: [username]",
  "System update available. Version 2.1.3",
  "Checking for available updates in background...",
  "Error logs: none detected",
  "All systems operational.",
  "Preparing analytics data...",
  "Fetching latest blog posts...",
  "Connecting to payment gateway...",
  "Finalizing startup sequence...",
  "Diagnostics complete. No issues found.",
  "Terminal ready. Awaiting input..."
];

let i = 0;
const min = 10;
const max = 500;

function printNextLog() {
  if (i < logs.length) {
    const line = document.createElement("p");
    line.textContent = "coder.red" + ' : ' + logs[i];
    consoleDiv.appendChild(line);
    consoleDiv.scrollTop = consoleDiv.scrollHeight;
    i++;
    
    const randomDelay = min + Math.floor(Math.random() * (max - min + 1));
    
    setTimeout(printNextLog, randomDelay);
  }
}
printNextLog();
