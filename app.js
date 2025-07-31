// Get references to the HTML elements
const myButton = document.getElementById('myButton');
const outputMessage = document.getElementById('outputMessage');
const ipAndPortParagraph = document.getElementById('ipAndPort'); // New element reference

// --- Get and display IP/Host and Port ---
// window.location provides information about the current URL
const currentHost = window.location.hostname; // e.g., "localhost" or "192.168.1.5"
const currentPort = window.location.port;   // e.g., "3000" or "" (if default http/https port)

// You can hardcode the port if you always expect it to be 3000
const expectedPort = 3000;

// Display the host and port
ipAndPortParagraph.textContent = `Accessed via: ${currentHost}:${currentPort || expectedPort}`;
// The '|| expectedPort' handles cases where the port isn't explicitly in the URL (e.g., default http:80)
// If you are *always* serving on 3000, you could just do:
// ipAndPortParagraph.textContent = `Server Address: ${currentHost}:3000`;


// --- Button click functionality (unchanged) ---
myButton.addEventListener('click', function() {
    outputMessage.textContent = 'Voila! JavaScript changed this text!';
    outputMessage.style.color = '#007bff';
    console.log('Button was clicked at:', new Date().toLocaleTimeString());
});

// Initial console log
console.log('script.js loaded successfully!');
console.log('Current Host:', currentHost);
console.log('Current Port:', currentPort);
console.log('Expected Port (Hardcoded):', expectedPort);