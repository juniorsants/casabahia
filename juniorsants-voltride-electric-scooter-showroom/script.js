document.addEventListener('DOMContentLoaded', function() {
    // Initialize quantity selector
    const minusBtn = document.querySelector('button:first-of-type');
    const plusBtn = document.querySelector('button:last-of-type');
    const quantityInput = document.querySelector('input[type="number"]');
    
    minusBtn.addEventListener('click', () => {
        let currentValue = parseInt(quantityInput.value);
        if (currentValue > 1) {
            quantityInput.value = currentValue - 1;
        }
    });
    
    plusBtn.addEventListener('click', () => {
        let currentValue = parseInt(quantityInput.value);
        quantityInput.value = currentValue + 1;
    });
    
    // Color selection
    const colorButtons = document.querySelectorAll('button[class*="w-10 h-10 rounded-full"]');
    colorButtons.forEach(button => {
        button.addEventListener('click', () => {
            colorButtons.forEach(btn => btn.classList.remove('ring-2', 'ring-primary-200'));
            button.classList.add('ring-2', 'ring-primary-200');
        });
    });
    
    // Thumbnail image selection
    const thumbnails = document.querySelectorAll('div.grid.grid-cols-4 img');
    const mainImage = document.querySelector('img.object-cover');
    
    thumbnails.forEach(thumbnail => {
        thumbnail.addEventListener('click', () => {
            const newSrc = thumbnail.src.replace('/200x200/', '/1200x630/');
            mainImage.src = newSrc;
        });
    });
    
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});