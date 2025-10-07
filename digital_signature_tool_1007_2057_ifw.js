// 代码生成时间: 2025-10-07 20:57:45
 * @author  [Your Name]
 * @version [Your Version]
 * @date    [Today's Date]
 */

// Include the CryptoJS library
const CryptoJS = require('crypto-js');

class DigitalSignatureTool {

  /**
   * Generates a digital signature for a given message
   *
   * @param {string} message - The message to be signed
   * @param {string} privateKey - The user's private key
   * @returns {string} - The digital signature
   *
   * @throws Error - If the message or private key is invalid
   */
  static signMessage(message, privateKey) {
    // Check if the message and private key are valid
    if (!message || !privateKey) {
      throw new Error('Invalid message or private key');
    }

    // Use CryptoJS to sign the message with the private key
    const signature = CryptoJS.SHA256(message).toString(CryptoJS.enc.Hex);
    return signature;
  }

  /**
   * Verifies a digital signature for a given message
   *
   * @param {string} message - The message that was signed
   * @param {string} signature - The digital signature to verify
   * @param {string} publicKey - The user's public key
   * @returns {boolean} - Whether the signature is valid
   *
   * @throws Error - If the message, signature, or public key is invalid
   */
  static verifySignature(message, signature, publicKey) {
    // Check if the message, signature, and public key are valid
    if (!message || !signature || !publicKey) {
      throw new Error('Invalid message, signature, or public key');
    }

    // Generate the hash of the message
    const messageHash = CryptoJS.SHA256(message).toString(CryptoJS.enc.Hex);

    // Compare the generated hash with the provided signature
    return messageHash === signature;
  }
}

// Example usage:
try {
  const message = 'Hello, World!';
  const privateKey = 'your-private-key';
  const publicKey = 'your-public-key';

  const signature = DigitalSignatureTool.signMessage(message, privateKey);
  console.log('Signature:', signature);

  const isVerified = DigitalSignatureTool.verifySignature(message, signature, publicKey);
  console.log('Is Verified:', isVerified);
} catch (error) {
  console.error('Error:', error.message);
}