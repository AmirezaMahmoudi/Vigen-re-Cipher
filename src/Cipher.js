// src/cipher.js
export const vigenereCipher = (text, key, encrypt = true) => {
    const keyLength = key.length;
    const keyCodes = key.toUpperCase().split('').map((char) => char.charCodeAt(0) - 65);
  
    return text.split('').map((char, i) => {
      const charCode = char.charCodeAt(0);
      if (char >= 'A' && char <= 'Z') {
        const shift = keyCodes[i % keyLength] * (encrypt ? 1 : -1);
        return String.fromCharCode(((charCode - 65 + shift + 26) % 26) + 65);
      } else if (char >= 'a' && char <= 'z') {
        const shift = keyCodes[i % keyLength] * (encrypt ? 1 : -1);
        return String.fromCharCode(((charCode - 97 + shift + 26) % 26) + 97);
      }
      return char;
    }).join('');
  };
  