window.SBExtensions = {
  "StarPhysics": [
    "[Star gravity](ca://s?q=Explain_Star_gravity)",
    "[Star temperature](ca://s?q=Explain_Star_temperature)"
  ],
  "SpaceSounds": [
    "[Play whoosh](ca://s?q=Explain_Play_whoosh)",
    "[Play boom](ca://s?q=Explain_Play_boom)"
  ]
};

// Render extension list
const extList = document.getElementById("extList");

Object.keys(SBExtensions).forEach(name => {
  const div = document.createElement("div");
  div.className = "extension";

  div.innerHTML = `
    <h3>${name}</h3>
    <button>Install</button>
  `;

  div.querySelector("button").addEventListener("click", () => {
    SBExtensions[name].forEach(block => {
      SBBlocks.push(block);
    });
    alert(name + " installed!");
  });

  extList.appendChild(div);
});

// Button from editor
document.getElementById("extensionsBtn").addEventListener("click", () => {
  window.location.href = "extensions.html";
});