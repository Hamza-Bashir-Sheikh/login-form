// Don't remove this code
const container = document.querySelector(".container");
const signUp = document.querySelector(".signup-link");
const login = document.querySelector(".login-link");
 
 // js code to appear signup and login form

 signUp.addEventListener("click", ( )=>{
    container.classList.add("active");
});
login.addEventListener("click", ( )=>{
    container.classList.remove("active");
});

/* Instructions:

You are tasked with creating functionality for a signup form where user data is collected and saved into variables, and then implementing a validation check during login to verify if the provided credentials are valid or not. The provided code contains HTML and JavaScript files within a folder. You are instructed not to modify the existing code in the index.js file. Instead, you are required to download the given folder and add your JavaScript code below the existing code in the index.js file to accomplish the task.

Using the Document Object Model (DOM), create functions to:

Collect user data from the signup form and store it in variables.
Implement a validation check during login to verify if the provided credentials match the saved data.
Ensure that your added code is properly commented and organized for clarity and readability.

*/

// Add your code here

function handleSignup() {
    const name = document.getElementById('signup-name').value;
    const email = document.getElementById('signup-email').value;
    const password = document.getElementById('signup-password').value;
    const userData = { name, email, password };
    console.log(userData);
}

//<----------------login form----------------> 

function handleLogin() {
    const loginEmail = document.getElementById('login-email').value;
    const loginPassword = document.getElementById('login-password').value;

    const savedUserData = {
        name: 'hamza',
        email: 'bashirhamza249@gmail.com',
        password: '1234'
    };

    if (loginEmail === savedUserData.email && loginPassword === savedUserData.password) {
        alert('Login successful!');
    } else {
        alert('Invalid credentials. Please try again.');
    }
}

document.getElementById('signup-btn').addEventListener('click', handleSignup);
document.getElementById('login-btn').addEventListener('click', handleLogin);

