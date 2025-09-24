// 代码生成时间: 2025-09-24 12:45:08
function NotificationSystem() {
  // Notification messages array
  this.messages = [];
}

/**
 * Adds a new message to the notification system.
 * @param {string} message - The message to be added.
 */
NotificationSystem.prototype.addMessage = function(message) {
  if (typeof message !== 'string') {
    throw new Error('Message must be a string.');
  }
  this.messages.push(message);
};

/**
 * Removes a message from the notification system.
 * @param {number} index - The index of the message to be removed.
 */
NotificationSystem.prototype.removeMessage = function(index) {
  if (index < 0 || index >= this.messages.length) {
    throw new Error('Index out of bounds.');
  }
  this.messages.splice(index, 1);
};

/**
 * Clears all messages from the notification system.
 */
NotificationSystem.prototype.clearMessages = function() {
  this.messages = [];
};

/**
 * Displays messages using D3.
 * This method is responsible for rendering the notifications on the webpage.
 * @param {string} selector - The CSS selector where notifications will be appended.
 */
NotificationSystem.prototype.displayMessages = function(selector) {
  const container = d3.select(selector);
  // Clear existing messages
  container.selectAll('.notification').remove();
  
  // Render new messages
  this.messages.forEach((message, index) => {
    container.append('div')
      .attr('class', 'notification')
      .text(message);
  });
};

// Usage

// Create an instance of NotificationSystem
const notificationSystem = new NotificationSystem();

// Add messages
notificationSystem.addMessage('Message 1');
notificationSystem.addMessage('Message 2');

// Display messages in the DOM
notificationSystem.displayMessages('#notifications');

// Error handling example
try {
  notificationSystem.addMessage(123); // Should throw an error
} catch (error) {
  console.error(error.message);
}

// Remove a message
notificationSystem.removeMessage(0); // Removes 'Message 1'

// Clear all messages
notificationSystem.clearMessages();