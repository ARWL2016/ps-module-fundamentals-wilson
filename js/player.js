// Revealing Module - Singleton
// variable do not need to be returned

var player = function() {

    var playerName = ''; 

    function logPlayer() {
        console.log('The current player is ' + playerName);
    }

    function setName(newName) {
        playerName = newName; 
    }

    function getName() {
        return playerName; 
    }

    return {
        logPlayer: logPlayer, 
        setName: setName, 
        getName: getName
    };

}(); 

