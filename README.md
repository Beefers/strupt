# strupt

A string "encryptor".

## Example usage

```ts
// Import encrypt and decrypt
import { encrypt, decrypt } from "strupt";

// Define our string to encrypt
const toEncrypt = "Hello World!";

// Encrypt it with emojis and words enabled
const encrypted = encrypt(toEncrypt, { emojis: true, words: true });

// Decrypt the encrypted string using the encrypted string and the encryption key
const decrypted = decrypt(encrypted.string, encrypted.key);

// Log the outputs!
console.log(`ORIGINAL:\n${toEncrypt}\n`)
console.log(`ENCRYPTED:\n${encrypted.string}\n`);
console.log(`DECRYPTED:\n${decrypted}\n`);
```

### Example output

```
ORIGINAL:
Hello World!

ENCRYPTED:
lundividedlyticklersl🚤ofarmeredisburthenwreekrglairinesseslteratismshbellydsalmon!recalescencesoscalene

DECRYPTED:
Hello World!
```