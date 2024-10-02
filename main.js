const game = (function (){
    const TRANSACTION_STATUS = Object.freeze({
        SUCCESS: 0,
        FAILURE: 1
    });

    const GAME_STATE = Object.freeze({
        IN_PROGRESS: 0,
        WIN: 1,
        DRAW: 2
    });

    const BOARD_STATE = Object.freeze({
        EMPTY: 0,
        PLAYER_1: 1,
        PLAYER_2: 2
    });


    let gameBoard = [
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0]
    ];

    let playerTurn = true;
    let playerName = "Player 1";
    let opponentName = "Player 2";
    let winningPlayer = BOARD_STATE
    let turnCount = 0;

    let gameStatus = GAME_STATE.IN_PROGRESS;

    function updateGameStatus(){
        turnCount++;
        checkStatus();
    }

    function checkEquivalence(firstNumber, secondNumber, thirdNumber){
        return firstNumber == secondNumber && firstNumber == thirdNumber;
    }

    function checkStatus(){
        //Check rows
        gameBoard.forEach((row) => {
            if (checkEquivalence(row[0], row[1], row[2])){
                
            }
        })
    }

    function getPlayerName(){
        return playerName;
    }

    function getOpponentName(){
        return opponentName;
    }

    function setPlayerName(newPlayerName){
        playerName = newPlayerName;
    }

    function setOpponentName(newOpponentName){
        opponentName = newOpponentName;
    }

    function userAction(xCoordinate, yCoordinate){
        const playerValue = playerTurn ? BOARD_STATE.PLAYER_1 : BOARD_STATE.PLAYER_2;
        
        if (gameBoard[yCoordinate][xCoordinate] != BOARD_STATE.EMPTY)
            return TRANSACTION_STATUS.FAILURE;
        if (gameStatus != GAME_STATE.IN_PROGRESS)
            return TRANSACTION_STATUS.FAILURE;
        gameBoard[yCoordinate][xCoordinate] = playerValue;
        playerTurn = !playerTurn;
        updateGameStatus();
        return TRANSACTION_STATUS.SUCCESS;
    }

    function getCurrentPlayer(){
        return playerTurn ? BOARD_STATE.PLAYER_1 : BOARD_STATE.PLAYER_2;
    }

    function logBoard(){
        console.log(gameBoard);
    }

    function resetGame(){
        playerTurn = true;
        gameBoard = [
            [0, 0, 0],
            [0, 0, 0],
            [0, 0, 0]
        ]
    }

    return { 
        getPlayerName,
        setPlayerName,
        getOpponentName,
        setOpponentName,
        resetGame,
        userAction,
        logBoard,
        getCurrentPlayer,
        BOARD_STATE,
        GAME_STATE,
        TRANSACTION_STATUS
    }
})();

console.log(`Current Player: ${game.getCurrentPlayer()}`);
console.log(`User Action Response: ${game.userAction(1, 0)}`);
console.log(`Current Player: ${game.getCurrentPlayer()}`);
console.log(`User Action Response: ${game.userAction(1, 0)}`);
console.log(`Current Player: ${game.getCurrentPlayer()}`);
console.log(`User Action Response: ${game.userAction(1, 1)}`);
console.log(`Current Player: ${game.getCurrentPlayer()}`);
game.logBoard();
game.resetGame();
game.logBoard();