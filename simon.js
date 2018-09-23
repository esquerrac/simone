var playerArray = [];
var gameArray = [];
var count = 0;
var colorsArray = ["green", "red", "yellow", "blue"];
$("#counter").text("Score : "+ count);



$("#startButton").click(function () {
    $("#status").html("Are you ready?");
    console.log("Starting game");
    createMoves();
});

function createMoves() {
    gameArray.push(colorsArray[Math.floor(Math.random() * 4)]);
    console.log("gameArray created");
    showMoves();
}
function showMoves() {
    var i = 0;
    var display = setInterval(function () {
        console.log("sending data to light function");
        lightUp(gameArray[i]);
        i++;
        if (i > gameArray.length) {
            clearInterval(display);
        }
    }, 600);
    $("#status").html("Now it's your turn!");
}
function lightUp(string) {
    if (string === "green") {
        $("#green").addClass("active");
        console.log(string+"light on");
        setTimeout(function () {
            $("#green").removeClass("active");
        }, 250);
    } else if (string === "red") {
        $("#red").addClass("active");
        console.log(string+"light on");
        setTimeout(function () {
            $("#red").removeClass("active");
        }, 250);
    } else if (string === "yellow") {
        $("#yellow").addClass("active");
        console.log(string+"light on");
        setTimeout(function () {
            $("#yellow").removeClass("active");
        }, 250);
    } else if (string === "blue") {
        $("#blue").addClass("active");
        console.log(string+"light on");
        setTimeout(function () {
            $("#blue").removeClass("active");
        }, 250);
    }
}

$(".gamecell").click(function(){
    var button = $(this).attr("id");
    playerArray.push(button);
    console.log(button+"added to playerArray");
    if (playerArray.length === gameArray.length) {
        $("#status").html("Checking sequence...");
        checkMoves(playerArray);
    }
});


function checkMoves(array) {
    console.log("starting move check");
    var testArray = [];
    for (var i = 0; i < array.length; i++) {
        testArray.push(playerArray[i] == gameArray[i]);
    }
    if (testArray.includes(false)) {
        console.log("game over-move check complete");
        $("#status").text("Oh no!  Better luck next time!");
        endGame();
    } else {
        console.log("Start next round-move check complete");
        count++;
        $("#status").text("Great Job!  Get ready for the next round!");
        createMoves();
    }
}

var endGame = function () {
    count = 0;
    gameArray = [];
    playerArray = [];
    $("#counter").text("Score: " + count);
    setTimeout(function () {
        $("#status").text("Press Start to play again!");
    }, 500);
};








