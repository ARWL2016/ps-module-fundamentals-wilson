var game = function() {

    var factorElement = document.getElementById('factor'); 
    var problemsPerGame = 3; 

    function printGame() {

        player.logPlayer(); 

        setProblemCount(document.getElementById('problemCount').value)

        var gameForm = ''; 
        for (var i = 1; i <= problemsPerGame; i++) {
            gameForm += '<div class="form-group">';
            gameForm += '<label for="answer' + i + '" class="col-sm-2 control-label">';
            gameForm += factorElement.value + ' x ' + i + ' = </label>';
            gameForm += '<div class="col-sm-1"><input type="text" class="form-control" id="answer' + i + '" size="5" /></div>';
            gameForm += '</div>';
        }

        var gameElement = document.getElementById('game'); 
        gameElement.innerHTML = gameForm; 

        document.getElementById('calculate').removeAttribute('disabled');
    }

    function calculateScore() {
    
        var problemsInGame = getProblemCount();
        var score = 0;
    
        // loop through the text boxes and calculate the number that are correct
        for (var i = 1; i <= problemsInGame; i++) {
            var answer = document.getElementById('answer' + i).value;
            if(i * factorElement.value == answer) {
                score++;
            }
        }
    
        // create a new result object to pass to the scoreboard
        var result = {
            name: player.getName(),
            score: score,
            problems: problemsInGame,
            factor: factorElement.value
        };
    
        // add the result and update the scoreboard
        var scoreboard = new Scoreboard();
        scoreboard.addResult(result);
        scoreboard.updateScoreboard();
    
        // disable the calculate score button
        document.getElementById('calculate').setAttribute('disabled', 'true');
    }
    
    //sets a variable
    function setProblemCount(newProblemCount) {
        problemsPerGame = newProblemCount;
    }
    
    //gets a variable
    function getProblemCount() {
        return problemsPerGame;
    }
    
    // public members
    return {
        printGame: printGame,
        calculateScore: calculateScore,
        setProblemCount: setProblemCount,
        getProblemCount: getProblemCount
    };



}(); 