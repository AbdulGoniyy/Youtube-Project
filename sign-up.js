function submitForm() {
  const emailInput = document.getElementById('email');
  const confirmationCodeInput = document.getElementById('confirmationCode');
  const emailConfirmationSection = document.getElementById('emailConfirmation');

  // Validate email format
  if (!validateEmail(emailInput.value)) {
     alert('Please enter a valid email address.');
     return;
  }

  // Send confirmation code (simulated)
  const confirmationCode = generateConfirmationCode(); // Simulated function
  alert(`A confirmation code has been sent to ${emailInput.value}.`);

  // Display email confirmation section
  emailConfirmationSection.style.display = 'block';

  // Example: You can send the confirmation code to the server for validation
  // In a real-world scenario, this should be handled securely on the server.
}

function validateEmail(email) {
  // Simple email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

function generateConfirmationCode() {
  // Simulated function to generate a random confirmation code
  return Math.floor(1000 + Math.random() * 9000);
}
