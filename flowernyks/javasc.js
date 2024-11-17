// Add Event Listeners for Navigation Menu Links
document.querySelectorAll(".menuList li a").forEach(link => {
    link.addEventListener("click", function (event) {
      event.preventDefault(); // Prevent default action
      const targetPage = this.getAttribute("href"); // Get the target page URL
      if (targetPage) {
        window.location.href = targetPage; // Navigate to the specified page
      } else {
        alert("Page not found.");
      }
    });
  });
  
  // Search Button Functionality
  document.querySelector(".searchBtn").addEventListener("click", function () {
    const searchInput = document.querySelector(".searchInput").value.trim();
    if (searchInput) {
      alert(`Searching for: ${searchInput}`);
    } else {
      alert("Please enter a search term.");
    }
  });
  
  // Add-to-Cart Button Functionality
  document.querySelectorAll(".add-to-cart").forEach(button => {
    button.addEventListener("click", function () {
      const productName = this.closest(".product-card").querySelector("h3").innerText;
      alert(`${productName} has been added to your cart!`);
    });
  });
  
  // Shop Now Button Functionality
  document.querySelectorAll(".shop-now").forEach(button => {
    button.addEventListener("click", function () {
      window.location.href = "/shop.html";
    });
  });
  
  // Responsive Navigation Handling
  document.querySelector(".cartBtn").addEventListener("click", function () {
    alert("Redirecting to cart page...");
    window.location.href = "/cart.html"; // Update with the cart page URL
  });
  
  // Login Button Functionality (Modal)
  document.querySelector(".loginBtn").addEventListener("click", function () {
    // Open the login modal instead of navigating to a separate login page
    const loginModal = document.getElementById("loginModal");
    if (loginModal) {
      loginModal.style.display = "flex"; // Show the login modal
    } else {
      alert("Login modal not found.");
    }
  });
  
  // Close Modal if clicked outside of modal content
  window.addEventListener("click", function (event) {
    const loginModal = document.getElementById("loginModal");
    if (event.target === loginModal) {
      loginModal.style.display = "none"; // Close the modal if clicked outside
    }
  });
  
  // Close modal when the close button is clicked
  document.querySelector(".close-btn").addEventListener("click", function () {
    const loginModal = document.getElementById("loginModal");
    loginModal.style.display = "none"; // Hide the modal
  });
  
  // Toggle to Register Form
  document.getElementById("goToRegister").addEventListener("click", function () {
    document.getElementById("loginForm").style.display = "none";
    document.getElementById("registerForm").style.display = "block";
    document.getElementById("modalTitle").textContent = "Register";
  });
  
  // Toggle to Login Form
  document.getElementById("goToLogin").addEventListener("click", function () {
    document.getElementById("registerForm").style.display = "none";
    document.getElementById("loginForm").style.display = "block";
    document.getElementById("modalTitle").textContent = "Login";
  });
  
  // Handle Login Form Submission
  document.querySelector("#loginFormFields").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form submission
    const username = document.querySelector("#loginUsername").value.trim();
    const password = document.querySelector("#loginPassword").value.trim();
  
    if (username && password) {
      alert(`Welcome back, ${username}!`);
      document.getElementById("loginModal").style.display = "none";
      document.querySelector("#loginFormFields").reset();
    } else {
      alert("Please enter both username and password.");
    }
  });
  
  // Handle Register Form Submission
  document.querySelector("#registerFormFields").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form submission
    const username = document.querySelector("#registerUsername").value.trim();
    const password = document.querySelector("#registerPassword").value.trim();
    const confirmPassword = document.querySelector("#confirmPassword").value.trim();
  
    if (username && password && confirmPassword) {
      if (password === confirmPassword) {
        alert(`Account created successfully, ${username}!`);
        document.getElementById("loginModal").style.display = "none";
        document.querySelector("#registerFormFields").reset();
      } else {
        alert("Passwords do not match.");
      }
    } else {
      alert("Please fill in all fields.");
    }
  });
  
  // Close Modal (Esc key)
  window.addEventListener("keydown", function (event) {
    const loginModal = document.getElementById("loginModal");
    if (event.key === "Escape" && loginModal) {
      loginModal.style.display = "none"; // Close modal when ESC key is pressed
    }
  });
  