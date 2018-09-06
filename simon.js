var colorArray = ["green", "red", "yellow", "blue"];
var gameArray;
var playerArray;
var count = 0;


$("#startButton").click(function () {
    gameArray = [];
    for (var i = -1; i < count; i++) {
        console.log("entered first loop");
        gameArray.push(colorArray[Math.floor(Math.random() * 4)]);
    }
    console.log("passing array " +gameArray+ " to second loop");
    displayMoves(gameArray);
});


function displayMoves(array) {
    for (var i = 0; i < array.length; i++) {
        console.log("entering second loop");
        setInterval(function () {
            $("#" + array[i]+"").addClass("active");
            console.log("activated light");
            setTimeout(function () {
                $("#" + array[i]+"").removeClass("active");
                console.log("removed light");
            }, 500);
        }, 500);
    }
}


$(".gamecell").click(function () {
    $(this).addClass("active");
    setTimeout(function () {
        $(this).removeClass("active");
    }, 250)
});





