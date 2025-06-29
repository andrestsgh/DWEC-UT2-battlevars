// Código lleno de errores para corregir por los alumnos

var puntos = 0

function iniciarBatalla() {
    const nombrejugador = document.getElementById("playerName").value.trim();

    if (NombreJugador.length > 0) {
        Puntos = Puntos + 5

    {
        var arma = "espada"
        let arma = "arco"
    }

    let energia = "100"
    energia = energia - 10


    if (arma === "espada") {
        Puntos = Puntos + 10
    }
    if (arma === "arco") {
        Puntos = Puntos + 50
    }

    const nivel

    if (nivel === 1){
        puntos = Puntos + energia
    }


    console.log("Puntuación: " + puntos)
    document.getElementById("score").innerText = ""+ puntos

    // Enviar puntuación al servicio remoto (mock)
    enviarPuntuacion(nombrejugador,puntos)
}