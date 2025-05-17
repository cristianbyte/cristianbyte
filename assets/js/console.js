function getFormattedTime() {
  const now = new Date();
  const hours = String(now.getHours()).padStart(2, "0");
  const minutes = String(now.getMinutes()).padStart(2, "0");
  const seconds = String(now.getSeconds()).padStart(2, "0");
  return `[${hours}:${minutes}:${seconds}]`;
}

async function getLocationData() {
  const cacheKey = "location-data";
  const cacheTimeKey = "location-data-timestamp";
  const oneHour = 1000 * 60 * 60;

  const cachedData = localStorage.getItem(cacheKey);
  const cachedTime = localStorage.getItem(cacheTimeKey);

  const now = Date.now();

  if (cachedData && cachedTime && now - cachedTime < oneHour) {
    return JSON.parse(cachedData);
  }

  try {
    const response = await fetch("https://ipapi.co/json/");
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const data = await response.json();

    localStorage.setItem(cacheKey, JSON.stringify(data));
    localStorage.setItem(cacheTimeKey, now.toString());

    return data;
  } catch (error) {
    console.error("Error fetching location data:", error.message);
    if (cachedData) return JSON.parse(cachedData);
  }
}

const consoleDiv = document.getElementById("console-log");
const locationDiv = document.getElementById("location");

locationDiv.addEventListener("click", () => {
  window.playSound("select");
  console.log("Location data clicked");
  toggleSound();
});

setTimeout(()=>{
  //clean animations
  const console = document.getElementById("console");
  console.style.display = "none";
}, 4000);

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
  "Terminal ready. Awaiting input...",
];

const min = 10;
const max = 200;

function getRandomDelay() {
  return min + Math.floor(Math.random() * (max - min + 1));
}

function printLogs(logs, container, prefix = "", index = 0) {
  if (index >= logs.length) return;

  const p = document.createElement("p");
  p.textContent = prefix ? `${prefix} : ${logs[index]}` : logs[index];
  container.appendChild(p);
  container.scrollTop = container.scrollHeight;

  setTimeout(() => printLogs(logs, container, prefix, index + 1), getRandomDelay());
}

async function displayLocationData() {
  const data = await getLocationData();
  if (!data) return;

  locationDiv.textContent = "";

  const entries = Object.entries(data).map(([key, value]) => `${key}: ${value}`);
  printLogs(entries, locationDiv);
}

// Ejecutar
printLogs(logs, consoleDiv, "coder.red");
displayLocationData();
