document.getElementById('signupForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // For demo: store in localStorage
    localStorage.setItem('hamroUser', JSON.stringify({
        name: name,
        email: email,
        password: password
    }));

    alert("Signup successful! Please login.");
    window.location.href = "login.html"; // Redirect to login page
});