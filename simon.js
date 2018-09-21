var gameArray = [];
let colorsArray = ["green", "red", "yellow", "blue"];
var playerArray = [];
var count = 0;

$("#startButton").click(function () {
    $("#counter").text("Score: " + count);
    $("#status").text("Watch Closely...");
    createMoves(gameArray);
});

function createMoves(array) {
    array.push(colorsArray[(Math.floor(Math.random() * colorsArray.length))]);
    if (gameArray[count] == gameArray[count - 1]) {
        gameArray.pop()
        createMoves(gameArray);
    }
    displayMoves(gameArray);
    console.log(gameArray);
}

function displayMoves(array) {
    for (let i = 0; i < array.length; i++) {
        lightUp(array[i]);
        setTimeout(function () {
            console.log("preparing to activate light")
        }, 250)
    }
    setTimeout(function () {
        playerTurn();
    }, 500);
}

function lightUp(color) {
    if (color == "green") {
        $("#green").addClass("active");
        setTimeout(function () {
            $("#green").removeClass("active");
        }, 500);
    } else if (color == "red") {
        $("#red").addClass("active");
        setTimeout(function () {
            $("#red").removeClass("active");
        }, 300);
    } else if (color == "yellow") {
        $("#yellow").addClass("active");
        setTimeout(function () {
            $("#yellow").removeClass("active");
        }, 300);
    } else if (color == "blue") {
        $("#blue").addClass("active");
        setTimeout(function () {
            $("#blue").removeClass("active");
        }, 300);
    }
}

function playerTurn() {
    playerArray = [];
    $("#status").text("Now it's your turn!");
    $("#green").click(function () {
        playerArray.push("green");
        console.log("pushed green to player array");
        if (playerArray.length === gameArray.length) {
            checkMoves(playerArray, gameArray);
        }
    });
    $("#red").click(function () {
        playerArray.push("red");
        console.log("pushed red to player array");
        if (playerArray.length === gameArray.length) {
            checkMoves(playerArray, gameArray);
        }
    });
    $("#yellow").click(function () {
        playerArray.push("yellow");
        console.log("pushed yellow to player array");
        if (playerArray.length === gameArray.length) {
            checkMoves(playerArray, gameArray);
        }
    });
    $("#blue").click(function () {
        playerArray.push("blue");
        console.log("pushed blue to player array");
        if (playerArray.length === gameArray.length) {
            checkMoves(playerArray, gameArray);
        }
    });
}


function checkMoves(array1, array2) {
    $("#status").text("Checking your sequence...");
    console.log("preparing to check moves...");
    console.log(playerArray);
    console.log(gameArray);
    var i = 0;
    var checkCount = 0;
    while (i < gameArray.length) {
        if (array1[i] !== array2[i]) {
            $("#status").text("Oh no!  Better luck next time!");
            endGame();
            break;
        } else {
            i++;
            checkCount++;
            continue;
            if (checkCount === gameArray.length) {
                $("#status").text("Great Job!  Get ready for the next round!");
                setTimeout(function() {
                    count++;
                    $("#counter").text("Score: " + count);
                    console.log("Success!  score updated");
                    console.log("re-creating moves array");
                },1000);
            }
        }
    }
    createMoves(gameArray)
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







