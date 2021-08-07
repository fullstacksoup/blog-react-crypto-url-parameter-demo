// import sha256 from 'crypto-js/sha256';
// import hmacSHA512 from 'crypto-js/hmac-sha512';
// import Base64 from 'crypto-js/enc-base64';
import hmacSHA512 from 'crypto-js/hmac-sha512';
import Base64 from 'crypto-js/enc-base64';

var CryptoJS = require("crypto-js");
var SHA256 = require("crypto-js/sha256");
const dynamicValue = '12/12/2021';

export function AESEncrypt(pureText) {    
    const privateKey=`${dynamicValue} secret key 123`;    
    var ciphertext = encodeURIComponent(CryptoJS.AES.encrypt(JSON.stringify(pureText), privateKey).toString());    
    return ciphertext;
}

export function AESDecrypt(encryptedText) {  
    const privateKey=`${dynamicValue} secret key 123`;    
    var bytes  = CryptoJS.AES.decrypt(decodeURIComponent(encryptedText), privateKey);
    var decryptedData = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));    
    return decryptedData;
}

export function Sha256Hash(id, first, last) {    
    const pureText = `${first}-${id}-${last}`;
    const privateKey=`${dynamicValue} secret key 123`;    
    var hash = encodeURIComponent(Base64.stringify(hmacSHA512(pureText, privateKey)));
    // console.log(Base64.stringify(hmacSHA512(pureText, privateKey)));
    return hash;
}
