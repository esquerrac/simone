// var playerArray = [];
// var gameArray = [];
// var count = 0;
// var colorsArray = ["green", "red", "yellow", "blue"];
// $("#counter").text("Score : "+ count);
//
//
//
// $("#startButton").click(function () {
//     $("#status").html("Are you ready?");
//     console.log("Starting game");
//     createMoves();
// });
//
// function createMoves() {
//     gameArray.push(colorsArray[Math.floor(Math.random() * 4)]);
//     console.log("gameArray created");
//     showMoves();
// }
// function showMoves() {
//     var i = 0;
//     var display = setInterval(function () {
//         console.log("sending data to light function");
//         lightUp(gameArray[i]);
//         i++;
//         if (i > gameArray.length) {
//             clearInterval(display);
//         }
//     }, 600);
//     $("#status").html("Now it's your turn!");
// }
// function lightUp(string) {
//     if (string === "green") {
//         $("#green").addClass("active");
//         console.log(string+"light on");
//         setTimeout(function () {
//             $("#green").removeClass("active");
//         }, 250);
//     } else if (string === "red") {
//         $("#red").addClass("active");
//         console.log(string+"light on");
//         setTimeout(function () {
//             $("#red").removeClass("active");
//         }, 250);
//     } else if (string === "yellow") {
//         $("#yellow").addClass("active");
//         console.log(string+"light on");
//         setTimeout(function () {
//             $("#yellow").removeClass("active");
//         }, 250);
//     } else if (string === "blue") {
//         $("#blue").addClass("active");
//         console.log(string+"light on");
//         setTimeout(function () {
//             $("#blue").removeClass("active");
//         }, 250);
//     }
// }
//
// $(".gamecell").click(function(){
//     var button = $(this).attr("id");
//     playerArray.push(button);
//     console.log(button+"added to playerArray");
//     if (playerArray.length === gameArray.length) {
//         $("#status").html("Checking sequence...");
//         checkMoves(playerArray);
//     }
// });
//
//
// function checkMoves(array) {
//     console.log("starting move check");
//     var testArray = [];
//     for (var i = 0; i < array.length; i++) {
//         testArray.push(playerArray[i] == gameArray[i]);
//     }
//     if (testArray.includes(false)) {
//         console.log("game over-move check complete");
//         $("#status").text("Oh no!  Better luck next time!");
//         endGame();
//     } else {
//         console.log("Start next round-move check complete");
//         count++;
//         $("#status").text("Great Job!  Get ready for the next round!");
//         createMoves();
//     }
// }
//
// var endGame = function () {
//     count = 0;
//     gameArray = [];
//     playerArray = [];
//     $("#counter").text("Score: " + count);
//     setTimeout(function () {
//         $("#status").text("Press Start to play again!");
//     }, 500);
// };
//
var userPattern = [];
var pattern = [];
var roundCount = 0;
var colors = ['','#green', '#red', '#blue', '#yellow'];
// $('#green').toggleClass('greenOff');
// $('#red').toggleClass('');
// $('#yellow').toggleClass('bloff');
// $('#blue').toggleClass('broff');

function generatePattern() {
    var randomNumber = Math.ceil(Math.random() * 4);
    pattern.push(colors[randomNumber]);
    showMoves();
}

function showMoves() {
    console.log(pattern);
    $('#status').html("Watch Closely...");
    var i = 0;
    var moves = setInterval(function () {
        lightUp(pattern[i]);
        i++;
        if (i > pattern.length) {
            clearInterval(moves);
        }
    }, 600);
    userPattern = []
}

function lightUp(pattern) {
    if (pattern == '#green') {
        $(pattern).removeClass('greenOff');
        $(pattern).addClass('greenOn');
        setTimeout(function () {
            $(pattern).removeClass('greenOn');
            $(pattern).addClass('greenOff');
        }, 300);
    } else if (pattern == '#red') {
        $(pattern).removeClass('redOff');
        $(pattern).addClass('redOn');
        setTimeout(function () {
            $(pattern).removeClass('redOn');
            $(pattern).addClass('redOff')
        }, 300);
    } else if (pattern == '#yellow') {
        $(pattern).removeClass('yellowOff');
        $(pattern).addClass('yellowOn');
        setTimeout(function () {
            $(pattern).removeClass('yellowOn');
            $(pattern).addClass('yellowOff');
        }, 300);
    } else if (pattern == '#blue') {
        $(pattern).removeClass('blueOff');
        $(pattern).addClass('blueOn');
        setTimeout(function () {
            $(pattern).removeClass('blueOn');
            $(pattern).addClass('blueOff');
        }, 300);
    }
    $('#status').html("Your turn!");
}

$(".gamecell").click(function () {
    var formattedId = "#" + this.id;
    lightUp(formattedId);
    userPattern.push(formattedId);
    if (userPattern.length == pattern.length) {
        checkMoves(userPattern);
    }
});

function checkMoves(array) {
    console.log("starting move check");
    var testArray = [];
    for (var i = 0; i < array.length; i++) {
        testArray.push(userPattern[i] == pattern[i]);
    }
    if (testArray.includes(false)) {
        console.log("game over-move check complete");
        $("#status").text("Oh no!  Better luck next time!");
        resetGame();
    } else {
        console.log("Start next round-move check complete");
        roundCount++;
        $("#counter").html("Score : "+roundCount);
        $("#status").text("Great Job!  Get ready for the next round!");
        generatePattern();
    }
}

function resetGame() {
    pattern = [];
    userPattern = [];
    roundCount = 0;
    $("#counter").html("Score : "+roundCount);
}

$('#startButton').click(function () {
    $('#status').html("");
    resetGame();
    generatePattern();
});
