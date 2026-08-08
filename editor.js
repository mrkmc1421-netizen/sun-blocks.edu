const blockArea = document.getElementById("blocks");

SBBlocks.forEach(name => {
  const div = document.createElement("div");
  div.className = "block";
  div.innerHTML = name;

  div.draggable = true;
  div.addEventListener("dragstart", e => {
    e.dataTransfer.setData("text/plain", name);
  });

  blockArea.appendChild(div);
});

// Workspace drop
const dropZone = document.getElementById("dropZone");

dropZone.addEventListener("dragover", e => e.preventDefault());

dropZone.addEventListener("drop", e => {
  const name = e.dataTransfer.getData("text/plain");
  const div = document.createElement("div");
  div.className = "block";
  div.innerHTML = name;
  dropZone.appendChild(div);
});