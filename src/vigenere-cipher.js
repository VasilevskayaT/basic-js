const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  constructor(typeEncrypt = true) {
    this.typeEncrypt = typeEncrypt;
  }

  checkArgumenrs(message, key) {
    if (!message || !key) {
      throw new Error('THROWN');
    }
  }

  getKeyCodes(key, isDecrypt){
    const _key = key
        .split('')
        .map(letter => (letter.charCodeAt(0) - 65) % 32);

    if(isDecrypt) {
      return _key
          .map(code => (26 - code) % 26)
    }

    return _key;
  }

  encrypt(message, key) {
    this.checkArgumenrs(message, key);

    const _key = this.getKeyCodes(key);
    let keyIndex = 0;


    const _message = message
        .toLowerCase()
        .split('')
        .map((item, index) => {
          const code = item.charCodeAt(0);

          if(97 <= code && code <= 122) {
            const letter = String.fromCharCode((code - 97 + _key[keyIndex % _key.length]) % 26 + 97);
            keyIndex++;
            return letter;
          }

          return item;
        })


      if(!this.typeEncrypt) {
        _message.reverse()
      }

    return _message
        .join('')
        .toUpperCase();
  }
  decrypt(encryptedMessage, key) {
    this.checkArgumenrs(encryptedMessage, key);

    const _key = this.getKeyCodes(key, true);
    let keyIndex = 0;

    const _message = encryptedMessage
        .toLowerCase()
        .split('')
        .map((item, index) => {
          const code = item.charCodeAt(0);

          if(97 <= code && code <= 122) {
            const letter = String.fromCharCode((code - 97 + _key[keyIndex % _key.length]) % 26 + 97);
            keyIndex++;
            return letter;
          }

          return item;
        })


    if(!this.typeEncrypt) {
      _message.reverse()
    }

    return _message
        .join('')
        .toUpperCase();
  }
}
module.exports = VigenereCipheringMachine;
