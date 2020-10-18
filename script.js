const buttonColours = ["red", "blue", "green", "yellow"];
let gamePattern = [];
let userClickedPattern = [];
let startGame = false;
let level = 0;


$(document).on("keypress", function()
{
    if (startGame === false)
    {
        nextSequence();
        startGame = true;
    }
});


$('.btn').on("click", function()
{
    let userChosenColour = this.id;
    userClickedPattern.push(userChosenColour);
    playSound(userChosenColour);
    animatePress(userChosenColour);
    checkAnswer(userClickedPattern.length - 1);
});


function animatePress(currentColour)
{
    $("#" + currentColour).addClass("pressed");
    setTimeout(function ()
    {        
        $("#" + currentColour).removeClass("pressed");
    }, 100);
}


function nextSequence() 
{
    let randomNumber = Math.floor(Math.random() * 4);
    let randomChosenColour = buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);

    $("#" + randomChosenColour).fadeOut(100).fadeIn(100);

    playSound(randomChosenColour);

    level++;

    $("h1").text(`Level ${level}`);
}


function playSound(name)
{
    let audio = new Audio(`sounds/${name}.mp3`);
    audio.play();
}

function checkAnswer(currentLevel)
{
    if (userClickedPattern[currentLevel] === gamePattern[currentLevel])
    {
        if (userClickedPattern.length === gamePattern.length)
        {
            setTimeout (nextSequence, 1000);
            userClickedPattern = [];
        }
    }
}