const util = require('util');
const crypto = require('crypto');

const pdkdf2 = util.promisify(crypto.pbkdf2);
const randomBytes = util.promisify(crypto.randomBytes);

const generatePassword = async text => {
    const ALGO = 'sha512';
    const KEY_LEN = 64;
    const salt = await randomBytes(32);
    const iter = Math.floor(Math.random() * 20000) + 200000;
    const digest = await pdkdf2(text, salt, iter, KEY_LEN, ALGO);
    return `${ALGO}:${salt.toString('base64')}:${iter}:${KEY_LEN}:${digest.toString('base64')}`;
};

const verifyPassword = async (password, hashedPassword) => {
    const [algo, encodedSalt, iterStr, keyLenStr, encodedDigest]= hashedPassword.split(':');
    const salt = Buffer.from(encodedSalt, 'base64');
    const iter = parseInt(iterStr, 10);
    const keyLen = parseInt(keyLenStr, 10);
    const storedDigest = Buffer.from(encodedDigest, 'base64');
    const digest = await pdkdf2(password, salt, iter, keyLen, algo);
    return Buffer.compare(storedDigest, digest) === 0;
}

(async () => {
    const hashed = await generatePassword('samplepassword');
    const result1 = await verifyPassword('samplepassword', hashed);
    const result2 = await verifyPassword('asdfasddf', hashed);
    console.log(result1, result2);
})();
