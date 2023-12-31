var computerMove = '';
var result = '';

let score = JSON.parse(localStorage.getItem('score'));

if(score === null){
    score = {
        wins : 0,
        loses: 0,
        ties: 0,
    };
}

//this can also be used to declare score object but when we refresh it goes
// let score = {
//     wins : 0,
//     loses : 0,
//     ties : 0,
// }

function Move(yourMove){
    var rand = Math.random();

    if(rand >= 0 && rand < 1/3)
        computerMove = 'rock';
    else if(rand >= 1/3 && rand < 2/3)
        computerMove = 'paper';
    else
        computerMove = 'scissors';

    if(yourMove === 'rock')
        rock();
    else if(yourMove === 'paper')
        paper();
    else
        scissors();

    if(result === 'You Win')
        score.wins++;
    else if(result === 'You Lose')
        score.loses++;
    else
        score.ties++;

    localStorage.setItem('score',JSON.stringify(score));

    DOMscore(yourMove);
}

function DOMscore(yourMove){
    document.querySelector('.js-option').innerHTML = `${result}`;
    document.querySelector('.js-result').innerHTML = `You chose <img class="image" src="images/${yourMove}-emoji.png">. Computer chose <img class="image" src="images/${computerMove}-emoji.png">`;
    document.querySelector('.js-score').innerHTML = ` Wins: ${score.wins}. Loses: ${score.loses}. Ties: ${score.ties}`;
}

function rock(){
    if(computerMove === 'rock')
       result = 'Tie';
    else if(computerMove === 'paper')
        result = 'You Lose';
    else
        result = 'You Win';
}
function paper(){
    if(computerMove === 'rock')
       result = 'You Win';
    else if(computerMove === 'paper')
        result = 'Tie';
    else
        result = 'You Lose';
}
function scissors(){
    if(computerMove === 'rock')
       result = 'You Lose';
    else if(computerMove === 'paper')
        result = 'You Win';
    else
        result = 'Tie';
}

function delval(){
    score ={
        wins: 0,
        loses: 0,
        ties: 0,
    };
    localStorage.removeItem('score');
    document.querySelector('.js-score').innerHTML = ` Wins: ${score.wins}. Loses: ${score.loses}. Ties: ${score.ties}`;
}