const express = require("express");
const app = express();

app.get('/game/start', (req, res) => {

    let optionArray = [
        "rock",
        "paper",
        "scissor"
    ];
    
    var result = [];

    let playerOneATwo = 0;
    let playerOneAThree = 0;
    let playerOneAFour = 0;
    let playerTwoAOne = 0;
    let playerTwoAThree = 0;
    let playerTwoAFour = 0;
    let playerThreeAOne = 0;
    let playerThreeATwo = 0;
    let playerThreeAFour = 0;
    let playerFourAOne = 0;
    let playerFourATwo = 0;
    let playerFourAThree = 0;

    for (let i = 1; i <= 50; i++) {
        var playerOne = optionArray[Math.floor(Math.random() * optionArray.length)];
        var playerTwo = optionArray[Math.floor(Math.random() * optionArray.length)];
        var playerThree = optionArray[Math.floor(Math.random() * optionArray.length)];
        var playerFour = optionArray[Math.floor(Math.random() * optionArray.length)];

        //PlayerOne Main
        if (playerOne == "rock") {
            if (playerTwo == "scissor") {
                playerOneATwo++;
            }
            if (playerThree == "scissor") {
                playerOneAThree++;
            }
            if (playerFour == "scissor") {
                playerOneAFour++;
            }
        } else if (playerOne == "scissor") {
            if (playerTwo == "paper") {
                playerOneATwo++;
            }
            if (playerThree == "paper") {
                playerOneAThree++;
            }
            if (playerFour == "paper") {
                playerOneAFour++;
            }
        } else {
            if (playerTwo == "rock") {
                playerOneATwo++;
            }
            if (playerThree == "rock") {
                playerOneAThree++;
            }
            if (playerFour == "rock") {
                playerOneAFour++;
            }
        }

        //PlayerTwo Main
        if (playerTwo == "rock") {
            if (playerOne == "scissor") {
                playerTwoAOne++;
            }
            if (playerThree == "scissor") {
                playerTwoAThree++;
            }
            if (playerFour == "scissor") {
                playerTwoAFour++;
            }
        } else if (playerTwo == "scissor") {
            if (playerOne == "paper") {
                playerTwoAOne++;
            }
            if (playerThree == "paper") {
                playerTwoAThree++;
            }
            if (playerFour == "paper") {
                playerTwoAFour++;
            }
        } else {
            if (playerOne == "rock") {
                playerTwoAOne++;
            }
            if (playerThree == "rock") {
                playerTwoAThree++;
            }
            if (playerFour == "rock") {
                playerTwoAFour++;
            }
        }

        //PlayerThree Main
        if (playerThree == "rock") {
            if (playerOne == "scissor") {
                playerThreeAOne++;
            }
            if (playerTwo == "scissor") {
                playerThreeATwo++;
            }
            if (playerFour == "scissor") {
                playerThreeAFour++;
            }
        } else if (playerThree == "scissor") {
            if (playerOne == "paper") {
                playerThreeAOne++;
            }
            if (playerTwo == "paper") {
                playerThreeATwo++;
            }
            if (playerFour == "paper") {
                playerThreeAFour++;
            }
        } else {
            if (playerOne == "rock") {
                playerThreeAOne++;
            }
            if (playerTwo == "rock") {
                playerThreeATwo++;
            }
            if (playerFour == "rock") {
                playerThreeAFour++;
            }
        }

        //PlayerFour Main
        if (playerFour == "rock") {
            if (playerOne == "scissor") {
                playerFourAOne++;
            }
            if (playerTwo == "scissor") {
                playerFourATwo++;
            }
            if (playerThree == "scissor") {
                playerFourAThree++;
            }
        } else if (playerFour == "scissor") {
            if (playerOne == "paper") {
                playerFourAOne++;
            }
            if (playerTwo == "paper") {
                playerFourATwo++;
            }
            if (playerThree == "paper") {
                playerFourAThree++;
            }
        } else {
            if (playerOne == "rock") {
                playerFourAOne++;
            }
            if (playerTwo == "rock") {
                playerFourATwo++;
            }
            if (playerThree == "rock") {
                playerFourAThree++;
            }
        }

        //pushing the values of each iteration in result array
        result.push({
            iteration: i,
            playerOne: playerOne,
            playerTwo: playerTwo,
            playerThree: playerThree,
            playerFour: playerFour,
            playerOneATwo: playerOneATwo,
            playerOneAThree: playerOneAThree,
            playerOneAFour: playerOneAFour,
            playerTwoAOne: playerTwoAOne,
            playerTwoAThree: playerTwoAThree,
            playerTwoAFour: playerTwoAFour,
            playerThreeAOne: playerThreeAOne,
            playerThreeATwo: playerThreeATwo,
            playerThreeAFour: playerThreeAFour,
            playerFourAOne: playerFourAOne,
            playerFourATwo: playerFourATwo,
            playerFourAThree: playerFourAThree
        })

    }

    //passing the result in json
    res.json({
        result
    })
    
});

app.listen(3000);