var gameArray = [];
let colorsArray = ["green", "red", "yellow", "blue"];
var playerArray = [];
var count = 0;

$("#startButton").click(function () {
    $("#counter").text("Score: " + count);
    console.log("start button pressed");
    createMoves(gameArray);
});

function createMoves(array) {
    console.log("creating moves array...")
    $("#status").text("Watch Closely...");
    array.push(colorsArray[(Math.floor(Math.random() * colorsArray.length))]);
    if (gameArray[count] === gameArray[count - 1]) {
        gameArray.pop();
        console.log("preparing to activate light")
        createMoves(gameArray);
    }
    lightUp(gameArray);
    console.log(gameArray);
}

function lightUp(array) {
    var i = 0;
    while (i < array.length) {
        console.log("cycle " + i + " through light loop");
        if (array[i] === "green") {
            i++;
            $("#green").addClass("active");
            setTimeout(function () {
                console.log("waiting to deactivate light");
                $("#green").removeClass("active");
            }, 500);
        } else if (array[i] === "red") {
            i++;
            $("#red").addClass("active");
            setTimeout(function () {
                console.log("waiting to deactivate light");
                $("#red").removeClass("active");
            }, 500);
        } else if (array[i] === "yellow") {
            i++;
            $("#yellow").addClass("active");
            setTimeout(function () {
                console.log("waiting to deactivate light");
                $("#yellow").removeClass("active");
            }, 500);
        } else if (array[i] === "blue") {
            i++;
            $("#blue").addClass("active");
            setTimeout(function () {
                console.log("waiting to deactivate light");
                $("#blue").removeClass("active");
            }, 500);
        }
    }
        console.log("waiting 1 second for player turn...");
        setTimeout(function () {
            playerTurn();

        }, 1000);
}


    function playerTurn() {
        console.log("player turn started");
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
                    break;
                }
            }
        }
        setTimeout(function () {
            count++;
            $("#counter").text("Score: " + count);
            console.log("waiting 1 second to start next round");
            createMoves(gameArray)
        }, 1000);

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







