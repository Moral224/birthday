document.getElementById('reveal-button').addEventListener('click', function() {
    const revealText = document.getElementById('reveal-text');
    
    // Show the message when the "reveal" button is clicked
    if (revealText.classList.contains('d-none')) {
        revealText.classList.remove('d-none');
        this.classList.add('d-none');  // Hide the "reveal" button
    }
    
    // Insert the girlfriend's name dynamically (optional)
    document.getElementById('her-name').textContent = "Ayomi";  // Replace with the actual name
});

// Hide the message when the "Hide Message" button is clicked
document.getElementById('hide-button').addEventListener('click', function() {
    const revealText = document.getElementById('reveal-text');
    const revealButton = document.getElementById('reveal-button');
    
    revealText.classList.add('d-none');  // Hide the message
    revealButton.classList.remove('d-none');  // Show the "reveal" button again
});
