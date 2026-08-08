console.log("Settings Loaded");

document.getElementById("backBtn").addEventListener("click", () => {
  window.location.href = "index.html";
});

// Lock account
let locked = JSON.parse(localStorage.getItem("sunblocksLocked") || "false");

function updateLockStatus() {
  document.getElementById("lockStatus").textContent =
    locked ? "Account is locked." : "Account is unlocked.";
}

updateLockStatus();

document.getElementById("lockBtn").addEventListener("click", () => {
  locked = !locked;
  localStorage.setItem("sunblocksLocked", JSON.stringify(locked));
  updateLockStatus();
});

// About Extensions
document.getElementById("extInfoBtn").addEventListener("click", () => {
  alert("Extensions add new blocks, sounds, physics, and tools to SunBlocks.");
});

// TOS
document.getElementById("tosBtn").addEventListener("click", () => {
  window.location.href = "tos.html";
});