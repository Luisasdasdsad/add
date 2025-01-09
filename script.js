// Función que realiza la suma de los dos números
function sumar() {
    // Obtener los valores de los inputs
    var num1 = parseFloat(document.getElementById('num1').value);
    var num2 = parseFloat(document.getElementById('num2').value);

    // Validar que ambos valores sean números
    if (isNaN(num1) || isNaN(num2)) {
        document.getElementById('resultado').innerHTML = "Por favor, ingresa dos números válidos.";
    } else {
        // Realizar la suma
        var resultado = num1 + num2;
        document.getElementById('resultado').innerHTML = "El resultado de la suma es: " + resultado;
    }
}
