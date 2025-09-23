// 代码生成时间: 2025-09-24 00:47:37
function FormValidator(formId) {
  // Store the form element
  this.form = document.getElementById(formId);
  if (!this.form) {
    throw new Error('Form element not found');
  }

  // Store the form fields
  this.fields = this.form.querySelectorAll('input');

  // Validate the form on submit
  this.form.addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent the form from submitting
    let isValid = true;
    let errorMessages = [];

    // Iterate over each field and validate
    this.fields.forEach((field) => {
      // Check if the field is required and empty
      if (field.hasAttribute('required') && !field.value.trim()) {
        isValid = false;
        errorMessages.push(field.name + ' is required');
      } else if (field.type === 'email' && !validateEmail(field.value)) {
        isValid = false;
        errorMessages.push('Invalid email format for ' + field.name);
      }
    });

    // Display error messages if any
    if (!isValid) {
      displayErrorMessages(errorMessages);
    } else {
      // If the form is valid, submit it or handle it as needed
      console.log('Form is valid! Submitting...');
      this.form.submit();
    }
  });
}

// Helper function to validate email
function validateEmail(email) {
  const regex = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[\w-]{2,4}$/;
  return regex.test(email);
}

// Helper function to display error messages
function displayErrorMessages(errorMessages) {
  const errorContainer = document.createElement('div');
  errorContainer.innerHTML = '<ul></ul>';
  const errorList = errorContainer.querySelector('ul');
  errorMessages.forEach((message) => {
    const listItem = document.createElement('li');
    listItem.textContent = message;
    errorList.appendChild(listItem);
  });
  document.body.appendChild(errorContainer);
}

// Example usage:
// Instantiate the validator with the form ID
// new FormValidator('myForm');
