document.addEventListener('DOMContentLoaded', () => {
    const ratingState = document.querySelector('.rating-state');
    const thankYouState = document.querySelector('.thank-you-state');
    const ratingButtons = document.querySelectorAll('.rating-btn');
    const submitButton = document.querySelector('.submit-btn');
    const ratingDisplay = document.getElementById('rating-value');
    
    let selectedRating = 0;
    
    // Add click event listeners to rating buttons
    ratingButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all buttons
            ratingButtons.forEach(btn => btn.classList.remove('active'));
            
            // Add active class to clicked button
            button.classList.add('active');
            
            // Store the selected rating
            selectedRating = button.getAttribute('data-value');
        });
    });
    
    // Add click event listener to submit button
    submitButton.addEventListener('click', () => {
        if (selectedRating > 0) {
            // Display the selected rating in the thank you state
            ratingDisplay.textContent = selectedRating;
            
            // Hide rating state and show thank you state
            ratingState.style.display = 'none';
            thankYouState.style.display = 'block';
        } else {
            // Alert user to select a rating if none is selected
            alert('Please select a rating before submitting');
        }
    });
});
