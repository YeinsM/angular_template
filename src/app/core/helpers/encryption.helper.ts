import CryptoJS from 'crypto-js';

/**
 * Encryption helper class for encrypting and decrypting text using AES encryption.
 */
export class Encryption {
  static key: string = '09BaFciXt23jMGTNetsPHA0VVLiz0obd'; // AES encryption key

  /**
   * Encrypt a plain text string using AES encryption with a random IV.
   * @param plainText - The plain text to encrypt.
   * @returns The encrypted text in Base64 format.
   */
  static encrypt(plainText: string): string {
    const iv = CryptoJS.lib.WordArray.random(16); // Generate random IV
    const encrypted = CryptoJS.AES.encrypt(
      plainText,
      CryptoJS.enc.Utf8.parse(this.key), // Parse the encryption key
      {
        iv: iv, // Initialization vector
        mode: CryptoJS.mode.CBC, // Cipher Block Chaining mode
        padding: CryptoJS.pad.Pkcs7, // Padding scheme
      }
    );

    const combined = iv.concat(encrypted.ciphertext); // Combine IV and encrypted data
    return CryptoJS.enc.Base64.stringify(combined); // Return encrypted text in Base64 format
  }

  /**
   * Decrypt an encrypted text string using AES decryption.
   * @param cipherText - The encrypted text in Base64 format.
   * @returns The decrypted plain text.
   */
  static decrypt(cipherText: string): string {
    const cipherBytes = CryptoJS.enc.Base64.parse(cipherText); // Parse Base64 encoded text
    const iv = CryptoJS.lib.WordArray.create(cipherBytes.words.slice(0, 4), 16); // Extract IV
    const encryptedText = CryptoJS.lib.WordArray.create(
      cipherBytes.words.slice(4), // Extract encrypted data
      cipherBytes.sigBytes - 16 // Adjust length for IV
    );

    const decrypted = CryptoJS.AES.decrypt(
      CryptoJS.lib.CipherParams.create({ ciphertext: encryptedText }), // Create cipher params
      CryptoJS.enc.Utf8.parse(this.key), // Parse the encryption key
      {
        iv: iv, // Initialization vector
        mode: CryptoJS.mode.CBC, // Cipher Block Chaining mode
        padding: CryptoJS.pad.Pkcs7, // Padding scheme
      }
    );
    return decrypted.toString(CryptoJS.enc.Utf8); // Return decrypted plain text
  }
}
