document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();  // Prevent form from submitting the traditional way

    // Get values from the form
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('error-message');

    // Simple client-side validation
    if (username === "" || password === "") {
        errorMessage.textContent = "Please enter both username and password.";
        return;
    }

    // Here you can add more validation logic, such as checking for valid email format

    // Simulate successful login (replace with actual login logic)
    if (username === "admin" && password === "password123") {
        alert("Login successful!");
        // Redirect to another page or dashboard
        window.location.href = "dashboard.html"; // Replace with your actual dashboard or homepage URL
    } else {
        errorMessage.textContent = "Invalid username or password.";
    }
});
