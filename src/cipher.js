//funciona com maiúsculas e minúsculas, porém teste "alo Alo DEV"
//erro no offset minusculo
const cipher = {
  encode: function (offset, str) {
    let encMsg = "";

    for (let i = 0; i < str.length; i++) {
      let code = str[i].charCodeAt(0);

      if (code >= 65 && code <= 90) {
        let resEncode = ((code + 65 + offset) % 26) + 65; 
        //65 = maiuscula  26 = alfabeto (se for 52 entra em outros caracteres)
        encMsg += String.fromCharCode(resEncode);
      } else if (code >= 97 && code <= 122) {
        let resEncode = ((code + 97 + offset) % 26) + 97; //97 = minuscula
        encMsg += String.fromCharCode(resEncode);
      } else {
        encMsg += str[i]
      } 
    }
    return encMsg;
  },


//funciona com maiúsculas e minúsculas, porém teste "alo Alo DEV"
  decode: function (offset, str) {
    let decMsg = "";

    for (let i = 0; i < str.length; i++) {
      let code = str[i].charCodeAt(0);

      if (code >= 65 && code <= 90) {
        let resDecode = ((code + 65 - offset) % 26) + 65;
        decMsg += String.fromCharCode(resDecode);
      } else if (code >= 97 && code <= 122) {
        let resDecode = ((code + 97 - offset) % 26) + 97;
        decMsg += String.fromCharCode(resDecode);
      } else {
        decMsg += str[i]
      }
  }
  return decMsg;
  },
}

export default cipher;



  /* essa funciona com maiúsculas (não mexer)
  encode: function (offset, str) {
    let encMsg = "";

    for (let i = 0; i < str.length; i++) {
      let code = str[i].charCodeAt(0);

      if (code >= 65 && code <= 90) {
        let resEncode = ((code + 65 + offset) % 26) + 65;
        encMsg += String.fromCharCode(resEncode);
      } else {
        encMsg += str[i] 
      }
    }
    return encMsg;
  },
  */
