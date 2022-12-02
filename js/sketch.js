var polySynth;

function setup() {
    var canvas = createCanvas(500, 500);
    canvas.parent("p5container");

    polySynth = new p5.PolySynth();
}

function playSynth(note){
    userStartAudio();

    var dur = 1.5;
    var time = 0;
    var vel = 0.1;
    
    polySynth.play(note, vel, time += 1/3, dur);
}



function keyTyped() {
    if (key === 'a') {
        playSynth('F2');
        fill(255, 255, 0);
    } else if (key === 's'){
        playSynth('G2');
        fill(255, 255, 0);
    } else if (key === 'd'){
        playSynth('A3');
        fill(255, 255, 0);
    } else if (key === 'f'){
        playSynth('B3');
        fill(255, 255, 0);
    } else if (key === 'g'){
        playSynth('C3');
        fill(255, 255, 0);
    } else if (key === 'h'){
        playSynth('D3');
        fill(0, 255, 255);
    } else if (key === 'j'){
        playSynth('E3');
        fill(0, 255, 255);
    } else if (key === 'k'){
        playSynth('F3');
        fill(0, 255, 255);
    } else if (key === 'l'){
        playSynth('G3');
        fill(0, 255, 255);
    }
}


function draw() {
    background(220);
    ellipse(width/2, height/2, 200);
}