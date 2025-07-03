document.getElementById('loginForm').addEventListener('submit', function(e) {
    
    e.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    const storedUser = JSON.parse(localStorage.getItem('hamroUser'));

    if (storedUser && email === storedUser.email && password === storedUser.password) {
        alert("Login Successful");
        window.location.href = "homepage.html";  // Redirect to homepage
    } else {
        alert("Invalid credentials. Try again.");
    }
});