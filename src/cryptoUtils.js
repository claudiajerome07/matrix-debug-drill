const crypto = require('crypto');

function hashValue(text) {
  return crypto.createHash('sha256').update(text).digest('hex');
}

function getKey(key) {
  return crypto.createHash('sha256').update(key).digest();
}

function encryptValue(text, key) {
  const iv = Buffer.alloc(16, 0);

  const cipher = crypto.createCipheriv(
    'aes-256-cbc',
    getKey(key),
    iv
  );

  let encrypted = cipher.update(text, 'utf8', 'hex');
  encrypted += cipher.final('hex');

  return encrypted;
}

function decryptValue(encrypted, key) {
  const iv = Buffer.alloc(16, 0);

  const decipher = crypto.createDecipheriv(
    'aes-256-cbc',
    getKey(key),
    iv
  );

  let decrypted = decipher.update(encrypted, 'hex', 'utf8');
  decrypted += decipher.final('utf8');

  return decrypted;
}

module.exports = {
  hashValue,
  encryptValue,
  decryptValue,
};