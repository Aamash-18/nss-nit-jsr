import emailjs from 'emailjs-com';

function sendEmail(e) {
//   e.preventDefault(); // stop form refresh

  emailjs.sendForm('service_n4kwkt4', 'template_vih00k2', e.target, 'M3kgWV1nyNEK7pMG8')
    .then((result) => {
        console.log(result.text);
        alert('Message sent successfully!');
    }, (error) => {
        console.log(error.text);
        alert('Failed to send the message, please try again.');
    });

  e.target.reset(); // clear the form
}

export default sendEmail;