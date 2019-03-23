// def file - https://instaud.io/_/3srP.mp3
const sounds = {
  "UHHHHHGHHH":"https://instaud.io/_/3srI.mp3",
  "UHHHHHGHHH (Oy remix)":"https://instaud.io/_/3srK.mp3",
  "SNORT":"https://instaud.io/_/3srL.mp3",
  "THE DERP KNIGHT":"https://instaud.io/_/3srM.mp3",
  "SNEEZE":"https://instaud.io/_/3srN.mp3",
  "BELELELELE NO!":"https://instaud.io/_/3srF.mp3",
  "CANDY SHOP":"https://instaud.io/_/3srO.mp3",
  "MY CHIN":"https://instaud.io/_/3srH.mp3",
  "ZaqYes": "https://instaud.io/_/3srP.mp3",
}

let audios = {};
for (let [title, url] of Object.entries(sounds)) {
    audios[title] = new Audio(url);
}

let board = document.getElementById("board");
for (let title of Object.keys(audios)) {
  let button = document.createElement("button");
  button.textContent = title;
  button.dataset["audio"] = title;
  board.appendChild(button);
}

board.addEventListener("click", function(event) {
  let audio = audios[event.target.dataset["audio"]];
  if (audio) {
    for (let audio of Object.values(audios)) {
      audio.pause();
      audio.currentTime = 0;
    }
    audio.play();
  }
});

function stopAudio(){
  let stop = audios[event.target.dataset["audio"]];
  for (let stop of Object.values(audios)) {
      stop.pause();
      stop.currentTime = 0;
    }
};
