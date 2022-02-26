let displayController = (()=>{
    const xosBtns = document.querySelectorAll('.xos-buttons');
    const playerx = document.querySelector('.user');
    const computer = document.querySelector('.computer');
    const resultTie = document.querySelector('.result');
    const playAgainBtn = document.querySelector('.play-again-button');
    let gameBoard = ["","","","","","","","",""];
    let foundWinner = false;
    for(let i =0; i<xosBtns.length; i++){
        xosBtns[i].addEventListener('click', ()=>{
    
            if(xosBtns[i].textContent=='' && foundWinner == false){
                xosBtns[i].textContent = `x`;
                gameBoard.splice(i,1,`x`);
                checkWinner();
                if(foundWinner == false){
                    computerPlay();
                    checkWinner();
                }
    
            }
    
        });
    
    }
    
    playAgainBtn.addEventListener('click',()=>{
        gameBoard = ["","","","","","","","",""];
        foundWinner = false;
        playerx.classList.remove('winner');
        playerx.textContent = 'You: X ';
        computer.classList.remove('winner');
        computer.textContent = 'Computer: O ';
        resultTie.classList.remove('tie');
        resultTie.textContent = '';
        for(let i = 0; i<xosBtns.length; i++){
             xosBtns[i].textContent = '';
        }
    });
    function computerPlay(){
    
        let guess = Math.floor(Math.random() * 9);
        let obvious = gameBoard.indexOf('');
        if(gameBoard[guess]==''){
            xosBtns[guess].textContent = `o`;
            gameBoard.splice(guess, 1, `o`);
        }else if(gameBoard[guess]!=='' && gameBoard[obvious]==''){
            xosBtns[obvious].textContent = `o`;
            gameBoard.splice(obvious, 1, `o`);
        }else{
            resultTie.classList.add('tie');
            resultTie.textContent = 'Tie!';
        }
    }
    let winnigConditions = [
                [0,1,2],
                [3,4,5],
                [6,7,8],
                [0,3,6],
                [1,4,7],
                [2,5,8],
                [0,4,8],
                [2,4,6]
           ];
    function checkWinner(){
            for(let i=0; i<winnigConditions.length; i++){
                if(gameBoard[winnigConditions[i][0]]=='x' && gameBoard[winnigConditions[i][1]]=='x' && gameBoard[winnigConditions[i][2]]=='x'){
                    console.log('winner');
                    foundWinner = true;
                    playerx.classList.add('winner');
                    playerx.textContent += 'winner';
                }else if(gameBoard[winnigConditions[i][0]]=='o' && gameBoard[winnigConditions[i][1]]=='o' && gameBoard[winnigConditions[i][2]]=='o'){
                    console.log('comp');
                    foundWinner = true;
                    computer.classList.add('winner');
                    computer.textContent += 'winner';
                }
            }
    }
})();
