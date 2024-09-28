// Wait until the DOM is fully loaded
document.addEventListener("DOMContentLoaded", function () {
  const loginContainer = document.querySelector(".login-container");
  const animationDuration = 5000; // Animation duration of 5 seconds

  // Wait for the background animation to finish before showing the login form
  setTimeout(() => {
    loginContainer.classList.add("show");
  }, animationDuration); // Trigger after the animation duration
});

// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
  
  // Get the login button
  var button = document.getElementById('login-button');
  
  // Add click event listener to the button
  button.addEventListener('click', function() {
    
    // Hide the text and show the spinner
    button.innerHTML = '<div class="spinner"></div>';
    
    // Disable the button to prevent multiple clicks
    button.disabled = true;

    // Simulate a delay for the login process (e.g., 3 seconds)
    setTimeout(function() {
      // Reset the button after the "login process"
      button.innerHTML = 'Login';
      button.disabled = false;
    }, 3000);  // Adjust the delay time according to your need

  });
});
