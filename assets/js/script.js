function buscarValor() {
    var monedaSeleccionada = document.getElementById("listaDesplegable").value;
    var montoCLP = parseFloat(document.getElementById("campoTexto").value);

    if (isNaN(montoCLP)) {
        alert("Por favor, ingrese un monto válido en CLP.");
        return;
    }

    fetch('https://mindicador.cl/api/')
        .then(response => response.json())
        .then(data => {
            var valorMoneda = data[monedaSeleccionada].valor;

            if (isNaN(valorMoneda)) {
                alert("No se pudo obtener el valor de la moneda desde la API.");
                return;
            }

            var resultado = montoCLP * valorMoneda;

            document.getElementById("resultado").innerHTML = "Resultado: " + resultado.toFixed(2) + " " + monedaSeleccionada;
        })
        .catch(error => console.error('Error al obtener datos de la API', error));
}