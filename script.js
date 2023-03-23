function k(event) {    

    var key = event.which;

    if (key == 13) {
        if (runWorker == 0) {

            boxId = boxes();
            box1Id = boxes1();

            winboxId = winboxes();

            runWorker = setInterval(run, 100);
            runSound.play();

            backgroundWorker = setInterval(background, 20);

            scoreWorker = setInterval(updateScore, 100);

            boxWorker = setInterval(move, 50);
            box1Worker = setInterval(move1, 30);

            winboxWorker = setInterval(winmove, 100);

            

        }
    }

    if (key == 32) {

        if (jumpWorker == 0) {

            clearInterval(runWorker);
            runSound.pause();
            jumpSound.play();

            runWorker = -1;

            jumpWorker = setInterval(jump, 100);
            
            

        }
        
    
    }
}


var runSound = new Audio("run.mp3");
runSound.loop = true;

var jumpSound = new Audio("jump.mp3");

var runImage = 1;

var runWorker = 0;

function run() {

    runImage = runImage + 1;

    if (runImage == 9) {
        runImage = 1;
    }

    document.getElementById("boy").src = "Run (" + runImage + ").png";

}

var backgroundWorker = 0;

var x = 0;

function background() {

    x = x - 5;

    document.getElementById("b").style.backgroundPositionX = x + "px";
}

var jumpImage = 1;

var jumpWorker = 0;

var b = 350;

function jump() {

    if (jumpImage <= 6) {

        b = b - 30;

        document.getElementById("boy").style.marginTop = b + "px";
    }

    if (jumpImage >= 7) {

        b = b + 30;

        document.getElementById("boy").style.marginTop = b + "px";
    }

    jumpImage = jumpImage + 1;

    if (jumpImage == 13) {

        jumpImage = 1;

        clearInterval(jumpWorker);

        jumpWorker = 0;

        if (boxId == 0) {
            boxId = boxes();
        }
        if (box1Id == 0) {
            box1Id = boxes1();
        }

        if (winboxId == 0){
            winboxId = winboxes();
        }

        runWorker = setInterval(run, 100);
        runSound.play();

        if (backgroundWorker == 0) {
            backgroundWorker = setInterval(background, 20);
        }

        if (scoreWorker == 0) {
            scoreWorker = setInterval(updateScore, 100);
        }

        if (boxWorker == 0) {
            boxWorker = setInterval(move, 50);
        }
        if (box1Worker == 0) {
            box1Worker = setInterval(move1, 30);
        }
        if (winboxWorker == 0){
            winboxWorker = setInterval(winmove, 100);
        }

    }

    document.getElementById("boy").src = "Jump (" + jumpImage + ").png";
}

var scoreWorker = 0;

var score = 0;

function updateScore() {

    score = score + 5;

    document.getElementById("score1").innerHTML = score;
}

// enemy 1
var boxId = 0;

var boxMarginLeft = 300;

function boxes() {
    for (var a = 0; a < 10; a++) {
        var box = document.createElement("div");

        box.className = "box"; box.id = "d" + a;

        if (a <= 5) {
            boxMarginLeft = boxMarginLeft + 800;
        }

        if (a >= 6) {
            boxMarginLeft = boxMarginLeft + 500;
        }

        box.style.marginLeft = boxMarginLeft + "px";

        document.getElementById("b").appendChild(box);
    }
}

var boxWorker = 0;

function move() {
    for (var a = 0; 0 < 10; a++) {
        var x = getComputedStyle(document.getElementById("d" + a));

        var p = parseInt(x.marginLeft);

        p = p - 12;

        document.getElementById("d" + a).style.marginLeft = p + "px";

        //alert(p)2
        // 120   200 

        if (p >= 120 & p <= 200) {
            if (b > 315) {

                //alert("Aiyo Hodatama Maruna");

                clearInterval(winboxWorker);
                clearInterval(runWorker);
                runWorker = -1;
                runSound.pause();

                clearInterval(jumpWorker);
                jumpWorker = -1;
                jumpSound.pause();

                clearInterval(scoreWorker);

                clearInterval(backgroundWorker);

                clearInterval(boxWorker);

                deadWorker = setInterval(dead, 100);

                deadSound.play();
                clearInterval(box1Worker);
                                
            }
        }
    }
}

// enemy 2
var box1Id = 0;

var box1MarginLeft = 2200;

function boxes1() { 
    for (var a = 0; a < 5; a++) {
        var box = document.createElement("div");

        box.className = "box1"; box.id = "db" + a;

        if (a <= 2) {
            box1MarginLeft = box1MarginLeft + 1500;
        }
        if (a >= 3) {
            box1MarginLeft = box1MarginLeft + 900;
        }

        box.style.marginLeft = box1MarginLeft + "px";

        document.getElementById("b").appendChild(box);   
    }
}
    
var box1Worker = 0;
 
function move1() {
    for (var a = 0; 0 < 5; a++) {
        var x = getComputedStyle(document.getElementById("db" + a));

        var p = parseInt(x.marginLeft);

        p = p - 10;

        document.getElementById("db" + a).style.marginLeft = p + "px";

        //alert(p)2
        // 120   200

        if (p >= 120 & p <= 200) {
            if (b > 315) {

              

                clearInterval(winboxWorker);
                clearInterval(runWorker);
            
                runWorker = -1;
                runSound.pause();

                clearInterval(jumpWorker);
                jumpWorker = -1;
                jumpSound.pause();

                clearInterval(scoreWorker);

                clearInterval(backgroundWorker);

                clearInterval(box1Worker);
                clearInterval(boxWorker);

                deadWorker = setInterval(dead, 100);

                deadSound.play();
                clearInterval(boxWorker);
                                
            }
        }
    }
}


var deadSound = new Audio("dead.mp3");

var deadWorker = 0;

var deadImage = 1;

function dead() {

    deadImage = deadImage + 1;

    if (deadImage == 11) {
        deadImage = 10;
        document.getElementById("boy").style.marginTop = "350px"

        document.getElementById("end").style.visibility = "visible";
        document.getElementById("endscore").innerHTML = score;
    }

    document.getElementById("boy").src = "Dead (" + deadImage + ").png";

}

//make win game part

var winboxId = 0;

var winboxMarginLeft = 7000;

function winboxes() {   
    for (var a = 0; a < 1; a++) {
        var box = document.createElement("div");

        box.className = "winbox"; box.id = "c" + a;

        box.style.marginLeft = winboxMarginLeft + "px";

        document.getElementById("b").appendChild(box);
    }
}

var winboxWorker = 0;
 
function winmove() {
    for (var a = 0; 0 < 1; a++) {
        var x = getComputedStyle(document.getElementById("c" + a));

        var p = parseInt(x.marginLeft);

        p = p - 20;

        document.getElementById("c" + a).style.marginLeft = p + "px";

        //alert(p)2
        // 120   200 

        if (p >= 120 & p <= 200) {
            
                if(winWorker == 0){

    
                    clearInterval(jumpWorker);
                    jumpWorker = -1;
                    jumpSound.pause();
    
                    clearInterval(scoreWorker);
    
                    clearInterval(backgroundWorker);
                    clearInterval(box1Worker);
                    clearInterval(boxWorker);

                    winWorker = setInterval(winboy, 100);
            } 
        }
        if (p <= -1200){
            clearInterval(runWorker);
            runWorker = -1;
            runSound.pause();

            clearInterval(winWorker);
            clearInterval (winboxWorker);

            winSound.play();

            document.getElementById("boy").style.marginTop = "350px"

            document.getElementById("win").style.visibility = "visible";
            document.getElementById("winscore").innerHTML = score;

        }
    }
}



var winWorker = 0;

var winSound = new Audio("finish1.mp3"); 

function winboy() {

    var y = getComputedStyle(document.getElementById("boy"));
    var l = parseInt(y.marginLeft);
    l = l + 20;
    document.getElementById("boy").style.marginLeft = l + "px";

}

function r() {
    location.reload();
}