// Get the necessary elements
const messageContainer = document.getElementById('message-container');
const messageInput = document.getElementById('message-input');
const sendButton = document.getElementById('send-button');

// Function to handle sending a message
function sendMessage() {
    const message = messageInput.value;

    // Create a new message element
    const messageElement = document.createElement('div');
    messageElement.innerText = message;

    // Append the message element to the message container
    messageContainer.appendChild(messageElement);

    // Clear the input field
    messageInput.value = '';
}

// Event listener for the send button click
sendButton.addEventListener('click', sendMessage);

// Event listener for the enter key press
messageInput.addEventListener('keyup', function(event) {
    if (event.keyCode === 13) {
        sendMessage();
    }
});
