function buscarValor() {
    let monedaSeleccionada = document.getElementById("listaDesplegable").value
    let montoCLP = parseFloat(document.getElementById("campoTexto").value)

    if (isNaN(montoCLP)) {
        alert("Por favor, ingrese un monto válido en CLP.")
        return
    }

    fetch('https://mindicador.cl/api/')
        .then(response => response.json())
        .then(data => {
            let valorMoneda = data[monedaSeleccionada].valor


            let resultado = montoCLP * valorMoneda

            document.getElementById("resultado").innerHTML = "Resultado: " + resultado.toFixed(2) + " " + monedaSeleccionada
        })
        .catch(error => console.error('Error al obtener datos de la API', error))
}