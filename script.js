const holiDate = new Date("March 25, 2024 00:00:00 GMT"); // Change this to the date of Holi
function calculateTimeUntilHoli() {
  const now = new Date().getTime();
  const timeRemaining = holiDate - now;

  const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

  return { days, hours, minutes, seconds };
}

// Function to update the countdown timer
function updateCountdown() {
  if (new Date() > holiDate) {
    document.getElementById("title").innerHTML = "Happy Holi🎉";
    return;
  }
  const { days, hours, minutes, seconds } = calculateTimeUntilHoli();
  document.getElementById("days").innerHTML = days;
  document.getElementById("hour").innerHTML = hours;
  document.getElementById("minute").innerHTML = minutes;
  document.getElementById("second").innerHTML = seconds;
}

// Update countdown every second
setInterval(updateCountdown, 1000);

// Initial call to update countdown immediately when the page loads
updateCountdown();
