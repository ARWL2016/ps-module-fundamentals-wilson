// Revealing Module Pattern - constructor
var Scoreboard = function() {

    console.log('scoreboard loaded');

    //private members 
    var results = []; 

    function addResult(newResult) {
        results.push(newResult);
    }

    function updateScoreboard() {

        var output = '<h2>Scoreboard</h2>'; 

        for (var index = 0; index < results.length; index++) {
            var result = results[index]; 
            output += '<h4>'; 
            output += result.name + ': ' + result.score + '/' + result.problems + ' for factor ' + result.factor; 
            output += '</h4>';
        }

        var scoresElement = document.getElementById('scores'); 
        scoresElement.innerHTML = output; 
    }

    return {
        addResult: addResult, 
        updateScoreboard: updateScoreboard
    }

};