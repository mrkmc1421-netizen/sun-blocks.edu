console.log("Project View Loaded");

const id = new URLSearchParams(window.location.search).get("id");
const projects = JSON.parse(localStorage.getItem("sunblocksCommunity") || "[]");
const project = projects[id];

// Likes
if (!project.likes) project.likes = 0;

document.getElementById("likeCount").textContent = project.likes + " likes";

document.getElementById("likeBtn").addEventListener("click", () => {
  project.likes++;
  document.getElementById("likeCount").textContent = project.likes + " likes";
  localStorage.setItem("sunblocksCommunity", JSON.stringify(projects));
});

// Comments
if (!project.comments) project.comments = [];

const commentsList = document.getElementById("commentsList");

function renderComments() {
  commentsList.innerHTML = "";
  project.comments.forEach(c => {
    const div = document.createElement("div");
    div.className = "comment";
    div.innerHTML = renderEmotes(c);
    commentsList.appendChild(div);
  });
}

renderComments();

// Post comment
document.getElementById("postCommentBtn").addEventListener("click", () => {
  const text = document.getElementById("commentInput").value.trim();
  if (text.length === 0) return;

  project.comments.push(text);
  localStorage.setItem("sunblocksCommunity", JSON.stringify(projects));

  document.getElementById("commentInput").value = "";
  renderComments();
});

// Emote Picker
const picker = document.getElementById("emotePicker");
SBEmotes.forEach(emote => {
  const img = document.createElement("img");
  img.src = emote.src;
  img.className = "emote-icon";
  img.addEventListener("click", () => {
    const input = document.getElementById("commentInput");
    input.value += " " + emote.code + " ";
  });
  picker.appendChild(img);
});