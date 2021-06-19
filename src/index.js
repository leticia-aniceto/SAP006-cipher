import cipher from './cipher.js';

const btnEncrypt = document.getElementById("btnEncrypt");
btnEncrypt.onclick = function encrypt(event) {
  event.preventDefault();
  let offset = parseInt(document.getElementById("offset").value);
  let textEncrypt = document.getElementById("textEncrypt").value;
  document.getElementById("resultEncrypt").innerHTML = cipher.encode(offset, textEncrypt);
}

const btnDecrypt = document.getElementById("btnDecrypt");
btnDecrypt.onclick = function decrypt(event) {
  event.preventDefault();
  let offset = parseInt(document.getElementById("offset").value);
  let textDecrypt = document.getElementById("textDecrypt").value;
  document.getElementById("resultDecrypt").innerHTML = cipher.decode(offset, textDecrypt);
}


