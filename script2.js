alert("BIENVENIDO A LA CALCULADORA");

const operaciones = ["Suma", "Resta", "Multiplicación", "División"];
const resultados = {
    Suma: [],
    Resta: [],
    Multiplicación: [],
    División: []
};

function mostrarResultado(operacion) {
    let historial = resultados[operacion].join("\n");
    alert(`Historial de ${operacion}:\n${historial}`);
}

for (let i = 0; i < operaciones.length; i++) {
    let opcion = parseInt(prompt(`Elige una operación (intento: ${i + 1} de ${operaciones.length}):\n` +
        `1. Suma\n` +
        `2. Resta\n` +
        `3. Multiplicación\n` +
        `4. División\n` +
        `5. Salir`
    ));

    if (opcion >= 1 && opcion <= 4) {
        let operacion = operaciones[opcion - 1];
        let numero1 = parseFloat(prompt("Ingrese el primer número:"));
        let numero2 = parseFloat(prompt("Ingrese el segundo número:"));

        let resultado;

        switch (opcion) {
            case 1:
                resultado = numero1 + numero2;
                break;
            case 2:
                resultado = numero1 - numero2;
                break;
            case 3:
                resultado = numero1 * numero2;
                break;
            case 4:
                if (numero2 !== 0) {
                    resultado = numero1 / numero2;
                } else {
                    alert("Error: División por cero.");
                    continue; // Evitar que se guarde el resultado en el historial si hay un error.
                }
                break;
        }

        resultados[operacion].push(`(${numero1} ${operacion} ${numero2}) = ${resultado}`);
        mostrarResultado(operacion);
    } else if (opcion === 5) {
        alert("Adiós - Gracias por usar la calculadora - ");
        break;
    } else {
        alert("Opción no válida, vuelve a intentarlo");
    }
}
