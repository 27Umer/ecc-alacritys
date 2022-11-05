const ecc =  require('./index')
const bip39 = require( "bip39")

const mnemonic = bip39.generateMnemonic()
const seed = Buffer.from(mnemonic).toString('hex');
const privateKey = ecc.seedPrivate(seed);
const privateKey1 = ecc.seedPrivate(seed);
const publicKey = ecc.privateToPublic(privateKey);
const publicKey1 = ecc.privateToPublic(privateKey1);
console.log(privateKey,"  ", publicKey)
console.log(privateKey1,"  ", publicKey1)
console.log(mnemonic)