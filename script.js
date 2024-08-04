document.addEventListener("DOMContentLoaded", function () {
    countdown();
});


function countdown() {
    // Set the target date
    const targetDate = new Date("2024-08-18T06:55:00").getTime();

    // Update the countdown every second
    const countdown = setInterval(() => {
        updateCountdown(targetDate, countdown);
    }, 1000);

    // Show the countdown after page load
    updateCountdown(targetDate, countdown);
}

function updateCountdown(targetDate, countdown) {
    // Get the current time
    const now = new Date().getTime();

    // Calculate the difference
    const distance = targetDate - now;

    // Time calculations for days, hours, minutes, and seconds
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Display the result
    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;

    // If the countdown is over
    if (distance < 0) {
        clearInterval(countdown);
        document.getElementById("countdownContent").style.display = "none";
        document.getElementById("countdownEnded").style.display = "flex";
        document.getElementById("countdownEnded").innerHTML = "Your favorite boy arrived!";
    }
}
