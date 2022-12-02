var polySynth;

function setup() {
    var canvas = createCanvas(500, 500);
    canvas.parent("p5container");

    polySynth = new p5.PolySynth();
}

function playSynthC1(){
    userStartAudio();

    var dur = 1.5;
    var time = 0;
    var vel = 0.1;
    
    polySynth.play('C1', vel, time += 1/3, dur);
}

function playSynthD1(){
    userStartAudio();

    var dur = 1.5;
    var time = 0;
    var vel = 0.1;
    
    polySynth.play('D1', vel, 0, dur);
}

function playSynthE1(){
    userStartAudio();

    var dur = 1.5;
    var time = 0;
    var vel = 0.1;
    
    polySynth.play('E1', vel, 0, dur);
}

function playSynthF1(){
    userStartAudio();

    var dur = 1.5;
    var time = 0;
    var vel = 0.1;
    
    polySynth.play('F1', vel, 0, dur);

}

function keyPressed() {
    if (keyCode === LEFT_ARROW){
        playSynthC1();
        fill(255, 255, 0);
    } else if(keyCode === RIGHT_ARROW){
        playSynthF1();
        fill(255, 0, 255);
    } else if(keyCode === UP_ARROW) {
        playSynthD1();
        fill(0, 255, 255);
    } else if(keyCode === DOWN_ARROW) {
        playSynthE1();
        fill(0, 0, 0);
    }
}


function draw() {
    background(220);
    ellipse(width/2, height/2, 200);
}