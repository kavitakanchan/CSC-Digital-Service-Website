// Service Modal JavaScript
document.addEventListener('DOMContentLoaded', function() {
    const modal = document.getElementById('serviceModal');
    const serviceButtons = document.querySelectorAll('.service-btn');
    const closeModal = document.querySelector('.close-modal');
    const serviceForm = document.getElementById('serviceForm');
    
    // Service data
    const services = {
        aadhaar: {
            title: 'आधार सेवाएं',
            description: 'आधार कार्ड से संबंधित सभी सेवाएं जैसे आधार अपडेशन, नाम सुधार, जन्म तिथि सुधार, मोबाइल नंबर अपडेट, पता परिवर्तन आदि। हम आपको पूरी प्रक्रिया में मदद करेंगे और आपके दस्तावेजों को सही तरीके से सत्यापित करेंगे।'
        },
        pan: {
            title: 'पैन कार्ड सेवाएं',
            description: 'नया पैन कार्ड आवेदन, पैन कार्ड सुधार, पैन-आधार लिंकिंग, पैन कार्ड डुप्लीकेट आदि सेवाएं। हम आपके सभी दस्तावेजों को सही तरीके से जमा करके प्रक्रिया को आसान बनाते हैं।'
        },
        banking: {
            title: 'बैंकिंग सेवाएं',
            description: 'बैंक खाता खोलना, पैसा ट्रांसफर, मिनी स्टेटमेंट, पासबुक अपडेट, चेक बुक आवेदन, लोन आवेदन आदि सेवाएं। हम आपको बैंकिंग प्रक्रियाओं में पूरी सहायता प्रदान करते हैं।'
        },
        insurance: {
            title: 'बीमा सेवाएं',
            description: 'जीवन बीमा, स्वास्थ्य बीमा, वाहन बीमा, प्रीमियम भुगतान, क्लेम प्रक्रिया आदि सेवाएं। हम आपको सही बीमा योजना चुनने और सभी कागजी कार्रवाई में मदद करते हैं।'
        },
        bill: {
            title: 'बिल भुगतान सेवाएं',
            description: 'बिजली बिल, पानी बिल, गैस बिल, मोबाइल रिचार्ज, DTH रिचार्ज, ब्रॉडबैंड बिल भुगतान आदि। हमारे यहां सभी प्रमुख सेवा प्रदाताओं के बिल का भुगतान कर सकते हैं।'
        },
        government: {
            title: 'सरकारी योजनाएं',
            description: 'पेंशन, किसान सम्मान निधि, उज्ज्वला योजना, आवास योजना, स्वास्थ्य बीमा योजनाएं आदि। हम आपको सरकारी योजनाओं के लिए आवेदन करने और लाभ प्राप्त करने में मदद करते हैं।'
        }
    };
    
    // Open modal when service button is clicked
    serviceButtons.forEach(button => {
        button.addEventListener('click', function() {
            const serviceCard = this.closest('.service-card');
            const serviceType = serviceCard.getAttribute('data-service');
            const service = services[serviceType];
            
            document.getElementById('modalServiceTitle').textContent = service.title;
            document.getElementById('modalServiceDescription').textContent = service.description;
            
            modal.style.display = 'block';
            document.body.style.overflow = 'hidden';
        });
    });
    
    // Close modal when X is clicked
    closeModal.addEventListener('click', function() {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    });
    
    // Close modal when clicking outside
    window.addEventListener('click', function(e) {
        if (e.target === modal) {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    });
    
    // Service form submission
    if (serviceForm) {
        serviceForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = {
                name: this.name.value,
                phone: this.phone.value,
                email: this.email.value,
                message: this.message.value,
                service: document.getElementById('modalServiceTitle').textContent
            };
            
            // Here you would typically send the data to your server
            console.log('Service request submitted:', formData);
            
            // Show success message
            alert(`धन्यवाद ${formData.name}! आपका ${formData.service} के लिए अनुरोध सफलतापूर्वक भेज दिया गया है। हम जल्दी ही आपसे संपर्क करेंगे।`);
            
            // Close modal and reset form
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
            this.reset();
        });
    }
});