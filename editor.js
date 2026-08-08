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