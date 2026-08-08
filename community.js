console.log("🌍 SunBlocks Community Loaded.");

// Back button
document.getElementById("backBtn").addEventListener("click", () => {
  window.location.href = "index.html";
});

// Load community projects
const grid = document.getElementById("communityGrid");
const projects = JSON.parse(localStorage.getItem("sunblocksCommunity") || "[]");

projects.forEach((proj, index) => {
  const card = document.createElement("div");
  card.className = "card";

  card.innerHTML = `
    <img class="thumbnail" src="${proj.thumbnail || 'defaultthumb.png'}">
    <h3>${proj.name}</h3>
    <p>By ${proj.author}</p>
    <button data-id="${index}">Open</button>
  `;

  card.querySelector("button").addEventListener("click", () => {
    window.location.href = `projectview.html?id=${index}`;
  });

  grid.appendChild(card);
});