let currentSlide = 0;
const testimonials = document.querySelectorAll('.testimonial');
const indicators = document.querySelectorAll('.indicator');

// Function to set the active slide and indicator
function setSlide(index) {
    testimonials[currentSlide].classList.remove('active');
    indicators[currentSlide].classList.remove('active');
    currentSlide = index;
    testimonials[currentSlide].classList.add('active');
    indicators[currentSlide].classList.add('active');
}

// Function to automatically slide after every 5 seconds
function autoSlide() {
    setSlide((currentSlide + 1) % testimonials.length); // Loop to the first slide after the last one
}

// Set the first slide as active initially
setSlide(currentSlide);

// Auto-slide every 5 seconds
setInterval(autoSlide, 3000);

// Add event listeners to the indicators
indicators.forEach((indicator, index) => {
    indicator.addEventListener('click', () => setSlide(index));
});
