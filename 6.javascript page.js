// Contact form validation
document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        
        // Get form fields
        const name = form.querySelector('#name').value;
        const email = form.querySelector('#email').value;
        const message = form.querySelector('#message').value;

        // Validate form fields
        if (name.trim() === '' || email.trim() === '' || message.trim() === '') {
            alert('Please fill in all fields.');
            return;
        }

        // Additional validation (benficataso01@gmail.com)
        // You can add more validation here if needed
        
        // If all fields are valid, submit the form
        form.submit();
    });
});
