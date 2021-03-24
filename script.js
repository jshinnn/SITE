// Global Constants
const clueHoldTime = 1000; // how long to hold each clue's light/sound
const cluePauseTime = 333; // how long to pause in between clues
const nextClueWaitTime = 1000; // how long to wait before playing sequence

// Global Variables
var pattern = [];
var progress = 0;
var gamePlaying = false;
var tonePlaying = false;
var volume = 0.5; // must be between 0.0 and 1.0
var guessCounter = 0;
var mistakes;

function generateRandomPattern(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function startGame() {
  // initialize game variables
  progress = 0;
  gamePlaying = true;
  mistakes = 0;
  for (var i = 0; i<2; i++) {
    pattern.push(generateRandomPattern(1,6));
  }
  // just for my own sake
  console.log(pattern);
  
  // swap the Start and Stop buttons
  document.getElementById("startBtn").classList.add("hidden");
  document.getElementById("stopBtn").classList.remove("hidden");
  playClueSequence();
}

function stopGame() {
  // halt game activity
  gamePlaying = false;
  
  // swap the Start and Stop buttons once more
  document.getElementById("startBtn").classList.remove("hidden");
  document.getElementById("stopBtn").classList.add("hidden");
}

// Sound Synthesis Functions
const freqMap = {
  1: 270.3,
  2: 335.5,
  3: 398.3,
  4: 504.5,
  5: 708.2,
  6: 999.9
}
function playTone(btn,len){ 
  o.frequency.value = freqMap[btn]
  g.gain.setTargetAtTime(volume, context.currentTime + 0.05,0.025)
  tonePlaying = true
  setTimeout(function(){
    stopTone()
  },len)
}
function startTone(btn){
  if(!tonePlaying){
    o.frequency.value = freqMap[btn]
    g.gain.setTargetAtTime(volume, context.currentTime + 0.05,0.025)
    tonePlaying = true
  }
}

function stopTone(){
    g.gain.setTargetAtTime(0, context.currentTime + 0.05,0.025)
    tonePlaying = false
  
}

//Page Initialization
// Init Sound Synthesizer
var context = new AudioContext()
var o = context.createOscillator()
var g = context.createGain()
g.connect(context.destination)
g.gain.setValueAtTime(0, context.currentTime)
o.connect(g)
o.start(0)

function lightButton(btn){
  document.getElementById("button"+btn).classList.add("lit")
}

function clearButton(btn){
  document.getElementById("button"+btn).classList.remove("lit")
}

function playSingleClue(btn){
  guessCounter = 0;
  if(gamePlaying){
    lightButton(btn);
    playTone(btn,clueHoldTime);
    setTimeout(clearButton,clueHoldTime,btn);
  }
}

function playClueSequence() {
  let delay = nextClueWaitTime; // set delay to initial wait time
  for (let i=0;i<=progress;i++) { // for each clue that is revealed so far, progress=keeps track of what turn
    console.log("play single clue: " + pattern[i] + " in " + delay + "ms");
    setTimeout(playSingleClue,delay,pattern[i]) // set a timeout to play that clue
    delay += clueHoldTime
    delay += cluePauseTime;
  }
}

function loseGame(){
  stopGame();
  alert("Game Over. You lost.");
}

function winGame(){
  stopGame();
  alert("Celebrate new times, come on! (You won :D)");
}

function guess(btn){
  console.log("user guessed: " + btn);
  if(!gamePlaying){
    return;
  }
  
  if (pattern[guessCounter] == btn) { // is the guess correct?
    if (guessCounter == progress) { // does user's guess match the number that we are currently indexed on?
      if (progress == pattern.length - 1) { // is this the last turn?
      winGame();
    } else {
        // correct pattern, add next segment
        progress += 1;
        playClueSequence();
      }
    } else {
        guessCounter += 1;
    }
  } else {
    mistakes += 1;
    if (mistakes < 3) {
      alert("You have " + (3-mistakes) + " guess(es) left. Try again!");
      playClueSequence();
    }
    if (mistakes == 3) {
      loseGame();
    }  
  }
}
