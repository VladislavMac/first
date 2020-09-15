// connection

let cvs = document.querySelector('.canvas');
let ctx = cvs.getContext('2d');


// Vareable images

let bird                = new Image();
let pipeTop             = new Image();
let pipeBottom          = new Image();
let bgMain              = new Image();
let bgFooter            = new Image();


// Loading images

bird.src                = 'media/img/props/bird.png'; // Bird
pipeTop.src                = 'media/img/props/pipeUp.png'; // Up
pipeBottom.src                = 'media/img/props/pipeBottom.png'; // Down
bgMain.src                = 'media/img/main/bg.png'; // BackGround
bgFooter.src                = 'media/img/footer/fg.png'; // Footer

// when clicking on the button

document.addEventListener('keydown', moveUp);
document.addEventListener('touchstart', moveUp);
// document.addEventListener('keyup', moveDown);


// Options:

let indent          = 90 // 90 px отступ 

    // Position bird

    let PosX            = 10;  // x
    let PosY            = 180; // y
    let grav            = 1;   // gravitation

    // Create block

    let pipe = [];
    pipe[0] = {
        x : cvs.width,
        y : 0
    }


// Function

function moveUp(){
    PosY -= 25;
    bird.src                = 'media/img/props/bird.png'; // Bird
}

// function moveDown(){
//     bird.src                = 'media/img/props/bird.png'; // Bird
// }

// for BOOM

// function moveBOOM(){
//     bird.src                = 'media/img/props/birdBOOM.png'; // Bird

// }

function draw() {
    ctx.drawImage(bgMain, 0/*x*/, 0/*y*/) // Нарисован по центру

    for( let i = 0; i < pipe.length; i++ ) // Для рандомного спвавна
    {
        ctx.drawImage(pipeTop, pipe[i].x , pipe[i].y) // Прижат к верху
        ctx.drawImage(pipeBottom, pipe[i].x, pipe[i].y + pipeTop.height + indent) // Должно стоять по центру 100 высота pipeTop + indent - отступ
        
        pipe[i].x--;

        if(pipe[i].x === 115 ) {
            pipe.push({ 
                x : cvs.width,
                y : Math.floor(Math.random() * pipeTop.height) - pipeTop.height
            });
        }
    }

    ctx.drawImage(bgFooter, 0, cvs.height - bgFooter.height) // Прижат к низ
    ctx.drawImage(bird, PosX, PosY, /*100 - длина картинки, 30 - высота картинки*/) // Прижат к низ

    PosY += grav;
    requestAnimationFrame(draw);
}


// Use function

bgFooter.onload = draw; // При загрузке последнего элимента вызывать функцию draw