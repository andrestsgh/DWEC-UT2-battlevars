let serverUrl="https://www.sai.kozow.com";

function enviarPuntuacion(nombre,puntos) {

    if (!nombre) {
        alert("Por favor, introduce un nombre.");
        return;
    }

    fetch("battle.php", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ jugador: nombre, puntuacion: ""+puntos })
    })
    .then(response => response.json())
    .then(ranking => {
        mostrarRanking(ranking);
    })
    .catch(error => {
        console.error("Error al enviar la puntuación:", error);
    });
}

// Mostrar tabla de ranking en la página
function mostrarRanking(ranking) {

    // Convertir objeto a array
    const rankingArray = Object.entries(ranking)
        .map(([jugador, puntuacion]) => ({ jugador, puntuacion }));

    const tbody = document.querySelector("#ranking tbody");
    tbody.innerHTML = "";

    rankingArray.forEach((item, index) => {
        const tr = document.createElement("tr");
        tr.innerHTML = `
            <td>${index + 1}</td>
            <td>${item.jugador}</td>
            <td>${item.puntuacion}</td>
        `;
        tbody.appendChild(tr);
    });
}

