let canvas;
let URL = 'https://randomuser.me/api/';
let user = null;

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
        .then(data => {user=data
                console.log(user.results)})

}

function draw() {
    background(0);
    newCursor();
    
    if(user != null){
    textSize(20);
    textWrap(WORD);
    text('Random User', 330, 300)
    text(user.results[0].name.title, 340, 350, 300)
    text(user.results[0].name.first, 340, 400, 300)
    text(user.results[0].name.last, 340, 450, 300)
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