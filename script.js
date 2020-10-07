let rando;
const buttons = $('.btn');
let randomButtons = [];
let randomChosenButton;
let userButtons = [];

function nextSequence()
{
    rando = Math.floor(Math.random()*4);
    randomChosenButton = buttons[rando];
    randomButtons.push(randomChosenButton);
}