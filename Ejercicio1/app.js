const readline = require('readline');

// Crear una interfaz para leer desde la consola
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Función para leer el número y procesarlo
function leerNumero() {
    rl.question('Ingrese un numero: ', (input) => {
        const numero = parseFloat(input);

        if (isNaN(numero)) {
            console.log('Por favor, ingrese un numero válido.');
            leerNumero(); // Volver a pedir
        } else if (numero < 0) {
            console.log('Numero negativo ingresado. Saliendo...');
            rl.close(); // Terminar
        } else {
            console.log(`El cuadrado de ${numero} es ${numero * numero}`);
            leerNumero(); // Repetir
        }
    });
}

// Iniciar el proceso
leerNumero();