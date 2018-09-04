function average(scores) {
    //Add all scores together
    var total = 0;
    scores.forEach(function(score) {
        total += score;
    });
    //divide by total number of scores
    var avg = total/scores.length;
    
    //round average
    return Math.round(avg);
}

var score1 = [90, 98, 89, 100, 100, 86, 94];
console.log(average(score1)); //should return 94

var score2 = [40, 65, 77, 82, 80, 54, 73, 63, 95, 49];
console.log(average(score2)); //should return 68

