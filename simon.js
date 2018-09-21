var gameArray = [];
let colorsArray = ["green", "red", "yellow", "blue"];
var playerArray = [];
var count = 0;

function mouseDown() {
    $(this).addClass("active");
    console.log("button lighting up!")
};

function mouseUp() {
    $(this).removeClass("active");
    console.log("button turning off!")
};
$("#startButton").click(function () {
    console.log("start button clicked")
    $("#counter").text("Score: " + count);
    console.log("score set")
    $("#status").text("Watch Closely...");
    createMoves(gameArray);
});

function createMoves(array) {
    console.log("creating moves array");
    for (let i = 0; i <= count; i++) {
        array.push(colorsArray[(Math.floor(Math.random() * colorsArray.length))]);
        console.log("moves array complete");
        console.log(gameArray);
        displayMoves(gameArray);
    }
}

function displayMoves(array) {
    let i = 0;
    setTimeout(function () {
        var currentLight = array[i].toString();
        console.log("will activate light:")
        console.log(currentLight);
        if (currentLight === "green") {
            $("#green").addClass("active");
            setTimeout(function () {
                $("#green").removeClass("active");
            }, 500);
        } else if (currentLight === "red") {
            $("#red").addClass("active");
            setTimeout(function () {
                $("#red").removeClass("active");
            }, 500);
        } else if (currentLight === "yellow") {
            $("#yellow").addClass("active");
            setTimeout(function () {
                $("#yellow").removeClass("active");
            }, 500);
        } else if (currentLight === "blue") {
            $("#blue").addClass("active");
            setTimeout(function () {
                $("#blue").removeClass("active");
            }, 500);
        }
        console.log("successfully activated lights")
    }, 500);
    setTimeout(function () {
        console.log("preparing to start player turn");

        playerTurn();
        $("#status").text("Now it's your turn!");
    }, 1000)
}

function playerTurn() {
    playerArray = [];
    console.log("player array cleared");
    $(".gamecell").click(function () {
        playerArray.push($(this).attr("id"));
        console.log("pushed button to player array")
        console.log(playerArray);
    });
    let timer = 10;
    var countdown = setInterval(function () {
        timer--;
        $("#centerText").text(timer);
        if (timer === 0) {
            clearInterval(countdown);
            $("#centerText").text();
            checkMoves(playerArray, gameArray);
        }
    }, 1000);
    $("#center").click(function () {
        console.log("center button activated")
        clearInterval(countdown);
        $("#centerText").text();
        checkMoves(playerArray, gameArray);
    });
}


function checkMoves(array1, array2) {
    console.log("preparing to check moves...")
    if (array1.length !== array2.length) {
        $("#status").text("Oh no!  Better luck next time!");
        resetGame();
    } else {
        for (let i = 0; i < array2.length; i++) {
            if (array1[i] !== array2[i]) {
                $("#status").text("Oh no!  Better luck next time!");
                resetGame();
            } else {
                $("#status").text("Great Job!  Get ready for the next round!");
                count++;
                $("#counter").text("Score: " + count);
                console.log("Success!  score updated")
                playerArray = [];
                setTimeout(function () {
                    console.log("re-creating moves array");
                    createMoves(gameArray)
                }, 1000)
            }
        }
    }
}


var resetGame = function () {
    count = 0;
    gameArray = [];
    playerArray = [];
    $("#counter").text("Score: " + count);
};






