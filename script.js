const buttonColours = ["red", "blue", "green", "yellow"];

let gamePattern = [];

let userClickedPattern = [];


$('.btn').on("click", function()
{
    let userChosenColour = this.id;
    userClickedPattern.push(userChosenColour);
    playSound(userChosenColour);
    animatePress(userChosenColour);
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
}

function playSound(name)
{
    let audio = new Audio(`sounds/${name}.mp3`);
    audio.play();
}