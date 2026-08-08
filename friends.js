// SunBlocks Friends System 

// Load or create friends list
window.SBFriends = JSON.parse(localStorage.getItem("sunblocksFriends") || "[]");

window.saveFriends = function() {
  localStorage.setItem("sunblocksFriends", JSON.stringify(SBFriends));
};

// Add friend
window.addFriend = function(name, avatar) {
  SBFriends.push({
    name,
    avatar,
    online: Math.random() > 0.5 // random online/offline for now
  });
  saveFriends();
};

// Remove friend
window.removeFriend = function(index) {
  SBFriends.splice(index, 1);
  saveFriends();
};