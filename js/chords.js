// All chords available to the user
var availableChords = [
  'Am',
  'C',
  'D',
  'Em',
  'G'
];

var tempAvailableChords = [
  {chordName: '', chordCategory: '', selected: false}
];


// A list populated by the user which includes all chords they want to include
var knownChords = [];

//temporarily setting knownChords to all available chords until user selection implemented
knownChords = availableChords;
