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

  fetch('https://xboaz4covg35pvwhqttggdcnki0nhogn.lambda-url.us-east-1.on.aws/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
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