const nombres = [];
let nombreIngresado = prompt("Ingrese su nombre");
nombres.push(nombreIngresado.toLowerCase());
console.log(nombres);
console.log(nombres.length);

function validarMontoIngresado(monto) {
    while (isNaN(monto)) {
        alert("Ingresaste un valor no numérico, por favor ingresa un valor numérico");
        monto = parseInt(prompt("Ingrese el monto de la compra"));
    }
    return monto;
}

let montoIngresado = parseInt(prompt(`Ingrese el monto de la compra`));
montoIngresado = validarMontoIngresado(montoIngresado);

function simuladorDeCompras() {
    let tarjeta = prompt(`Visa o Mastercard`);

    if (tarjeta === "visa") {
        const cuota = prompt(`Tienes la posibilidad de elegir entre 3 y 6 cuotas`);
    } else if (tarjeta === "mastercard") {
        const cuota = prompt(`Tienes la posibilidad de elegir entre 9 y 12 cuotas`);
    } else {
        alert(`No seleccionaste ninguna de las tarjetas disponibles`);
    }
}

simuladorDeCompras();

class Tarjeta {
    constructor(tipoDeTarjeta, monto) {
        this.tipoDeTarjeta = tipoDeTarjeta;
        this.monto = monto;
    }
    interes() {
        return this.monto * 3;
    }
}

const visa = new Tarjeta("visa", montoIngresado);
alert(`${nombres} ingresó: $${visa.monto} y con los intereses te queda en: $${visa.interes()}`);
