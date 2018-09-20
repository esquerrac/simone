var gameArray = [];
let colorsArray = ["green", "red", "yellow", "blue"];
var playerArray = [];
var count = 0;

function mouseDown(event){
    $(this).addClass("active");
};
function mouseUp(event){
    $(this).removeClass("active");
};
$("#startButton").click(function () {
    createMoves(gameArray);
    $("#counter").text("Score: " + count);
    $("#status").text("Watch Closely...");
});

function createMoves(array) {
    for (let i = 0; i <= count; i++) {
        array.push(colorsArray[(Math.floor(Math.random() * colorsArray.length))]);
        displayMoves(gameArray);
    }
}

function displayMoves(array) {
    for (let i = 0; i < array.length; i++) {
        var currentLight = array[i].toString();
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
    }
    setTimeout(function () {
        playerTurn();
    }, 500)

}

function playerTurn(event) {
    // $("#green").css("background-color", "darkgreen");
    // $("#red").css("background-color", "darkred");
    // $("#yellow").css("background-color", "darkgoldenrod");
    // $("#blue").css("background-color", "darkblue");
    playerArray = [];
    $(".gamecell").click(function () {
        playerArray.push($(this).attr("id"));
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
        clearInterval(countdown);
        $("#centerText").text();
        checkMoves(playerArray, gameArray);
    });
}


function checkMoves(array1, array2) {
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
                playerArray = [];
                setTimeout(function () {
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






