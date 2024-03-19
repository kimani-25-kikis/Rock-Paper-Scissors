let score = JSON.parse(localStorage.getItem('score')) || {

    wins:0,
    loses:0,
    ties: 0
};

updateElement();

/*  if (!score){

    score ={

        wins:0,
        loses:0,
        ties: 0
    };
} */


function playGame(playMove){

    const computerMove = pickComputerMove();

        let result = '';
        
        if(playMove === 'scissors'){
            if(computerMove ==='scissors'){
                result ='Tie';
            }
            else if (computerMove === 'paper'){
                result = 'You Win';
            }
            else if (computerMove === 'rock'){
                result = 'You Lose';
            }
        }
        else if(playMove === 'paper'){
            if(computerMove ==='paper'){
                result ='Tie';
            }
            else if (computerMove === 'scissors'){
                result = 'You Lose';
            }
            else if (computerMove === 'rock'){
                result = 'You Win';
            }
        }
        else if(playMove === 'rock'){

            if(computerMove ==='rock'){
                result ='Tie';
            }
            else if (computerMove === 'paper'){
                result = 'You Lose';
            }
            else if (computerMove === 'scissors'){
                result = 'You Win';
            }

        }
        if(result === 'You Win'){

            score.wins +=1;
        }
        else if(result === 'You Lose'){

            score.loses +=1;
        }
        else if(result === 'Tie'){
            score.ties +=1;
        }

        localStorage.setItem('score', JSON.stringify(score));

       updateElement();

       document.querySelector('.js-result')
       .innerHTML = result;

       document.querySelector('.js-move')
       .innerHTML = `  You 
       <img src ='images/${playmove}-emoji (1).png' class="move-icon">
       <img src ='images/${computerMove}-emoji.png' class="move-icon">
       computer`;

    }

        function updateElement(){
            document.querySelector('.js-score')

          .innerHTML = ` Wins. ${score.wins} , Loses. ${score.loses}, Ties. ${score.ties}`;
        }
    

function pickComputerMove(){
    const randomNumber = Math.random();
    
    let computerMove ='';

    if(randomNumber >0 && randomNumber < 1/3){
        computerMove = 'rock';
        
    }
    else if(randomNumber >1/3 && randomNumber< 2/3){
        computerMove = 'paper';
    }
    else if (randomNumber > 2/3 && randomNumber <1){
        computerMove = 'scissors';
    }
    return computerMove;

}