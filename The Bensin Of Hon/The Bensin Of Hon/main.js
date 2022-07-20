let timer = 0;

let img1 = document.getElementById('img1')
let images = ['llo1.jpg']
setInterval(function(){
    let random = Math.floor(Math.random() * 1);
    img1.src = images[random];
}, 10000)

let img2 = document.getElementById('img2')
let images2 = ['llo2.jpg']
setInterval(function(){
    let random = Math.floor(Math.random() * 1);
    img2.src = images2[random];
}, 20000)

let img3 = document.getElementById('img3')
let images3 = ['llo3.jpg']
setInterval(function(){
    let random = Math.floor(Math.random() * 1);
    img3.src = images3[random];
}, 30000)

let img4 = document.getElementById('img4')
let images4 = ['llo2.jpg']
setInterval(function(){
    let random = Math.floor(Math.random() * 1);
    img4.src = images4[random];
}, 40000)

function jumpscare() {
    var jumpscare = document.getElementById("jumpscare");
    jumpscare.style.visibility="visible";
    var audio = document.getElementById("scream");
      audio.play();
     setTimeout(function(){
        jumpscare.style.visibility="hidden";
     },3000)
     
}

let Plank = document.getElementById('Plank')
let images5 = ['R.gif']
setInterval(function(){
    let random = Math.floor(Math.random() * 1);
    Plank.src = images5[random];
    var audio = document.getElementById("scream");
      audio.play();
}, 40100)


setTimeout(function(){
    $foo.style.visibility="visible";
    var $foo = $('#foo');

grow = function (size) {
    if (size < 50) {
        console.log(size);
        $foo.css('width', size + '%');
        $foo.css('height', size + '%');
        size++;
        setTimeout(grow, 10, size);
    }
}



grow(0);
},40100)

let gameOver = document.getElementById('gameover')
setTimeout(function(){
    gameOver.style.visibility="visible";
    setTimeout(function(){
        var fullGame = document.getElementById("allContent")
        var startGame = document.getElementById("startGame")
        gameOver.style.visibility="hidden";
        fullGame.style.visibility="hidden";
        startGame.style.visibility="visible"
    },5000)
},40100)

let Itsme = document.getElementById('Plank')
let images6 = ['spring.gif']
function startGame() {
    var Itsmescare = document.getElementById("jumpscare2")
    var startGame = document.getElementById("startGame");
    var fullGame = document.getElementById("allContent")
    let random = Math.floor(Math.random() * 1);
    Itsme.src = images6[random];
    startGame.style.visibility="hidden"
    fullGame.style.visibility="visible"
    Itsmescare.style.visibility="hidden"
}
