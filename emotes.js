// SunBlocks Emotes

window.SBEmotes = [
  { code: ":spookypumpkin:", src: "emotes/spookypumpkin.png" },
  { code: ":robot:", src: "emotes/robot.png" },
  { code: ":smile:", src: "emotes/smile.png" },
  { code: ":pringles:", src: "emotes/pringles.png" },
  { code: ":rat:", src: "emotes/rat.png" },
  { code: ":hellowave:", src: "emotes/hellowave.png" },
  { code: ":snailblue:", src: "emotes/snailblue.png" }
];

// Replace emote codes -> with images
window.renderEmotes = function(text) {
  let output = text;
  SBEmotes.forEach(emote => {
    output = output.replaceAll(
      emote.code,
      `<img class="emote-inline" src="${emote.src}">`
    );
  });
  return output;
};