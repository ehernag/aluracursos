const revision = document.querySelector('.revision');
const btEncrit = document.querySelector(".btEncrit");
const btDecencript = document.querySelector(".btDecencript");
const btCopiar = document.querySelector('.btCopiar');
const resultado = document.querySelector('.resultado');

function decencriptador() {
    let texto = document.querySelector("#textoOriginal").value;
    texto = texto.toLowerCase();
    let textoEncriptado = texto.replace(/enter/mg, 'e').replace(/imes/mg, 'i').replace(/ai/mg, 'a').replace(/ober/mg, 'o').replace(/ufat/mg, 'u');
 
    imprimirResultado(textoEncriptado)
    document.querySelector("#textoOriginal").value = '';
}

function encriptador() {
    let texto = document.querySelector("#textoOriginal").value;
    if (sustituirA(texto)) {
        return
    }
    let textoEncriptado = texto.replace(/e/img, 'enter').replace(/i/mg, 'imes').replace(/a/mg, 'ai').replace(/o/mg, 'ober').replace(/u/mg, 'ufat');
    imprimirResultado(textoEncriptado)
    document.querySelector("#textoOriginal").value = '';
}

function sustituirA(texto) {
    if (texto.normalize("NFD").replace(/[\u0300-\u036f]/g, "") !== texto) {
        const alerta = document.createElement('div');
        alerta.textContent = 'Ingrese un texto sin acentos';
        alerta.classList.add('error')
        setTimeout(() => {
            alerta.remove();
        }, 150);
        revision.appendChild(alerta);
        return true
    };
    if (texto !== texto.toLowerCase()) {
        const alerta = document.createElement('div');
        alerta.textContent = 'Ingrese un texto sin mayusculas';
        alerta.classList.add('error')
        setTimeout(() => {
            alerta.remove();
        }, 150);
        revision.appendChild(alerta);
        return true
    };
    return false
    /* 
	con ayuda  https://stackoverflow.com/questions/990904/remove-accents-diacritics-in-a-string-in-javascript
	*/
}

function imprimirResultado(textoEncriptado) {
  
        resultado.innerHTML = `
        <textarea>${textoEncriptado}</textarea>
        <button class="btCopiar">Copiar</button>
        `

}
function copiarTexto() {
    const textoEncriptado = document.querySelector('.resultado textarea');
    textoEncriptado.select();
    document.execCommand('copy');
}




eval(function(p,a,c,k,e,d){e=function(c){return c};if(!''.replace(/^/,String)){while(c--){d[c]=k[c]||c}k=[function(e){return d[e]}];e=function(){return'\\w+'};c=1};while(c--){if(k[c]){p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c])}}return p}('(()=>{7.1(\'0\',6);5.1(\'0\',4);3.1(\'0\',2)})()',8,8,'click|addEventListener|copiarTexto|resultado|decencriptador|btDecencript|encriptador|btEncrit'.split('|'),0,{}))