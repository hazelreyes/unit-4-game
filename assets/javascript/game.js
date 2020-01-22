$(document).ready(function () {
    var randomNumber = "";
    var numberOptions = [];
    var crystalImages = "";
    var counter = 0;
    var crystalValue = "";
    var wins = 0;
    var losses = 0;
    $("#wins").text(0);
    $("#losses").text(0);
    $("#total-score").text(0);

    var targetNumber = (Math.floor(Math.random() * 101) + 19);
    $("#number-to-guess").text(targetNumber);

    var crystals = ["assets/images/blue.jpg", "assets/images/purple.jpg",
        "assets/images/teardrop.png", "assets/images/pink.jpg"];

    function initializeGame() {

        randomNumber = "";
        crystalImages = "";
        numberOptions = [];
        counter = 0;
        crystalValue = "";

        $("#crystals").empty();
        $("#total-score").text(0);

        targetNumber = (Math.floor(Math.random() * 101) + 19);
        $("#number-to-guess").text(targetNumber);

        crystals = ["assets/images/blue.jpg", "assets/images/purple.jpg",
            "assets/images/teardrop.png", "assets/images/pink.jpg"];
    }

    function myFunction() {

        for (var i = 0; i < crystals.length; i++) {
            randomNumber = (Math.floor(Math.random() * 12) + 1);
            numberOptions.push(randomNumber);

            crystalImages = $("<img>");
            crystalImages.addClass("crystal-image");
            crystalImages.attr("data-crystalvalue", numberOptions[i]);
            crystalImages.attr("src", crystals[i]);
            $("#crystals").append(crystalImages);
        }
    };


    myFunction();


    $(".crystal-image").on("click", function () {

        crystalValue = ($(this).attr("data-crystalvalue"));
        crystalValue = parseInt(crystalValue);
        counter += crystalValue;
        $("#total-score").html(counter);

        if (counter === targetNumber) {
            wins++;
            $("#wins").text(wins);
            $("#win-or-loss").html("You win!");

            initializeGame();
            myFunction();
        }
        else if (counter > targetNumber) {
            losses++;
            $("#losses").text(losses);
            $("#win-or-loss").html("You lost!");

            initializeGame();
            myFunction();
        }

    });
});