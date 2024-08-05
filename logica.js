const textArea = document.querySelector("textarea");
const encriptarButton = document.querySelector("#sections2 button:nth-child(1)");
const desencriptarButton = document.querySelector("#sections2 button:nth-child(2)");
const copiarButton = document.querySelector("#copiarBtn");
const mensaje = document.querySelector("#aside1 h2");
const parrafo = document.querySelector("#aside1 p");
const resultado = document.createElement("p");
aside1.appendChild(resultado);

const llaves = {
    "e": "enter",
    "i": "imes",
    "a": "ai",
    "o": "ober",
    "u": "ufat"
};

function encriptarTexto() {
    let texto = textArea.value.toLowerCase();
    for (let letra in llaves) {
        texto = texto.replaceAll(letra, llaves[letra]);
    }
    mostrarResultado(texto);
}

function desencriptarTexto() {
    let texto = textArea.value.toLowerCase();
    for (let letra in llaves) {
        texto = texto.replaceAll(llaves[letra], letra);
    }
    mostrarResultado(texto);
}

function mostrarResultado(texto) {
    resultado.textContent = texto;
    mensaje.style.display = "none";
    parrafo.style.display = "none";
    resultado.style.display = "block";
    copiarButton.style.display = "block";
}

function copiarTexto() {
    navigator.clipboard.writeText(resultado.textContent)
        .then(() => {
            // Opcional: Mostrar un mensaje de éxito
            alert("Texto copiado al portapapeles!");
        })
        .catch(err => {
            console.error('Error al copiar: ', err);
        });
}

encriptarButton.addEventListener("click", encriptarTexto);
desencriptarButton.addEventListener("click", desencriptarTexto);
copiarButton.addEventListener("click", copiarTexto);