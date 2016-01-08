var startMetronome = function(duration, counter) {
  var currentCounter = counter;
  if(duration > 0) {
    setTimeout(function(){
      if(duration % 4 === 0) {
        $('#chord-display p').html(nextChord());
      }
      $('#metronome-display p').html(currentCounter);
      if(currentCounter < 2) {
        startMetronome(duration-1, 4);
      } else {
        startMetronome(duration-1, currentCounter-1);
      }
    }, 1000);
  }
};
