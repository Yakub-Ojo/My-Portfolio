//Get the submit button, name, email, message input elements and form
const submitButton = document.getElementById('submit-btn');
const fullNameInput = document.getElementById('name');
const messageInput = document.getElementById('msg');
const emailInput = document.getElementById('email');
const form = document.getElementById('form');
// Get the error elements for name, email and message fields
const messageError = document.getElementById('messageError');
const emailError = document.getElementById('emailError');
const fullNameError = document.getElementById('fullNameError');
// Define a function to reset input errors after 3 seconds
const resetInputError = (inputElement, errorElement) => {
  setTimeout(() => {
    inputElement.style.border = 'none';
    errorElement.style.display = 'none';
  }, 2000);
};
// Add an event listener to the submit button
submitButton.addEventListener('click', (event) => {
  event.preventDefault();
  // Define a regular expression for email validation
  const emailRegex = /^[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,}$/;
  // Validate the name field
  if (fullNameInput.value === '') {
    fullNameError.textContent = 'Name cannot be empty.';
    fullNameInput.style.border = '2px solid red';
    fullNameError.style.display = 'block';
    resetInputError(fullNameInput, fullNameError);
  }
  // Validate the email field
  else if (emailInput.value === '') {
    emailError.textContent = 'Email Field cannot be empty';
    emailInput.style.border = '2px solid red';
    emailError.style.display = 'block';
    resetInputError(emailInput, emailError);
  }
  // Validate the email format
  else if (!emailRegex.test(emailInput.value)) {
    emailError.textContent = 'Enter a valid email in lowercase';
    emailInput.style.border = '2px solid red';
    emailError.style.display = 'block';
    resetInputError(emailInput, emailError);
  }
  // Validate the message field
  else if (messageInput.value === '') {
    messageError.textContent = 'Message is Required';
    messageInput.style.border = '2px solid red';
    messageError.style.display = 'block';
    resetInputError(messageInput, messageError);
  }
  // Validate the message length
  else if (messageInput.value.length > 500) {
    messageError.textContent = 'Message cannot exceed 500 Characters';
    messageInput.style.border = '2px solid red';
    messageError.style.display = 'block';
    resetInputError(messageInput, messageError);
  }
  // Submit the form if all fields are validated
  else {
    messageError.textContent = 'Message Sent';
    messageError.style.color = 'green';
    messageError.style.display = 'block';
    form.submit();
    fullNameInput.value = '';
    messageInput.value = '';
    emailInput.value = '';
  }
});