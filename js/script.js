window.onload = bttvemotes
const sounds = {
  'BABYSHARK': 'https://cdn.discordapp.com/attachments/567195386423279629/567196119306731520/BabyShark.mp3',
  'UHHHHHGHHH': 'https://cdn.discordapp.com/attachments/567195386423279629/567196671231000576/uhhhh.mp3',
  'UHHHHHGHHH (Oy remix)': 'https://cdn.discordapp.com/attachments/567195386423279629/567196660455702529/Uggghh_Oy_remix.mp3',
  'SNORT': 'https://cdn.discordapp.com/attachments/567195386423279629/567196556051349505/snort.mp3',
  'THE DERP KNIGHT': 'https://cdn.discordapp.com/attachments/567195386423279629/567196636367814656/The_Derp_Knight.mp3',
  'SNEEZE': 'https://cdn.discordapp.com/attachments/567195386423279629/567196419975413780/sneeze.mp3',
  'BELELELELE NO!': 'https://cdn.discordapp.com/attachments/567195386423279629/567196133093539840/BELELELE_NO.mp3',
  'CANDY SHOP': 'https://cdn.discordapp.com/attachments/567195386423279629/567196149354725415/candy_shop.mp3',
  'MY CHIN': 'https://cdn.discordapp.com/attachments/567195386423279629/567196335309324290/nut_chin.mp3',
  'ZAQYES': 'https://cdn.discordapp.com/attachments/567195386423279629/567197072508452865/zaqYess.mp3',
  "ZOEY'S P": 'https://cdn.discordapp.com/attachments/567195386423279629/567197104540221441/ZoeysP.mp3',
  'GOOD SHIT HAYES': 'https://cdn.discordapp.com/attachments/567195386423279629/567196223560351794/goodshit.mp3',
  'THE NOODS': 'https://cdn.discordapp.com/attachments/567195386423279629/567196211983941643/freshnoods.mp3',
  'ZAQWIZ': 'https://cdn.discordapp.com/attachments/567195386423279629/567197032813690900/zaqwiz.mp3',
  'ZAQ LIGHTSABER': 'https://cdn.discordapp.com/attachments/567195386423279629/567196304577658881/lightsaber_sounds.mp3',
  'SQUAD 3': 'https://cdn.discordapp.com/attachments/567195386423279629/567196602784284672/Squad_3.mp3',
  'PIANO': 'https://cdn.discordapp.com/attachments/567195386423279629/567196403210780693/paino_player.mp3',
  'ZAQSIGH': 'https://cdn.discordapp.com/attachments/567195386423279629/567196815192096779/zaqlewd.mp3',
  'HAYES HELICOPTER': 'https://cdn.discordapp.com/attachments/567195386423279629/567196236009046017/HayesHelicopter.mp3',
  'HEY JERRY': 'https://cdn.discordapp.com/attachments/567195386423279629/567196265147006988/HEY_JERRY.mp3',
  'KERFUFFLES': 'https://cdn.discordapp.com/attachments/567195386423279629/567196284000141317/Kerfuffles.mp3',
  'CLEANING THE AMBO': 'https://cdn.discordapp.com/attachments/567195386423279629/567196150755754014/Cleaning_the_Ambo.mp3',
  'TIER 3': 'https://cdn.discordapp.com/attachments/567195386423279629/567196645943672841/Tier_3_Sub_Song.mp3'  ,
  'WHAT STRUTTIN LIKES': 'https://cdn.discordapp.com/attachments/567195386423279629/567196343714447371/Of_course_Struttin_likes_BBC.mp3',
  'BACKSIDE': 'https://cdn.discordapp.com/attachments/567195386423279629/567196122422968321/backside.mp3',
  'SELFIE': 'https://cdn.discordapp.com/attachments/567195386423279629/567196411586674689/selfie.mp3',
  'ZAQ PARKING AMBO': 'https://cdn.discordapp.com/attachments/567195386423279629/567196707537027073/zaq_doing_zaq_things.mp3',
  'ZAQWOOKIE': 'https://cdn.discordapp.com/attachments/567195386423279629/567197049141985330/zaqWookie.mp3',
  'ZAQNOM': 'https://cdn.discordapp.com/attachments/567195386423279629/567196323837902850/Nom.mp3',
  'ZAQFITE': 'https://cdn.discordapp.com/attachments/567195386423279629/567196678843531264/wanna_fite.mp3',
  'ZAQUACKLE': 'https://cdn.discordapp.com/attachments/567195386423279629/567196165381029888/duck.mp3',
  'ZAQFISH': 'https://cdn.discordapp.com/attachments/567195386423279629/567196729926090791/zaqfish.mp3',
  'TURNIN THE TURNIPS': 'https://cdn.discordapp.com/attachments/567195386423279629/567196655015690251/Turnin_the_turnips.mp3',
  "YOU'RE SQUAD 3": 'https://cdn.discordapp.com/attachments/567195386423279629/567196691590283275/Youre_Squad_3.mp3',
  'Hazer': 'https://cdn.discordapp.com/attachments/567195386423279629/567196254711447552/Hazer.mp3',
  'A ZAQUELLE LULLABY': 'https://cdn.discordapp.com/attachments/567195386423279629/567197003390648320/zaquelle-lullaby.mp3',
  'ZAQ HA HA': 'https://cdn.discordapp.com/attachments/567195386423279629/567196755687505920/zaqHaha.mp3',
  'HAYRPES': 'https://cdn.discordapp.com/attachments/567195386423279629/567196244993376260/Hayrpes.mp3',
  'ZAQGOAL': 'https://cdn.discordapp.com/attachments/567195386423279629/567196747693293568/zaqgoal.mp3',
  'HASING': 'https://cdn.discordapp.com/attachments/567195386423279629/567196230682411008/hasing.mp3',
  'ZAQCOKE': 'https://cdn.discordapp.com/attachments/567195386423279629/567196161493172295/coke_lab.mp3',
  'RA..ZAQUELLE': 'https://cdn.discordapp.com/attachments/567195386423279629/567196111446736906/almsot_said_my_own_name_wrong.mp3',
  'ZAQSHORT': 'https://cdn.discordapp.com/attachments/567195386423279629/567196938659692554/zaqshort.mp3',
  'CAN I FIT': 'https://cdn.discordapp.com/attachments/567195386423279629/567196141456850955/can_it_fit.mp3',
  'FUCK SQUAD 2': 'https://cdn.discordapp.com/attachments/567195386423279629/567196170925899776/F_Sqaud_2.mp3',
  'SUH DUDE': 'https://cdn.discordapp.com/attachments/567195386423279629/567196597205729292/suh_dude.mp3',
  'LAUGHING HICCUPS': 'https://cdn.discordapp.com/attachments/567195386423279629/567196302442627082/laughing_hiccups.mp3',
  'ONE OF US': 'https://cdn.discordapp.com/attachments/567195386423279629/567196367819243530/ONE_OF_US.mp3',
  'THAT 69': 'https://cdn.discordapp.com/attachments/567195386423279629/567196627022905380/that_69.mp3',
  'ZAQGASM': 'https://cdn.discordapp.com/attachments/567195386423279629/567196737534558208/Zaqgasm.mp3',
  'ZAQHMM': 'https://cdn.discordapp.com/attachments/567195386423279629/567196783521038351/zaqHmm.mp3',
  "ZAQUELLE'S LAND": 'https://cdn.discordapp.com/attachments/567195386423279629/567196916085948436/zaqs_land.mp3',
  "ZAQSTEALING": 'https://cdn.discordapp.com/attachments/567195386423279629/567196948948451329/Zaqstealing.mp3',
  "IS IT SQUAD 3?": 'https://cdn.discordapp.com/attachments/567195386423279629/567196276718829578/is_it_Squad_3.mp3',
  "HUUUUU": 'https://cdn.discordapp.com/attachments/567195386423279629/567196266585391104/huuuu.mp3',
  "ZAQHEHEHEHE": 'https://cdn.discordapp.com/attachments/567195386423279629/567196845269581825/zaqlul.mp3',
  "FeelsUsedMan": 'https://cdn.discordapp.com/attachments/567195386423279629/567196205642153987/FeelsUsedMan.mp3',
  "GDI MARK": 'https://cdn.discordapp.com/attachments/567195386423279629/567196218996817920/GDI_MARK.mp3',
  "ZAQDOLPHIN": 'https://cdn.discordapp.com/attachments/567195386423279629/567196710577897474/zaqDolphin.mp3',
  "FeelsBadMan": 'https://cdn.discordapp.com/attachments/567195386423279629/567196199774584842/FeelsBadMan.mp3',
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
var img = $('<img>').attr('src', 'https://cdn.frankerfacez.com/f5/d5/f5d54c6db19d5db92f940744e8c86bba.PNG').appendTo($('#GOOD-SHIT-HAYES'))
