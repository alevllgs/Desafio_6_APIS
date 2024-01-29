


function buscarValor() {
    // Obtener el valor del campo de texto y la opción seleccionada
    var montoCLP = document.getElementById('campoTexto').value;
    var monedaSeleccionada = document.getElementById('listaDesplegable').value;

    // Realizar acciones con los valores obtenidos (puedes modificar esto según tus necesidades)
    console.log('Monto en CLP:', montoCLP);
    console.log('Moneda seleccionada:', monedaSeleccionada);

    if (isNaN(montoCLP)) {
        alert("Por favor, ingrese un monto válido en CLP.")
        return
    }

    fetch('https://mindicador.cl/api/')
        .then(response => response.json())
        .then(data => {
            let valorMoneda = data[monedaSeleccionada].valor


            let resultado = montoCLP / valorMoneda

            document.getElementById("resultado").innerHTML = "Resultado: " + resultado.toFixed(2) + " " + monedaSeleccionada
        })
        .catch(error => console.error('Error al obtener datos de la API', error))
}

// Asignar la función al evento submit del formulario
document.getElementById('miFormulario').addEventListener('submit', function(event) {
    // Evitar el envío del formulario
    event.preventDefault();

    // Llamar a la función buscarValor
    buscarValor();
});