// 代码生成时间: 2025-10-14 01:48:25
// Required D3 library
const d3 = require('d3');

// FormValidator class declaration
class FormValidator {
  constructor() {
    // Initialize with empty errors object
    this.errors = {};
  }

  // Validate an individual field
  validateField(fieldName, value) {
    // Clear any previous error for the field
    this.clearError(fieldName);

    // Define validation rules for each field
    const validationRules = {
      'username': {
        required: true,
        regex: /^[a-zA-Z0-9_]*$/
      },
      'email': {
        required: true,
        validator: this.validateEmail
      },
      'password': {
        required: true,
        minLength: 8
      }
    };

    // Check if the field has validation rules
    if (validationRules[fieldName]) {
      const rules = validationRules[fieldName];

      // Check if the field is required
      if (rules.required && !value) {
        this.addError(fieldName, `The ${fieldName} is required.`);
      } else if (rules.regex && !rules.regex.test(value)) {
        this.addError(fieldName, `The ${fieldName} is invalid.`);
      } else if (rules.validator && !rules.validator(value)) {
        this.addError(fieldName, `The ${fieldName} is invalid.`);
      } else if (rules.minLength && value.length < rules.minLength) {
        this.addError(fieldName, `The ${fieldName} must be at least ${rules.minLength} characters long.`);
      }
    }
  }

  // Add an error message for a field
  addError(fieldName, message) {
    this.errors[fieldName] = message;
  }

  // Clear error message for a field
  clearError(fieldName) {
    delete this.errors[fieldName];
  }

  // Validate email format
  validateEmail(email) {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return emailRegex.test(email);
  }

  // Validate the entire form
  validateForm(formData) {
    this.errors = {}; // Reset errors

    // Validate each field in the form
    Object.keys(formData).forEach(fieldName => {
      this.validateField(fieldName, formData[fieldName]);
    });

    return Object.keys(this.errors).length === 0; // True if no errors
  }
}

// Example usage:
const validator = new FormValidator();

// Simulate form data
const formData = {
  username: 'user123',
  email: 'user@example.com',
  password: 'password123'
};

// Validate the form data
const isValid = validator.validateForm(formData);

// Log errors or success message
if (isValid) {
  console.log('Form is valid!');
} else {
  console.log('Form contains errors:', validator.errors);
}