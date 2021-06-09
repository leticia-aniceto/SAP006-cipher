const codigoDaLetraASC = "".charCodeAt(0);
console.log(codigoDaLetraASC);
const tamanhoAlfabeto = 26;
const cod1aLetra = 65;
//let desloc = Number.("")
//['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','x','y','z']
let alfabeto = "";
for (let i=65; i<=90; i+=1){
  alfabeto += String.fromCodePoint
}


const cipher = {
  encode: function (offset, str) {
    /* function checkInput (evt) {
      var charCodeAt = evt.charCodeAt;
      if (charCodeAt != 0){
        if (charCodeAt < 65 || charCodeAt > 90){
          evt.preventDefault();
          displayWarning(
            "Por favor utilize apenas letras maiúsculas." + "\n" + "charCodeAt:" + charCodeAt + "\n"
          );
        }
      }
    } */
  console.log("aqui offset", offset); 
  console.log("aqui texto", str); 
  } 

  

};

export default cipher;

/* usar código ASC 
"A".charCodeAt --> descobrir o código da letra/posição 

alfabeto começando A=0:
(codigoDaLetra + desloc) % tamDoAlfabeto
    F=5      +      7    % 26


alfabeto começando A=65 (código ASC):
A    B   (...) Z
65  66         90

((codigoDaLetraASC - cod1aLetra + desloc) % tamDoAlfabeto) + cod1aLetra
1aLetra = A = 65 ("A".charCodeAt(0))

"F".charCodeAt(0) -65
return: 5
"F".charCodeAt(0)
70

((codigoDaLetraASC - cod1aLetra + desloc) % tamDoAlfabeto) + cod1aLetra
((70 -65 + 7) % 26) + 65


String.fromCharCode(72)
return: "H"

function cifra(string) {
  return ???
}
*/


