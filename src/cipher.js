const cipher = {
  encode: function (offset, str) {
    if (offset != Number && str == "") {
      throw TypeError("Por favor preencha os campos");
    } else {
      let encMsg = "";
      for (let i = 0; i < str.length; i++) {
        let code = str[i].charCodeAt(0);
        if (code >= 65 && code <= 90) {
          let resEncode = ((code + 65 + offset) % 26) + 65;
          encMsg += String.fromCharCode(resEncode);
        } else if (code >= 97 && code <= 122) {
          let resEncode = ((code - 97 + offset) % 26) + 97;
          offset
          encMsg += String.fromCharCode(resEncode);
        } else {
          encMsg += str[i]
        }
      }
      return encMsg;
    }
  },

  decode: function (offset, str) {
    if (offset != Number && str == "") {
      throw TypeError("Por favor preencha os campos");
    } else {
      let decMsg = "";
      for (let i = 0; i < str.length; i++) {
        let code = str[i].charCodeAt(0);
        if (code >= 65 && code <= 90) {
          let resDecode = ((code + 65 - offset) % 26) + 65;
          decMsg += String.fromCharCode(resDecode);
        } else if (code >= 97 && code <= 122) {
          let resDecode = 122 - ((122 - code + offset) % 26);
          decMsg += String.fromCharCode(resDecode);
        } else {
          decMsg += str[i]
        }
      }
      return decMsg;
    }
  }
}


export default cipher;




//security copy
/*
const cipher = {
  encode: function (offset, str) {
    let encMsg = "";

    for (let i = 0; i < str.length; i++) {
      let code = str[i].charCodeAt(0);
      if (code >= 65 && code <= 90) {
        let resEncode = ((code + 65 + offset) % 26) + 65;
        encMsg += String.fromCharCode(resEncode);
      } else if (code >= 97 && code <= 122) {
        let resEncode = ((code - 97 + offset) % 26) + 97;
        offset
        encMsg += String.fromCharCode(resEncode);
      } else {
        encMsg += str[i]
      }
    }
    return encMsg;
  },

  decode: function (offset, str) {
    let decMsg = "";

    for (let i = 0; i < str.length; i++) {
      let code = str[i].charCodeAt(0);
      if (code >= 65 && code <= 90) {
        let resDecode = ((code + 65 - offset) % 26) + 65;
        decMsg += String.fromCharCode(resDecode);
      } else if (code >= 97 && code <= 122) {
        let resDecode = 122 - ((122 - code + offset) % 26);
        decMsg += String.fromCharCode(resDecode);
      } else {
        decMsg += str[i]
      }
    }
  return decMsg;
  },
}

export default cipher;
*/


