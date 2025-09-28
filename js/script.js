// Initialize Lucide Icons
lucide.createIcons();

// 1. Mobile Menu Toggle
function toggleMenu() {
    const menu = document.getElementById('mobile-menu');
    const buttonIcon = document.querySelector('#mobile-menu-btn i');
    menu.classList.toggle('hidden');
    
    // Toggle menu icon
    if (menu.classList.contains('hidden')) {
        buttonIcon.setAttribute('data-lucide', 'menu');
    } else {
        buttonIcon.setAttribute('data-lucide', 'x');
    }
    lucide.createIcons(); // Re-initialize icons after changing the attribute
}
document.getElementById('mobile-menu-btn').addEventListener('click', toggleMenu);

// 2. Form Submission Handling
function handleFormSubmit(event, formName) {
    event.preventDefault();
    
    // In a real application, replace this with an actual API call (e.g., fetch(API_ENDPOINT, { method: 'POST', body: formData }))
    
    // Simulate successful submission and show the modal
    showModal(formName);
    
    // Reset the form
    event.target.reset();
}

function showModal(formName) {
    const modal = document.getElementById('status-modal');
    const modalTitle = document.getElementById('modal-title');
    const modalMessage = document.getElementById('modal-message');
    
    modalTitle.textContent = 'Inquiry Received!';
    modalMessage.textContent = `Thank you for submitting the ${formName}. A PAIC representative will contact you shortly to follow up on your request.`;
    
    // Show modal and apply fade/scale transition
    modal.classList.remove('hidden');
    setTimeout(() => {
        modal.style.opacity = '1';
        modal.querySelector('.bg-white').style.transform = 'scale(1)';
    }, 10);
}

function closeModal(event) {
    // Check if the click was directly on the overlay or the close button
    if (event && event.target.id !== 'status-modal' && !event.currentTarget.classList.contains('bg-white')) return; 
    
    const modal = document.getElementById('status-modal');
    
    // Apply fade/scale out transition
    modal.style.opacity = '0';
    modal.querySelector('.bg-white').style.transform = 'scale(0.95)';
    
    setTimeout(() => modal.classList.add('hidden'), 300); // Wait for transition before hiding
}

// 3. Testimonial Scrolling (for the arrow buttons)
function scrollTestimonials(direction) {
    const container = document.getElementById('testimonial-container');
    
    // Calculate scroll amount based on the width of a single card + space (approx 1/3 of the container width on large screens)
    // Using scrollWidth / (number of cards visible) for a smooth step.
    const cardWidth = container.querySelector('.flex-shrink-0').offsetWidth;
    const scrollAmount = cardWidth + 24; // Card width + 6 (24px) spacing
    
    container.scrollBy({
        left: direction * scrollAmount,
        behavior: 'smooth'
    });
}