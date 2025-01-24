const choices = ['камень', 'ножницы', 'бумага'];
const SubScore = document.getElementById('subScore');
const GameResult = document.getElementById('result');
let score = 0;
let player = 0;
let computer = '';

function rock() {
    player = 'камень';
    game(player);
}

function scissors() {
    player = 'ножницы';
    game(player);
}

function paper() {
    player = 'бумага';
    game(player);
}

function game(choice) {
    computer = choices[Math.floor(Math.random() * choices.length)];
    switch (choice) {
        case 'камень':
            if (computer === 'камень') {
                //alert('Ничья!, Твой выбор: ' + player + ', выбор компьютера: ' + computer);
                GameResult.textContent = 'Ничья!, Твой выбор: ' + player + ', выбор компьютера: ' + computer;
                score += 0.5;
                updateScore(score);
            } else if (computer === 'ножницы') {
                //alert('Ты выиграл!, Твой выбор: ' + player + ', выбор компьютера: ' + computer);
                GameResult.textContent = 'Ты выиграл!, Твой выбор: ' + player + ', выбор компьютера: ' + computer;
                score++;
                updateScore(score);
            } else {
                //alert('Ты проиграл!, Твой выбор: ' + player + ', выбор компьютера: ' + computer);
                GameResult.textContent = 'Ты проиграл!, Твой выбор: ' + player + ', выбор компьютера: ' + computer;
                score--;
                updateScore(score);
            }
            break;
        case 'ножницы':
            if (computer === 'камень') {
                //alert('Ты проиграл!, Твой выбор: ' + player + ', выбор компьютера: ' + computer);
                GameResult.textContent = 'Ты проиграл!, Твой выбор: ' + player + ', выбор компьютера: ' + computer;
                score--;
                updateScore(score);
            } else if (computer === 'ножницы') {
                //alert('Ничья!, Твой выбор: ' + player + ', выбор компьютера: ' + computer);
                GameResult.textContent = 'Ничья!, Твой выбор: ' + player + ', выбор компьютера: ' + computer;
                score += 0.5;
                updateScore(score);
            } else {
                //alert('Ты выиграл!, Твой выбор: ' + player + ', выбор компьютера: ' + computer);
                GameResult.textContent = 'Ты выиграл!, Твой выбор: ' + player + ', выбор компьютера: ' + computer;
                score++;
                updateScore(score);
            }
            break;
        case 'бумага':
            if (computer === 'камень') {
                //alert('Ты выиграл!, Твой выбор: ' + player + ', выбор компьютера: ' + computer);
                GameResult.textContent = 'Ты выиграл!, Твой выбор: ' + player + ', выбор компьютера: ' + computer;
                score++;
                updateScore(score);
            } else if (computer === 'ножницы') {
                //alert('Ты проиграл!, Твой выбор: ' + player + ', выбор компьютера: ' + computer);
                GameResult.textContent = 'Ты проиграл!, Твой выбор: ' + player + ', выбор компьютера: ' + computer;
                score--;
                updateScore(score);
            } else {
                //alert('Ничья!, Твой выбор: ' + player + ', выбор компьютера: ' + computer);
                GameResult.textContent = 'Ничья!, Твой выбор: ' + player + ', выбор компьютера: ' + computer;
                score += 0.5;
                updateScore(score);
            }
            break;
        default:
            alert('Ошибка ввода! Traceback: 01');
            break;
    }
}

function updateScore(arg) {
    arg = score;
    if (arg <= 0) {
        arg = 0;
        score = arg;
    }
    SubScore.textContent = 'Счёт: ' + arg;
}