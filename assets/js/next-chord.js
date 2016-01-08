var randomChord = function() { return knownChords[Math.floor(Math.random() * knownChords.length)]; };

var nextChord = function() {
  return randomChord();
};
