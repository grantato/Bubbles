var bubbles = [];
var edge=false;
var popSound;
var music;
var button;

//** sound will not run on local machine
function preload() {
    popSound=loadSound('Sounds/bubble_pop.mp3');
    music=loadSound('Sounds/Music-01.mp3');
} 

function setup() {
    createCanvas(1200,600);
    button=createButton("Play");
    button.mousePressed(togglePlaying);
    for (var i=0; i<120; i++) {
        bubbles[i]=new Bubble();
    }
}

function togglePlaying(){
    if (!music.isPlaying()){
        music.play();
        music.setVolume(0.05);
        button.html("Pause");
    } else {
        music.pause();
        button.html("Play");
    }
}

function draw() {
    background(0);
    var q=bubbles.length;
    print("total bubbles: ",q);
    print(bubbles[0]);
    for (var i=0; i<bubbles.length; i++) {
        bubbles[i].show();
        bubbles[i].move();
        if (bubbles[i].plop(edge)){
            bubbles.splice(i,1);
            print("'plop' bubble number",i);
            popSound.playMode('sustain');
            popSound.play();
         }
      }      
     
}