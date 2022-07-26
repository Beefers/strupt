// Import a list of English words
import words from "an-array-of-english-words";

// Import a list of emojis
import emojis from "./lib/emojis";

// Import types
import { Key, EncryptionOptions } from "strupt";

export function encrypt(string: string, options: EncryptionOptions = { emojis: true, words: true }): { string: string, key: Key } {
    // Check that atleast one of the options is true
    if (!options.emojis && !options.words) {
        throw new Error("At least one of the options must be true");
    }

    // Create an array of padding to pick from based on the options provided
    let toPick = new Array<string>();
    if (options.emojis) toPick = [...toPick, ...emojis];
    if (options.words) toPick = [...toPick, ...words];

    // Scramble the toPick array
    toPick = toPick.sort(() => Math.random() - 0.5);

    // Prepare an empty key
    let key: Key = {};

    // Prepare an array to build the encrypted string
    let encryptedString = [];

    // Store the original length as a seperate variable to prevent infinite loops
    let originalLength = string.length;

    // Loop through the string, inserting a word after every character
    for (let i = 0; i < originalLength; i++) {
        // Get a random word
        let word = toPick.filter(i => !key[i])[Math.floor(Math.random() * toPick.length)];

        // Insert three things into the key, using the word as the property name:
        // 1. The original index of the letter
        // 2. A boolean for the casing of the original letter: true for capital, false for lowercase
        // 3. A boolean for if the current letter is a space
        key[word] = [i, string[i] === string[i].toUpperCase(), string[i] === " "];

        // Insert the word into the string
        encryptedString.push((string[i] !== " " ? string[i].toLowerCase() : "") + word);
    }

    // Shuffle the encrypted string
    encryptedString = encryptedString.sort(() => Math.random() - 0.5);

    // Return the encrypted string and the key
    return {
        string: encryptedString.join(""), 
        key: key,
    };
}

export function decrypt(string: string, key: Key): string {
    // Prepare an array to build the decrypted string
    let decryptedString = [];

    // Iterate over the key, finding the original index of each letter
    for (let [k, v] of Object.entries(key)) {
        if (string.includes(k)) {
            // Find the index of the letter in the string
            let index = string.indexOf(k);

            //  Insert the letter into the string, checking if it is a space
            let letter = v[2] ? " " : string.charAt(index - 1);

            // Push the found letter to the decrypted string, checking if it is capital or lowercase
            decryptedString.push(v[1] ? letter.toUpperCase() : letter.toLowerCase());
        }
    }

    // If the length of the decrypted string is 0, throw an error, as this shouldn't ever happen
    if (decryptedString.length === 0) throw new Error("Decrypted string length is 0 - is your key correct?");

    // Return the decrypted string
    return decryptedString.join("");
}