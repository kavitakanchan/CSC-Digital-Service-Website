// Main JavaScript for the website
document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Contact form submission
    const contactForm = document.getElementById('messageForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = {
                name: this.name.value,
                email: this.email.value,
                phone: this.phone.value,
                message: this.message.value
            };
            
            // Here you would typically send the data to your server
            console.log('Contact form submitted:', formData);
            
            // Show success message
            alert('आपका संदेश भेज दिया गया है। हम जल्दी ही आपसे संपर्क करेंगे।');
            
            // Reset form
            this.reset();
        });
    }
    
    // Mobile menu toggle (if needed in future)
    // You can add mobile menu functionality here when needed
});

  function openPopup() {
    document.getElementById("popupForm").classList.add("active");
  }

  function closePopup() {
    document.getElementById("popupForm").classList.remove("active");
  }

