    function validateForm() {
        var emailInput = document.getElementById('email');
        var email = emailInput.value;

        // Simple email validation
        var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert('Please enter a valid email address.');
            return;
        }

        // If validation passes, you can submit the form or perform additional actions
        alert('Form submitted successfully!');

        // Clear the form after submission (optional)
        emailInput.value = '';
    }

    function toggleMobileMenu() {
        var mobileOverlayMenu = document.getElementById('mobileOverlayMenu');
        mobileOverlayMenu.classList.toggle('show-menu');
    }
