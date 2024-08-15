document.getElementById('heart').addEventListener('click', function() {
    const heart = this;
    const popup = document.getElementById('popup');
    
    // Fade out the heart
    heart.style.opacity = '0';
    
    // Wait for the fade-out transition to finish
    setTimeout(function() {
        heart.style.display = 'none';
        popup.style.display = 'block';
        
        // Fade in the popup
        setTimeout(function() {
            popup.style.opacity = '1';
        }, 50);
    }, 500); // Duration matches the CSS transition for opacity
});
