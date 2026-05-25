document.getElementById("loginForm").addEventListener("submit", function(e) {
    e.preventDefault();
    let email = document.getElementById("email").value.trim();
    let password = document.getElementById("password").value.trim();
    if (email === "" || !email.includes("@")) {
        alert("Please enter a valid email.");
        return;
     }
    if (password.length < 6) {
         alert("Password must be at least 6 characters.");
         return;
    }
    alert("Login successful!");
    this.reset(); 
 });
