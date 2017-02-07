//CommonJS

// private members
var playerName = '';

function logPlayer() {
    console.log('The current player is ' + playerName + '.');
}

function setName(newName) {
    playerName = newName;
}

function getName() {
    return playerName;
}



module.exports = {
    logPlayer: logPlayer,
    setName: setName,
    getName: getName
}

//equivalent to: 
    
// exports.logPlayer = logPlayer; 
// exports.setName = setName; 
// exports.getName = getName; 




