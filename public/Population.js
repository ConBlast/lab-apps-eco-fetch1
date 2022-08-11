let canvas;
let URL = 'https://datausa.io/api/data?drilldowns=Nation&measures=Population';
let usP = null;

function setup() {
    frameRate(60);
    canvas = createCanvas(windowWidth, windowHeight);
    canvas.style('z-index', '-1');
    canvas.style('position', 'fixed');
    canvas.style('top', '0');
    canvas.style('right', '0');

    console.log(fetch(URL).then(response => response.json()));

    fetch(URL)
        .then(response => response.json())
        .then(data => {usP=data
                console.log(usP.data[0].Population)})

}

function draw() {
    background(0);
    newCursor();
    
    if(usP != null){
    textSize(20);
    textWrap(WORD);
    text('US Population 2019', 300, 300)
    text(usP.data[0].Population, 340, 350, 300)
    text('US Population 2018', 550, 300)
    text(usP.data[1].Population, 600, 350, 300)
    }
}

function mouseClicked(){

}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}

function newCursor() {
    noStroke();
    fill(255);
    ellipse(pmouseX, pmouseY, 10, 10);
}