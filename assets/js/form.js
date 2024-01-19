document.getElementById('contact-form').addEventListener('submit', function (e) {

  // Prevent default form submission
  e.preventDefault();

  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const phone = document.getElementById('phone').value;
  const subject = document.getElementById('subject').value;
  const message = document.getElementById('message').value;

  if (!name || !email || !phone || !subject || !message) {
    e.preventDefault();
    alert('Please fill out all fields.');
    return;
  }

  fetch('https://app.abakro.com/leads/create', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Cross-Origin-Embedder-Policy': 'https://app.abakro.com',
    },
    body: JSON.stringify({
      name,
      email,
      phone,
      subject,
      message,
    }),
  })

});