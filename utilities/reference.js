function generateReference(encryptionKey, payload) {
  let number = Date.now();
  let reverseNumber = Number(number.toString().split('').reverse().join(''));
  return `NODE_${number.toString(36).toUpperCase()}${reverseNumber.toString(36).toUpperCase()}`;
}

module.exports = {
  generateReference
};