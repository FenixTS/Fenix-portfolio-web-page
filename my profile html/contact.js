// Wait for the EmailJS script to load
window.onload = function() {
    emailjs.init('BrDEstoC6lvSWQKyB'); // EmailJS User ID
};

document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();

    var firstName = document.getElementById('first-name').value;
    var lastName = document.getElementById('last-name').value;
    var email = document.getElementById('email').value;
    var phoneNumber = document.getElementById('number').value;
    var message = document.getElementById('message').value;

    // Check if all required fields are filled
    if (firstName.trim() !== '' && lastName.trim() !== '' && email.trim() !== '' && phoneNumber.trim() !== '' && message.trim() !== '') {
        const templateParams = {
            from_name: firstName + ' ' + lastName,
            to_name: 'Fenix T.S',
            phone_number: phoneNumber,
            message: message,
            reply_to: email
        };

        emailjs.send('service_g85rg66', 'template_335s9kc', templateParams)
            .then(function(response) {
                console.log('Email sent:', response);
                // Display success alert message
                alert('Email sent successfully!');
                // Redirect to index.html
                window.location.href = 'index.html';
            })
            .catch(function(error) {
                console.error('Error sending email:', error);
                // Handle error scenarios here
            });
    } else {
        alert('Please fill in all the required details.');
    }
});
