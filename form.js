// Get the submit button, name, email, message input elements and form
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
  } else if (emailInput.value === '') {
    emailError.textContent = 'Email Field cannot be empty';
    emailInput.style.border = '2px solid red';
    emailError.style.display = 'block';
    resetInputError(emailInput, emailError);
  } else if (!emailRegex.test(emailInput.value)) {
    emailError.textContent = 'Enter a valid email in lowercase';
    emailInput.style.border = '2px solid red';
    emailError.style.display = 'block';
    resetInputError(emailInput, emailError);
  } else if (messageInput.value === '') {
    messageError.textContent = 'Message is Required';
    messageInput.style.border = '2px solid red';
    messageError.style.display = 'block';
    resetInputError(messageInput, messageError);
  } else if (messageInput.value.length > 500) {
    messageError.textContent = 'Message cannot exceed 500 Characters';
    messageInput.style.border = '2px solid red';
    messageError.style.display = 'block';
    resetInputError(messageInput, messageError);
  } else {
    messageError.textContent = 'Message Sent';
    messageError.style.color = 'green';
    messageError.style.display = 'block';
    form.submit();
    fullNameInput.value = '';
    messageInput.value = '';
    emailInput.value = '';
  }
});

// SAVE DATA IN LOCAL STORAGE
// Function to save user input data to local storage
function savaData() {
  // Get user input values
  const userData = {
    username: fullNameInput.value,
    email: emailInput.value,
    message: messageInput.value,
  };
  // Store user data in local storage
  localStorage.setItem('userData', JSON.stringify(userData));
}
// Add event listeners to input fields to trigger save function on focus out
fullNameInput.addEventListener('focusout', savaData);
emailInput.addEventListener('focusout', savaData);
messageInput.addEventListener('focusout', savaData);

const data = JSON.parse(localStorage.getItem('userData'));
if (data) {
  fullNameInput.value = data.username;
  emailInput.value = data.email;
  messageInput.value = data.message;
}
