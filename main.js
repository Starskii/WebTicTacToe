const game = (function (){
    const COMPLETED = 0;
    const INCOMPLETE = -1;


    let gameBoard = [
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0]
    ];

    let playerTurn = true;
    let playerName = "Player 1";
    let opponentName = "Player 2";

    let gameStatus = 0;

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
        const playerValue = playerTurn ? 1 : -1;
        if (gameBoard[yCoordinate][xCoordinate] != 0)
            return INCOMPLETE;
        gameBoard[yCoordinate][xCoordinate] = playerValue;
        playerTurn = !playerTurn;
        checkWin();
        return COMPLETED;
    }

    function getCurrentPlayer(){
        return playerTurn ? playerName : opponentName;
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
        getCurrentPlayer
    }
})();

console.log(game.getCurrentPlayer());
console.log(game.userAction(1, 0));
console.log(game.getCurrentPlayer());
console.log(game.userAction(1, 0));
console.log(game.getCurrentPlayer());
console.log(game.userAction(1, 1));
console.log(game.getCurrentPlayer());
game.logBoard();
game.resetGame();
game.logBoard();