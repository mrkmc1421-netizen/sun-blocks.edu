console.log("Friends Page Loaded");

document.getElementById("backBtn").addEventListener("click", () => {
  window.location.href = "index.html";
});

// Add friend
document.getElementById("addFriendBtn").addEventListener("click", () => {
  const name = document.getElementById("friendName").value.trim();
  const avatar = document.getElementById("friendAvatar").value.trim();

  if (name.length === 0) return;

  addFriend(name, avatar || "defaultavatar.png");

  document.getElementById("friendName").value = "";
  document.getElementById("friendAvatar").value = "";

  renderFriends();
});

// Render friends
const grid = document.getElementById("friendsGrid");

function renderFriends() {
  grid.innerHTML = "";

  SBFriends.forEach((f, index) => {
    const card = document.createElement("div");
    card.className = "friendCard";

    card.innerHTML = `
      <img class="friendAvatar" src="${f.avatar}">
      <h3>${f.name}</h3>
      <p class="${f.online ? 'statusOnline' : 'statusOffline'}">
        ${f.online ? "Online" : "Offline"}
      </p>
      <button data-id="${index}">Remove</button>
    `;

    card.querySelector("button").addEventListener("click", () => {
      removeFriend(index);
      renderFriends();
    });

    grid.appendChild(card);
  });
}

renderFriends();