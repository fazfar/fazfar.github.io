// This file contains JavaScript code for interactivity on the website.

// Function to handle form submission
function handleFormSubmit(event) {
    event.preventDefault(); // Prevent the default form submission behavior
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Simple validation
    if (name && email && message) {
        alert(`Thank you, ${name}! Your message has been sent.`);
        // Here you can add code to send the form data to a server or API
    } else {
        alert('Please fill in all fields.');
    }
}

// Event listener for the contact form
document.getElementById('contact-form').addEventListener('submit', handleFormSubmit);