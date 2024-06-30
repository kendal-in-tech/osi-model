function submitQuiz() {
    var answers = ["Network", "Session", "Physical", "Application", "Data Link"];
    var score = 0;
    for (var i = 1; i <= 5; i++) {
        var options = document.getElementsByName('question' + i);
        for (var j = 0; j < options.length; j++) {
            if (options[j].checked && options[j].value === answers[i - 1]) {
                score++;
            }
        }
    }
    var resultDiv = document.getElementById('result');
    resultDiv.innerHTML = 'You scored ' + score + ' out of 5!';
}