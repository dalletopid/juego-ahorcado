
function dibujarCanvas() {
    tablero.lineWidth = 8;
    tablero.lineCap = "round";
    tablero.lineJoin = "round";
    tablero.fillStyle = "#F3F5FC"
    tablero.strokeStyle = "#0A3871";
    tablero.fillRect(0, 0, 600, 600);
    tablero.beginPath();
    tablero.moveTo(150, 390);
    tablero.lineTo(450, 390);
    tablero.stroke();
    tablero.closePath();
}
function dibujarLinea() {

    tablero.lineWidth = 4;
    tablero.lineCap = "round";
    tablero.lineJoin = "round";
    tablero.strokeStyle = "#0A3871";
    tablero.beginPath();

    let anchura = 600 / palabraSecreta.length;
    for (let i = 0; i < palabraSecreta.length; i++) {
        tablero.moveTo(10 + (anchura * i), 550);
        tablero.lineTo(60 + (anchura * i), 550);
    }
    tablero.stroke();
    tablero.closePath();
}
function escribirLetraCorrecta(index) {

    tablero.font = 'bold 52px Inter';
    tablero.lineWidth = 6;
    tablero.lineCap = "round";
    tablero.lineJoin = "round";
    tablero.fillStyle = "#0A3871";
    let anch = 600 / palabraSecreta.length;
    tablero.fillText(palabraSecreta[index], 15 + (anch * index), 530);
    tablero.stroke();
}
function escribirLetraIncorrecta(letra, errorsLeft) {

    tablero.font = 'bold 30px Inter';
    tablero.lineWidth = 6;
    tablero.lineCap = "round";
    tablero.lineJoin = "round";
    tablero.fillStyle = "#0A3871";
    tablero.fillText(letra, 10 + (40 * (10 - errorsLeft)), 590, 40);
}


function dibujarAhorcado(puntaje) {
    tablero.lineWidth = 8
    tablero.lineCap = "round"
    tablero.lineJoin = "round"
    tablero.strokeStyle = "#0A3871"
    if (puntaje === 8) {

        tablero.moveTo(225, 10)
        tablero.lineTo(225, 390)
    }
    if (puntaje === 7) {
        tablero.moveTo(225, 10)
        tablero.lineTo(375, 10)
    }
    if (puntaje === 6) {
        tablero.moveTo(375, 10)
        tablero.lineTo(375, 50)
    }
    if (puntaje === 5) {
        tablero.moveTo(425, 100)
        tablero.arc(375, 100, 50, 0, Math.PI * 2)
    }
    if (puntaje === 4) {
        tablero.moveTo(375, 150)
        tablero.lineTo(375, 250)
    }
    if (puntaje === 3) {
        tablero.moveTo(375, 250)
        tablero.lineTo(325, 310)
    }
    if (puntaje === 2) {
        tablero.moveTo(375, 250)
        tablero.lineTo(425, 310)
    }
    if (puntaje === 1) {
        tablero.moveTo(375, 170)
        tablero.lineTo(325, 250)
    }
    if (puntaje === 0) {
        tablero.moveTo(375, 170)
        tablero.lineTo(425, 250)
    }
    tablero.stroke()
    tablero.closePath()
}

function perdiste() {
    tablero.font = 'born 42px times';
    tablero.lineWidth = 6
    tablero.lineCap = "round"
    tablero.lineJoin = "round"
    tablero.fillStyle = "red"
    tablero.fillText("Fin del juego!", 220, 450)
}

function ganaste() {
    tablero.font = 'bold 42px Inter';
    tablero.lineWidth = 6
    tablero.lineCap = "round"
    tablero.lineJoin = "round"
    tablero.fillStyle = "green"
    tablero.fillText("Ganaste,", 220, 430)
    tablero.fillText("Felicidades!", 200, 470)
}

function recargar() {
    location.reload();
}