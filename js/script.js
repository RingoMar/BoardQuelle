window.onload = bttvemotes
const sounds = {
  'BABYSHARK': 'https://instaud.io/_/3uH5.mp3',
  'UHHHHHGHHH': 'https://instaud.io/_/3srI.mp3',
  'UHHHHHGHHH (Oy remix)': 'https://instaud.io/_/3srK.mp3',
  'SNORT': 'https://instaud.io/_/3srL.mp3',
  'THE DERP KNIGHT': 'https://instaud.io/_/3srM.mp3',
  'SNEEZE': 'https://instaud.io/_/3srN.mp3',
  'BELELELELE NO!': 'https://instaud.io/_/3uH8.mp3',
  'CANDY SHOP': 'https://instaud.io/_/3uHc.mp3',
  'MY CHIN': 'https://instaud.io/_/3srH.mp3',
  'ZAQYES': 'https://instaud.io/_/3srP.mp3',
  "ZOEY'S P": 'https://instaud.io/_/3x3S.mp3',
  'GOOD SHIT HAYES': 'https://instaud.io/_/3sC7.mp3',
  'THE NOODS': 'https://instaud.io/_/3x3U.mp3',
  'ZAQWIZ': 'https://instaud.io/_/3sVa.mp3',
  'ZAQ LIGHTSABER': 'https://instaud.io/_/3uHj.mp3',
  'SQUAD 3': 'https://instaud.io/_/3sVs.mp3',
  'PIANO': 'https://instaud.io/_/3sVt.mp3',
  'ZAQLEWD': 'https://instaud.io/_/3sVw.mp3',
  'HAYES HELICOPTER': 'https://instaud.io/_/3uGY.mp3',
  'HEY JERRY': 'https://instaud.io/_/3uHl.mp3',
  'KERFUFFLES': 'https://instaud.io/_/3t1w.mp3',
  'CLEANING THE AMBO': 'https://instaud.io/_/3uHo.mp3',
  'TIER 3': 'https://instaud.io/_/3t1y.mp3',
  'WHAT STRUTTIN LIKES': 'https://instaud.io/_/3t1z.mp3',
  'BACKSIDE': 'https://instaud.io/_/3t42.mp3',
  'SELFIE': 'https://instaud.io/_/3t43.mp3',
  'ZAQ PARKING AMBO': 'https://instaud.io/_/3t44.mp3',
  'ZAQWOOKIE': 'https://instaud.io/_/3t45.mp3',
  'ZAQNOM': 'https://instaud.io/_/3t5a.mp3',
  'ZAQFITE': 'https://instaud.io/_/3t5q.mp3',
  'ZAQUACKLE': 'https://instaud.io/_/3t6u.mp3',
  'ZAQFISH': 'https://instaud.io/_/3tay.mp3',
  'TURNIN THE TURNIPS': 'https://instaud.io/_/3taV.mp3',
  "YOU'RE SQUAD 3": 'https://instaud.io/_/3uH3.mp3',
  'Hazer': 'https://instaud.io/_/3tqM.mp3',
  'A ZAQUELLE LULLABY': 'https://instaud.io/_/3uHq.mp3',
  'ZAQ HA HA': 'https://instaud.io/_/3u0B.mp3',
  'HAYRPES': 'https://instaud.io/_/3u0N.mp3',
  'ZAQGOAL': 'https://instaud.io/_/3u15.mp3',
  'HASING': 'https://instaud.io/_/3ubr.mp3',
  'ZAQCOKE': 'https://instaud.io/_/3uEK.mp3',
  'RA..ZAQUELLE': 'https://instaud.io/_/3uHQ.mp3',
  'ZAQSHORT': 'https://instaud.io/_/3vvN.mp3',
  'CAN I FIT': 'https://instaud.io/_/3vvO.mp3',
  'FUCK SQUAD 2': 'https://instaud.io/_/3vHS.mp3',
  'SUH DUDE': 'https://instaud.io/_/3wCi.mp3',
  'LAUGHING HICCUPS': 'https://instaud.io/_/3x3u.mp3',
  'ONE OF US': 'https://instaud.io/_/3x3v.mp3',
  // 'THAT 69': 'https://instaud.io/_/3x3w.mp3',
  'THAT 69': 'https://instaud.io/_/3x3x.mp3',
  'ZAQGASM': 'https://instaud.io/_/3x3z.mp3',
  'ZAQHMM': 'https://instaud.io/_/3x3C.mp3',
  "ZAQUELLE'S LAND": 'https://instaud.io/_/3x3E.mp3',
  "ZAQSTEALING": 'https://instaud.io/_/3x3I.mp3',
  "IS IT SQUAD 3?": 'https://instaud.io/_/3x3W.mp3',
  "HUUUUU": 'https://instaud.io/_/3xnU.mp3',
  "ZAQHEHEHEHE": 'https://instaud.io/_/3xxN.mp3',
  "FeelsUsedMan": 'https://instaud.io/_/3xxy.mp3',
  "GDI MARK": 'https://instaud.io/_/3ykV.mp3',
  "ZAQDOLPHIN": 'https://instaud.io/_/3ykY.mp3',
  "FeelsBadMan": 'https://instaud.io/_/3yo2.mp3',
}

let audios = {}
for (let [title, url] of Object.entries(sounds)) {
  audios[title] = new Audio(url)
}

let board = document.getElementById('board')
for (let title of Object.keys(audios)) {
  let button = document.createElement('button')
  button.textContent = title
  button.setAttribute('id', title.replace(/\s+/g, '-'))
  button.dataset['audio'] = title
  button.onclick = function (id) {
    let audio = audios[event.target.dataset['audio']]
    adur = Math.round(audio.duration)
    var date = new Date(null)
    date.setSeconds(adur)
    var timeString = date.toISOString().substr(11, 8)
    document.getElementById('time').innerHTML = timeString
    document.getElementById('lastplay').innerHTML = title
  // document.getElementById("lastplay").innerHTML = id.target.id
  }
  board.appendChild(button)
}

board.addEventListener('click', function (event) {
  let audio = audios[event.target.dataset['audio']]
  if (audio) {
    for (let audio of Object.values(audios)) {
      audio.pause()
      audio.currentTime = 0
    }
    audio.play()
  }
})

function stopAudio () {
  let stop = audios[event.target.dataset['audio']]
  document.getElementById('time').innerHTML = '00:00:00'
  document.getElementById('lastplay').innerHTML = '------'
  for (let stop of Object.values(audios)) {
    stop.pause()
    stop.currentTime = 0
  }
}

var bbtv = new Array('https://cdn.betterttv.net/emote/5b1c23eaae1b166cf54e203e/3x', 'https://cdn.betterttv.net/emote/5a5ed26e6bcd9a06f4fc7de6/3x', 'https://cdn.betterttv.net/emote/5b47a5af0f10311f6e9cf8e3/3x', 'https://cdn.betterttv.net/emote/5b47a5c90f10311f6e9cf8e4/3x', 'https://cdn.betterttv.net/emote/5b915f874cc67c7ad8196855/3x', 'https://cdn.betterttv.net/emote/5b9ab54fe87c0e590d167aba/3x', 'https://cdn.betterttv.net/emote/5ba302062192445767f61a0a/3x', 'https://cdn.betterttv.net/emote/5bcf5c2c4d02f55ed86a7361/3x', 'https://cdn.betterttv.net/emote/5c1dc8c0f7fd1c1c345d1e7f/3x', 'https://cdn.betterttv.net/emote/5c63a3161cbe12203117ac22/3x', 'https://cdn.betterttv.net/emote/5992549c6782b936bdeafe1b/3x', 'https://cdn.betterttv.net/emote/5a5ed3456bcd9a06f4fc7dee/3x', 'https://cdn.betterttv.net/emote/5bcf5c024d02f55ed86a735d/3x', 'https://cdn.discordapp.com/emojis/454150085077499915.gif?v=1', 'https://cdn.discordapp.com/emojis/453335514154795009.png?v=1')

function bttvemotes () {
  var randomNum = Math.floor(Math.random() * bbtv.length)
  document.getElementById('gifmeme').src = bbtv[randomNum]
}

function SetVolume (val) {
  let volume = audios[event.target.dataset['audio']]
  for (let volume of Object.values(audios)) {
    volume.volume = val / 100
  }
}

function objectLength () {
  var result = 0
  for (var prop in sounds) {
    if (sounds.hasOwnProperty(prop)) {
      result++
    }
  }
  return result
}

$(document).ready(function () {
  $('#soundfind').on('keyup', function () {
    var value = $(this).val().toLowerCase()
    $('#board *').filter(function () {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
    })
  })
})

document.getElementById('scount').innerHTML = objectLength()
var img = $('<img>').attr('src', 'https://static-cdn.jtvnw.net/emoticons/v1/1766312/1.0').appendTo($('#CAN-I-FIT'))
var img = $('<img>').attr('src', 'https://static-cdn.jtvnw.net/emoticons/v1/1766312/1.0').appendTo($('#CLEANING-THE-AMBO'))
var img = $('<img>').attr('src', 'https://static-cdn.jtvnw.net/emoticons/v1/1766312/1.0').appendTo($('#ZAQGASM'))
var img = $('<img>').attr('src', 'https://static-cdn.jtvnw.net/emoticons/v1/1766312/1.0').appendTo($('#THAT-69'))
var img = $('<img>').attr('src', 'https://static-cdn.jtvnw.net/emoticons/v1/1766284/1.0').appendTo($('#GDI-MARK'))
var img = $('<img>').attr('src', 'https://cdn.frankerfacez.com/8a/52/8a52b199947f5e003191e6d4ddffc49b.png').appendTo($('#GOOD-SHIT-HAYES'))
