document.addEventListener('DOMContentLoaded', function() {
    const formularioCredito = document.getElementById('formularioCredito');
    const inputMonto = document.getElementById('monto');
    const inputCuotas = document.getElementById('cuotas');
    const resultadoCredito = document.getElementById('resultadoCredito');

    formularioCredito.addEventListener('submit', function(event) {
        event.preventDefault();

        const monto = parseFloat(inputMonto.value);
        const cuotas = parseInt(inputCuotas.value);

        if (isNaN(monto) || isNaN(cuotas) || monto <= 0 || cuotas <= 0) {
            alert('Por favor, ingrese valores válidos para el monto y el número de cuotas.');
            return;
        }

        const tasaInteres = 0.15; // Tasa de interés del 15%
        const interesTotal = monto * tasaInteres * cuotas;
        const totalCredito = monto + interesTotal;

        // Mostrar el resultado en la interfaz
        resultadoCredito.textContent = `Total del crédito: $${totalCredito.toFixed(2)}`;
    });
});
