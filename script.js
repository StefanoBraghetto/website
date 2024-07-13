// Define the Typeform URL
let typeformUrl = "https://f19j0ycpis1.typeform.com/to/tF8cgP6r";

// Define the timer duration in minutes
let time_in_min = 5;
let count;

// Function to start the timer
var startTimer = function(duration, display) {
  // Create the Typeform widget
  window.tf.createWidget("QXS2h1", {
    container: document.querySelector("#form"),
    width: 600,
    height: 600,
    hidden: { utm_source: "glitch-tf-embed-timer" }
  });

  // Disable start timer button
  document.getElementById("btn_start_timer").disabled = true;

  // Start the countdown timer
  var timer = duration;
  count = setInterval(function() {
    var minutes = parseInt(timer / 60, 10);
    var seconds = parseInt(timer % 60, 10);

    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    display.textContent = minutes + ":" + seconds;

    if (--timer < 0) {
      timer = duration;
      // Hide form and display time is over message
      document.querySelector("#form .typeform-widget").remove();
      let el = document.createTextNode("Time is over");
      document.querySelector("#form").appendChild(el);
      clearInterval(count);
      document.getElementById("btn_start_timer").disabled = false;
    }
  }, 1000); //every second
};

// Function to stop the timer
var stopTimer = function() {
  clearInterval(count);
  document.getElementById("btn_start_timer").disabled = false;
  document.getElementById("btn_stop_timer").disabled = true;
};

// Event listener for start timer button
document.getElementById("btn_start_timer").addEventListener("click", function() {
  startTimer(time_in_min * 60, document.querySelector('#time_left'));
  document.getElementById("btn_stop_timer").disabled = false;
});

// Event listener for stop timer button
document.getElementById("btn_stop_timer").addEventListener("click", stopTimer);
