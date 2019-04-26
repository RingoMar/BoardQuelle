// LEWD
var lewds = [
  "ZOEY'S-P", "THE-NOODS", "PIANO", "ZAQSIGH", "KERFUFFLES", "CLEANING-THE-AMBO", "BACKSIDE", 
  "ZAQ-PARKING-AMBO", "CAN-I-FIT", "THAT-69", "ZAQGASM", "MY-NIBS", "CRUSH-PUSS", "2-AT-A-TIME", "WHEEEEW"
]
var l;
for (l = 0; l < lewds.length; l++) {
  var setd = lewds[l]
  var lewdsls = document.getElementById(lewds[l]);
  $(lewdsls).addClass('lewd');

}

function lewd() {
  $("#board button").css("display", "inline-flex");
  $("#board button").not(".lewd").css("display", "none");
}
// LEWD

// fun
var funl = [
  "SNORT", "THE-DERP-KNIGHT", "SNEEZE", "BELELELELE-NO!", "THE-NOODS", "ZAQWIZ", "HAYES-HELICOPTER",
   "HEY-JERRY", "WHAT-STRUTTIN-LIKES", "SELFIE", "ZAQWOOKIE", "ZAQFITE", "ZAQUACKLE", "ZAQFISH", 
   "TURNIN-THE-TURNIPS", "Hazer", "HAYRPES", "HASING", "RA..ZAQUELLE", "SUH-DUDE", "ZAQUELLE'S-LAND",
   "HUUUUU", "ZAQHEHEHEHE", "ZAQDOLPHIN"
]

var f;
for (f = 0; f < funl.length; f++) {
  var funset = funl[f]
  var funs = document.getElementById(funset);
  $(funs).addClass('fun');
};

function fun() {
  $("#board button").css("display", "inline-flex");
  $("#board button").not(".fun").css("display", "none");
}
// fun


// Songs
var songel = ["BABYSHARK", "UHHHHHGHHH-(Oy-remix)", "CANDY-SHOP"];
var i;
for (i = 0; i < songel.length; i++) {
  var seta = songel[i]
  var songsel = document.getElementById(seta);
  $(songsel).addClass('song');

}

function song() {
  $("#board button").css("display", "inline-flex");
  $("#board button").not(".song").css("display", "none");
}
// Songs

// spam -able
var sdpamable = [
  "SNEEZE", "ZAQYES", "CLEANING-THE-AMBO", "ZAQUACKLE", "HAYRPES",
   "ZAQSHORT", "THAT-69", "ZAQGASM", "ZAQHEHEHEHE", "THE-DERP-KNIGHT"
]

var spamable;
for (spamable = 0; spamable < sdpamable.length; spamable++) {
  var findspam = sdpamable[spamable]
  var setspam = document.getElementById(findspam);
  $(setspam).addClass('spamc');
}

function spam() {
  $("#board button").css("display", "inline-flex");
  $("#board button").not(".spamc").css("display", "none");
}
// spam -able

// new 
var newsounds = []

var nn;
for (nn = 0; nn < 5; nn++) {
  var nsob = Object.keys(sounds).reverse()[nn]
  newsounds.push(nsob.replace(/\s+/g, '-'));
}

for (nn = 0; nn < 5; nn++) {
  var newem = newsounds[nn]
  var newoba = document.getElementById(newem);
  $(newoba).addClass('news');
}

function NEWC() {
  $("#board button").css("display", "inline-flex");
  $("#board button").not(".news").css("display", "none");
}

// new 


function speed2() {
  for (let spd of Object.values(audios)) {
    var currate = Math.round(spd.playbackRate);
    if (2 > currate) {
      spd.playbackRate = 2;
    } else if (spd.playbackRate == 0.5) {
      spdl.playbackRate = 1;
    }
    else {
      factor = 1
      spd.playbackRate = 1;
    }
  }
}

function speedh() {
  for (let spdl of Object.values(audios)) {
    if (spdl.playbackRate == 1.0) {
      spdl.playbackRate = .5;
    } else if (spdl.playbackRate == 2) {
      spdl.playbackRate = 1;
    } else {
      spdl.playbackRate = 1;
    }
  }
}

function loopa() {
  for (let spdl of Object.values(audios)) {
    if (spdl.loop == false) {
      spdl.loop = true; 
    } else {
      spdl.loop = false; 
    }
  }
}

/* ########## REST ALL FILTERS ############# */

function reset_f() {
  for (let ref of Object.values(audios)) {
    ref.loop = false;
    ref.playbackRate = 1;
    }
  $("#board button").css("display", "inline-flex");
}
/* ########## REST ALL FILTERS ############# */