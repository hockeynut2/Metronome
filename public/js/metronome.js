function setSelected(value){
  $('#dropdown').dropdown('set selected', value);
}

var interval = 0;
var bpm = 0

var sound = document.getElementById("tomtom");

function toggleSidebar() {
    $('.ui.sidebar')
        .sidebar('toggle')
    ;
}

function metronome() {
    clearInterval(interval);
    bpm = $('.metronome-input').val();
    interval = setInterval(function() {
        // Play sound bpm times per minute
        beep();
    }, 60000/bpm);
}

function stop() {
    clearInterval(interval);
}

function beep() {
  sound.pause()
  sound.currentTime = 0
  sound.play();
}

function changeSound(type) {
  sound = document.getElementById(type);
  setSelected(type);
}
