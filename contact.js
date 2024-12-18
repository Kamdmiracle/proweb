const contactForm = document.getElementById('contact-form');
const successMessage = document.getElementById('success-message');

contactForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const phone = document.getElementById('phone').value;
  const service = document.getElementById('service').value;
  const message = document.getElementById('message').value;

  // Basic validation (add more robust validation as needed)
  if (!name || !email || !phone || !service || !message) {
    alert('Please fill in all fields.');
    return;
  }

  // Send the form data using AJAX
  const xhr = new XMLHttpRequest();
  xhr.open('POST', 'process.php', true);
  xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');

  xhr.onload = function() {
    if (xhr.status === 200) {
      successMessage.classList.remove('hidden');
      contactForm.reset();
    } else {
      alert('Error sending message. Please try again.');
    }
  };

  const formData = new FormData(contactForm);
  xhr.send(formData);
});
