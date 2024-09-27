// Wait until the DOM is fully loaded
document.addEventListener("DOMContentLoaded", function () {
  const loginContainer = document.querySelector(".login-container");
  const animationDuration = 5000; // Animation duration of 5 seconds

  // Wait for the background animation to finish before showing the login form
  setTimeout(() => {
    loginContainer.classList.add("show");
  }, animationDuration); // Trigger after the animation duration
});
