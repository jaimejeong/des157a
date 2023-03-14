(function (){
    "use strict";
    console.log('reading js');

    const startGame = document.getElementById('startgame');
        const gameControl = document.getElementById('gamecontrol');
        const game = document.getElementById('game');
        const die = document.getElementById('die');
        const score = document.getElementById('score');
        const actionArea = document.getElementById('actions');
        const introButton = document.querySelector('#introbutton');
        const score1 = document.getElementById('score1');
        const score2 = document.getElementById('score2');


        const player1 = document.querySelector('#player1 h2')



   
        introButton.addEventListener('click', function(event) {
            event.preventDefault();
            // console.log(document.getElementById('intro'));

            document.getElementById('maingame').className = 'showing';
            document.getElementById('intro').className = 'hidden';


            // document.querySelector('#intro').className = "hidden";
            // document.querySelector('#gamemain').className = "showing";

           
      
        })
        
        // object
        const gameData = {
            dice: ['images/1die.svg', 'images/2die.svg', 'images/3die.svg', 'images/4die.svg', 'images/5die.svg', 'images/6die.svg'],
            profile: ['images/player1.svg', 'images/player2.svg'],
            players: ['player 1', 'player 2'],
            score: [0, 0],
            roll1: 0,
            roll2: 0,
            rollSum: 0,
            index: 0,
            gameEnd: 30
        };

        startGame.addEventListener("click", function() {
            // randomly set the game index here, either 0 or 1
            gameData.index = Math.round(Math.random());
            console.log(gameData.index);

            gameControl.innerHTML = '<h2>The Game Has Started</h2>';

            gameControl.innerHTML += '<button id="quit">Wanna Quit?</button>';
        

            // reload a window
            document.getElementById('quit').addEventListener('click', function() {
                location.reload();
            })

            setUpTurn();
        })

        function choosePlayer(){
            if(gameData.index == 0){
                document.querySelector('#img1').className = 'redBorder'
                document.querySelector('#img2').className = 'whiteBorder'
                document.querySelector('#player1').className = 'redText';
                document.querySelector('#player2').className = 'whiteText';
            }
            else{
                document.querySelector('#img2').className = 'redBorder'
                document.querySelector('#img1').className = 'whiteBorder'
                document.querySelector('#player2').className = 'redText';
                document.querySelector('#player1').className = 'whiteText';
            }
        }

        function setUpTurn() {
            game.innerHTML = `<p>Roll the dice for the ${gameData.players[gameData.index]}</p>`;
            actionArea.innerHTML = '<button id="roll">Roll the Dice</button>';

            choosePlayer()

            document.getElementById('roll').addEventListener('click', function() {
                // console.log("roll the dice!");
                throwDice();
            })

            // game.innerHTML += `<img src = "${gameData.profile[0]}">
            // <img src = "${gameData.profile[1]}">`;
        }

        function throwDice() {
            actionArea.innerHTML = '';
            // get random values for 1-6 for the score
            // adding 1 because we are using math.floor, because there is no 0 on the dice
            gameData.roll1 = Math.floor(Math.random() * 6) + 1;
            gameData.roll2 = Math.floor(Math.random() * 6) + 1;


console.log(gameData.roll1,gameData.roll2)
            

            // if (gameData.players[gameData.index] == 0) {
            //     player1.style.color = 'red';
            // }

            

            // put the dice images on the screen; the dice array index needs to be one less than roll1 and roll2
            die.innerHTML = `<img src = "${gameData.dice[gameData.roll1-1]}">
                                <img src = "${gameData.dice[gameData.roll2-1]}">`;
            game.innerHTML = `<p>Roll the dice for the ${gameData.players[gameData.index]}</p>`;
            console.log(gameData.dice[gameData.roll1-1]);

            // game.innerHTML += `<p></p>`;
            gameData.rollSum = gameData.roll1 + gameData.roll2;
            // gameData.rollSum = 2;
            console.log(gameData.rollSum);

            // if two 1's are rolled
            if (gameData.rollSum === 2) {
                console.log("snake eyes were rolled");
                game.innerHTML += '<p>Oh snap! Snake eyes!</p>';
                gameData.score[gameData.index] = 0;
                
                // switch players 

                // if (gameData.index) {
                //     gameData.index = 0
                // } else {
                //     gameData.index = 1
                // }
                gameData.index ? (gameData.index = 0) : (gameData.index = 1);

                // show the current score
                showCurrentScore();

                setTimeout(setUpTurn, 2000);
            }

            // if either die is a 1 
            else if (gameData.roll1 === 1 || gameData.roll2 === 1) {
                console.log("one of the two dice was a 1");
                // switch players
                gameData.index ? (gameData.index = 0) : (gameData.index = 1);
                game.innerHTML += `<p>Sorry, one of your rolls was a one, swithcing to ${gameData.players[gameData.index]}</p>`;

                setTimeout (setUpTurn, 2000);
            }
            // if neither die is a 1
            else {
                console.log("the game prceeds");
                gameData.score[gameData.index] += gameData.rollSum;
                actionArea.innerHTML = '<button id="rollagain">Roll again</button> or <button id="pass">Pass</button>';

                document.getElementById('rollagain').addEventListener('click', function () {
                    // setUpTurn();
                    throwDice();
                });

                document.getElementById('pass').addEventListener('click', function () {
                    gameData.index ? (gameData.index = 0) : (gameData.index = 1);
                    setUpTurn();
                })
                checkWinningCondition();
            }
        }

        function checkWinningCondition() {
            if (gameData.score[gameData.index] > gameData.gameEnd) {
                score.innerHTML = `<h2>${gameData.players[gameData.index]} wins with ${gameData.score[gameData.index]} points!</h2>`;

                actionArea.innerHTML = '';
                document.getElementById('quit').innerHTML = "Start a New Game?";
            }

            else {
                // show current score
                showCurrentScore();
            }
        }

        function showCurrentScore() {
            score1.innerHTML = `<h2>Score:</h2><br><h2>${gameData.score[0]}</h2>`;
            score2.innerHTML = `<h2>Score:</h2><br><h2>${gameData.score[1]}</h2>`;
            // score1.innerHTML = `<h2>Score:</h2>`;
            // score1.innerHTML = `<h2>${gameData.score[0]}</h2>`;
            // score2.innerHTML = `<h2>Score:</h2>`;
            // score2.innerHTML = `<h2>${gameData.score[1]}</h2>`;

            // score.innerHTML = `<p>The score is currently <strong>${gameData.players[0]}: ${gameData.score[0]}</strong> and <strong>${gameData.players[1]}: ${gameData.score[1]}</strong></p>`;
        }
})()