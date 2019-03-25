// def file - https://instaud.io/_/3sVs.mp3

window.onload = bttvemotes;
const sounds = {
  "UHHHHHGHHH":"https://instaud.io/_/3srI.mp3",
  "UHHHHHGHHH (Oy remix)":"https://instaud.io/_/3srK.mp3",
  "SNORT":"https://instaud.io/_/3srL.mp3",
  "THE DERP KNIGHT":"https://instaud.io/_/3srM.mp3",
  "SNEEZE":"https://instaud.io/_/3srN.mp3",
  "BELELELELE NO!":"https://instaud.io/_/3srF.mp3",
  "CANDY SHOP":"https://instaud.io/_/3srO.mp3",
  "MY CHIN":"https://instaud.io/_/3srH.mp3",
  "ZAQYES": "https://instaud.io/_/3srP.mp3",
  "ZOEY'S P": "https://instaud.io/_/3sC5.mp3",
  "GOOD SHIT HAYES": "https://instaud.io/_/3sC7.mp3",
  "THE NOODS": "https://instaud.io/_/3sCa.mp3",
  "ZAQLIGHTSABER": "https://instaud.io/_/3sUZ.mp3",
  "ZAQWIZ": "https://instaud.io/_/3sVa.mp3",
  "SQUAD 3": "https://instaud.io/_/3sVs.mp3",
  "PIANO": "https://instaud.io/_/3sVt.mp3",
  "zaqlewd": "https://instaud.io/_/3sVw.mp3",
  "HAYESHELICOPTER": "https://instaud.io/_/3sVu.mp3",
  "HEY JERRY": "https://instaud.io/_/3sVD.mp3",
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

var bbtv = new Array("https://cdn.betterttv.net/emote/5b1c23eaae1b166cf54e203e/2x","https://cdn.betterttv.net/emote/5a5ed26e6bcd9a06f4fc7de6/2x","https://cdn.betterttv.net/emote/5b47a5af0f10311f6e9cf8e3/2x", "https://cdn.betterttv.net/emote/5b47a5c90f10311f6e9cf8e4/2x", "https://cdn.betterttv.net/emote/5b915f874cc67c7ad8196855/2x","https://cdn.betterttv.net/emote/5b9ab54fe87c0e590d167aba/2x","https://cdn.betterttv.net/emote/5ba302062192445767f61a0a/2x","https://cdn.betterttv.net/emote/5bcf5c2c4d02f55ed86a7361/2x","https://cdn.betterttv.net/emote/5c1dc8c0f7fd1c1c345d1e7f/2x","https://cdn.betterttv.net/emote/5c63a3161cbe12203117ac22/2x","https://cdn.betterttv.net/emote/5992549c6782b936bdeafe1b/2x");

function bttvemotes() {
  var randomNum = Math.floor(Math.random() * bbtv.length);
  document.getElementById("gifmeme").src = bbtv[randomNum];
    }