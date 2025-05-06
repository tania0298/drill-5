const numeroSecreto = Math.floor(Math.random() * 100) + 1;
const intentos = [];

function solicitarNumero() {
  let entrada, numero;

  do {
    entrada = prompt("Adivina el número secreto (entre 1 y 100):");
    numero = Number(entrada);
    if (isNaN(numero) || numero < 1 || numero > 100 || !Number.isInteger(numero)) {
      alert("Debes ingresar un número entero entre 1 y 100.");
    }
  } while (isNaN(numero) || numero < 1 || numero > 100 || !Number.isInteger(numero));

  return numero;
}

let adivinado = false;

while (!adivinado) {
  const intento = solicitarNumero();
  intentos.push(intento);

  if (intento === numeroSecreto) {
    document.getElementById("resultado").innerHTML = `
      <p>🎉 ¡Felicidades! Adivinaste el número secreto.</p>
      <p>Intentos realizados: ${intentos.join(', ')}</p>
    `;
    adivinado = true;
  } else {
    alert("Ups, el número secreto es incorrecto, vuelve a intentarlo.");
  }
}

  