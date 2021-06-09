import cipher from './cipher.js';
console.log(cipher);



//let offset = document.getElementById("offset");


//inserir texto do input na caixa de resultado:
  function cifrar (event) {
    event.preventDefault();
    let resultadoCif = document.getElementById('resultado-msgcifrada');
    resultadoCif.innerHTML = document.getElementById('texto-cifrar').value
    //resultadoCif.innerHTML = document.myform.cifrar.value;
    console.log("function cifrar()"); 
  }
  document.getElementById('button-cifrar').addEventListener("click", cifrar)

  function decifrar (event) {
    event.preventDefault();  
    let resultadoDecif = document.getElementById('resultado-msgdecifrada');
    resultadoDecif.innerHTML = document.getElementById('texto-decifrar').value;
    console.log("function decifrar()"); 
  }
  document.getElementById('button-decifrar').addEventListener("click", decifrar)
 