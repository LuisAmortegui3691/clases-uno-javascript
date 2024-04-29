class Coche {
    constructor(modelo, velocidad, antiguedad) {
        this.modelo = modelo;
        this.velocidad = velocidad;
        this.antiguedad = antiguedad;
    }

    aumentarVelocidad() {
        this.velocidad += 1; 
    }

    disminuirVelocidad() {
        this.velocidad -= 1;
    }
}

let coche1 = new Coche('BMW', 300, 2017);
document.write(`<p class="caja fondo font color">La velocidad del modelo ${coche1.modelo} es de ${coche1.velocidad}</p>`);