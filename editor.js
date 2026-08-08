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
document.getElementById("uploadBtn").addEventListener("click", () => {
  const input = document.createElement("input");
  input.type = "file";
  input.accept = ".sunblocks";

  input.onchange = e => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onload = () => {
      const data = JSON.parse(reader.result);
      loadProject(data);
      alert("Project uploaded!");
    };

    reader.readAsText(file);
  };

  input.click();
});

function loadProject(data) {
  dropZone.innerHTML = "";
  data.blocks.forEach(b => {
    const div = document.createElement("div");
    div.className = "block";
    div.innerHTML = b;
    dropZone.appendChild(div);
  });
}
document.getElementById("publishBtn").addEventListener("click", () => {
  const blocks = [...dropZone.querySelectorAll(".block")].map(b => b.innerHTML);

  const name = prompt("Project name:");
  const author = prompt("Your name:");

  const thumbnail = generateThumbnail();

  const project = {
    name,
    author,
    blocks,
    thumbnail,
    likes: 0,
    comments: [],
    created: Date.now(),
    featured: false,
    inReview: false
  };

  const projects = JSON.parse(localStorage.getItem("sunblocksCommunity") || "[]");
  projects.push(project);
  localStorage.setItem("sunblocksCommunity", JSON.stringify(projects));

  alert("Project published!");
});
function generateThumbnail() {
  const canvas = document.createElement("canvas");
  canvas.width = 300;
  canvas.height = 200;
  const ctx = canvas.getContext("2d");

  ctx.fillStyle = "#ffd86b";
  ctx.fillRect(0, 0, 300, 200);

  ctx.fillStyle = "#333";
  ctx.font = "20px Comic Sans MS";
  ctx.fillText("SunBlocks Project", 40, 100);

  return canvas.toDataURL();
}