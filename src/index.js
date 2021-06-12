import cipher from './cipher.js';
console.log(cipher);

//inserir texto do input na caixa de resultado:

btnEncrypt.onclick = function encrypt (event) {
    event.preventDefault();
    let offset = parseInt(document.getElementById("offset").value);
    let textEncrypt = document.getElementById("textEncrypt").value;
    document.getElementById("resultEncrypt").innerHTML = cipher.encode(offset, textEncrypt);
  }
 

//inserir texto do input na caixa de resultado: 
btnDecrypt.onclick = function decrypt (event) {
    event.preventDefault();  
    let offset = parseInt(document.getElementById("offset").value);
    let textDecrypt = document.getElementById("textDecrypt").value;
    document.getElementById("resultDecrypt").innerHTML = cipher.decode(offset, textDecrypt);
  }
  
 
