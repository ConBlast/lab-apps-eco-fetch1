let button;

function setup() {
    frameRate(60);
    canvas = createCanvas(windowWidth, windowHeight);
    canvas.style('z-index', '-1');
    canvas.style('position', 'fixed');
    canvas.style('top', '0');
    canvas.style('right', '0');

    button = createButton('Click to random dog image');
    button.position(800, 500);
    button.mousePressed(showDog);
}

function draw() {
    background(0);
    newCursor();
    
}

async function getRandomDogImage(){
            let url ="https://dog.ceo/api/breeds/image/random";
            try{
                let res = await fetch(url);
                return await res.json();
            }
            catch(error){
                console.log(error);
            }
        }
        async function showDog(){
            let dogs = await getRandomDogImage();
            var dog =[];
            dog = new Image();
            dog.src=dogs.message;
            dog.width="620";
            dog.height="320";
            var images = document.getElementsByTagName('img');
        
            var l=images.length;
            if(l>3)
            {
                for(var p=0;p<l;p++)
                {
                    images[0].parentNode.removeChild(images[0]);
                }
            }
            
            document.body.appendChild(dog);
        }