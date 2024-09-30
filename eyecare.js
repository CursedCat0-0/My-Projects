document.getElementById("startExercise").addEventListener("click", function () {
    let timerDisplay = document.getElementById("timer");
    let timeLeft = 20; // 20 seconds eye exercise

    timerDisplay.innerHTML = Relax your eyes for ${timeLeft} seconds.;

    let countdown = setInterval(function () {
        timeLeft--;
        timerDisplay.innerHTML = Relax your eyes for ${timeLeft} seconds.;

        if (timeLeft <= 0) {
            clearInterval(countdown);
            timerDisplay.innerHTML = "Great job! You completed the exercise.";
        }
    }, 1000);
});