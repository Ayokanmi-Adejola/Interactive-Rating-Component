# Frontend Mentor - Interactive Rating Component Solution

This is a solution to the [Interactive rating component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/interactive-rating-component-koxpeBUmI). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Select and submit a number rating
- See the "Thank you" card state after submitting a rating

### Screenshot

![Rating State](./design/desktop-design.jpg)
![Thank You State](./design/desktop-thank-you-state.jpg)


## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid for layout structure
- Mobile-first workflow
- Vanilla JavaScript for interactivity
- Responsive design principles

### What I learned

This project was a great opportunity to practice creating an interactive component with multiple states. I learned how to effectively toggle between different UI states based on user interaction and implement a clean, user-friendly interface.

Some key learnings:

- Creating a clean, responsive card layout with CSS that works across different screen sizes
- Implementing interactive rating buttons with proper state management and visual feedback
- Using JavaScript to handle user input and update the UI accordingly
- Creating smooth transitions between different component states
- Implementing proper color contrast for accessibility
- Using data attributes to store and retrieve values in JavaScript

Here are some code snippets I'm particularly proud of:

```html
<!-- Structured HTML for the rating buttons with data attributes -->
<div class="rating-buttons">
  <button class="rating-btn" data-value="1">1</button>
  <button class="rating-btn" data-value="2">2</button>
  <button class="rating-btn" data-value="3">3</button>
  <button class="rating-btn" data-value="4">4</button>
  <button class="rating-btn" data-value="5">5</button>
</div>
```

```css
/* Clean hover and active states for better user experience */
.rating-btn:hover {
  background-color: hsl(25, 97%, 53%);
  color: white;
}

.rating-btn.active {
  background-color: hsl(217, 12%, 63%);
  color: white;
}

/* Responsive card design with gradient background */
.card {
  background: radial-gradient(circle at top, hsl(213, 19%, 18%), hsl(213, 19%, 12%));
  max-width: 412px;
  border-radius: 30px;
  padding: 2rem;
}
```

```js
// Clean event handling for rating selection
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

// Form submission with validation
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
```

### Continued development

In future projects, I'd like to focus on:

- Implementing more complex animations and transitions to enhance user experience
- Exploring more advanced JavaScript patterns for state management in larger applications
- Improving accessibility features for interactive components (ARIA attributes, keyboard navigation)
- Adding unit tests for JavaScript functionality to ensure code reliability
- Implementing form validation in more sophisticated ways
- Exploring CSS variables for more maintainable styling
- Learning more about performance optimization for web applications

### Useful resources

- [MDN Web Docs](https://developer.mozilla.org) - Comprehensive documentation for HTML, CSS, and JavaScript that helped me understand DOM manipulation.
- [CSS-Tricks](https://css-tricks.com) - Great resource for CSS techniques and best practices, especially their guide on Flexbox.
- [JavaScript.info](https://javascript.info) - Detailed explanations of JavaScript concepts that helped me implement the interactive functionality.
- [Frontend Mentor](https://www.frontendmentor.io) - The challenge platform that provided the design and requirements.
- [Google Fonts](https://fonts.google.com) - For the Overpass font used in this project.

## Author

- Frontend Mentor - [@Ayokanmi-Adejola](https://www.frontendmentor.io/profile/Ayokanmi-Adejola)


## Acknowledgments

I'd like to thank Frontend Mentor for providing this challenge and the design files. The project helped me improve my front-end skills and gave me the opportunity to practice creating interactive components with JavaScript.

I also appreciate the Frontend Mentor community for their feedback and support on previous projects, which has helped me improve my coding practices.
