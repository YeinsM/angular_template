import * as CryptoJS from 'crypto-js';

export class EncryptionService {
    private key: string = 'your-secret-key-32chars-length'; // Make sure the key is the same as used in C#

    // Encrypt a plain text
    encrypt(plainText: string): string {
        const encrypted = CryptoJS.AES.encrypt(plainText, CryptoJS.enc.Utf8.parse(this.key), {
            iv: CryptoJS.enc.Utf8.parse('0000000000000000'),
            mode: CryptoJS.mode.CBC,
            padding: CryptoJS.pad.Pkcs7
        });

        return encrypted.toString();
    }

    // Decrypt an encrypted text
    decrypt(cipherText: string): string {
        const decrypted = CryptoJS.AES.decrypt(cipherText, CryptoJS.enc.Utf8.parse(this.key), {
            iv: CryptoJS.enc.Utf8.parse('0000000000000000'),
            mode: CryptoJS.mode.CBC,
            padding: CryptoJS.pad.Pkcs7
        });

        return decrypted.toString(CryptoJS.enc.Utf8);
    }
}
