// Wait for the EmailJS script to load
window.onload = function () {
    emailjs.init('BrDEstoC6lvSWQKyB'); // EmailJS User ID
};

document.getElementById('Hire form').addEventListener('submit', function (event) {
    event.preventDefault();

    let firstName = document.getElementById('First name').value;
    let lastName = document.getElementById('Last name').value;
    let companyname = document.getElementById('Company name').value;
    let email = document.getElementById('Email').value;
    let contactnumber = document.getElementById('Contact number').value;
    let street = document.getElementById('Street').value;
    let city = document.getElementById('City').value;
    let district = document.getElementById('District').value;
    let state = document.getElementById('State').value;
    let pincode = document.getElementById('Pincode').value;
    let jobtitle = document.getElementById('Job title').value;
    let jobroll = document.getElementById('job roll').value;
    let department = document.getElementById('Department').value;
    let companyculture = document.getElementById('Company culture').value;
    let jobtype = document.getElementById('Job type').value;

    let locationRadios = document.getElementsByName('location');
    let selectedLocation = '';
    for (const radio of locationRadios) {
        if (radio.checked) {
            selectedLocation = radio.value;
            break;
        }
    }

    // console.log(selectedLocation);

    let qualification = document.getElementById('Qualification').value;
    let skillsneeded = document.getElementById('Skills needed').value;
    let experience = document.getElementById('Experience').value;
    //  .trim() is used for fill all the inputs ,if not show an alert message
    if (
        firstName.trim() !== '' &&
        lastName.trim() !== '' &&
        companyname.trim() !== '' &&
        email.trim() !== '' &&
        contactnumber.trim() !== '' &&
        street.trim() !== '' &&
        city.trim() !== '' &&
        district.trim() !== '' &&
        state.trim() !== '' &&
        pincode.trim() !== '' &&
        jobtitle.trim() !== '' &&
        jobroll .trim() !== '' &&
        department.trim() !== '' &&
        companyculture.trim() !== '' &&
        jobtype.trim() !== '' &&
        selectedLocation.trim() !== '' &&
        qualification.trim() !== '' &&
        skillsneeded.trim() !== '' &&
        experience.trim() !== ''
    ) {
        const templateParams = 
            {
                from_name: firstName + ' ' + lastName,
                to_name: 'Fenix T.S',
                contact_number: contactnumber,
                Contact_Information:email + ' / ' + contactnumber,
                email:email,
                street:street,
                city:city,
                district:district,
                state:state,
                pincode:pincode,
                Candidate_name: 'Fenix T.S',
                company_name: companyname,
                Department_Team_Name : department,
                company_culture:companyculture,
                job_roll:jobroll,
                Job_title:jobtitle,
                Office_Location:locationRadios,
                job_type:jobtype,
                Qualifications:qualification,
                Skills:skillsneeded, 
                Exp:experience, 
                reply_to: email
            };

            emailjs.send('service_t155ve8', 'template_1vig8og', templateParams)
            .then(function (response) 
            {
                console.log('Email sent:', response);
                // Display success alert message
                alert('Email sent successfully!');
                // Redirect to index.html
                window.location.href = 'skills.html';
            })
            .catch(function (error) 
            {
                console.error('Error sending email:', error);
                // Handle error scenarios here
            });
    } else {
        alert('Please fill in all the required details.');
    }     
});
