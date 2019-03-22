$(document).ready(function () {
  $('body.no-javascript').removeClass('no-javascript')
})

var running = false
var player = "";
function startsPlaying (id) {
  if (running) {
	  player.pause()
	  player = "";
  }else {
    player = document.getElementById(id)
    running = true
  }
  console.log('started to play', id)
}
function stopAudio (id) {
  running = false
  console.log('Atempt to stop', player.id, 'from playing')
  player.pause()
  player = "";
  //   player.currentTime = 0
}
function AudioStopped (id) {
	running = false
	player = "";
	// player.currentTime = 0
}
