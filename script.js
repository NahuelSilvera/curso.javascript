function validarMontoIngresado(monto){
    while(isNaN(monto)) {
        alert("Ingreso un valor no numerico, por favor ingrese un valor numerico");
        monto = parseInt(prompt("Ingrese el monto"));
    }
return monto;
}

let montoIngresado = parseInt(prompt(`Ingrese el monto`));
montoIngresado = validarMontoIngresado(montoIngresado);

function simuladorDeCompras(){
    let tarjeta = prompt(`Que tarjeta va usar visa o mastercard?`);

    if ( tarjeta == "visa"){
        const cuota = prompt(`Usted tendra la posibilidad de elegir entre 3 y 6 cuotas`);
    }else if ( tarjeta == "mastercard"){
        const cuota = prompt(`Usted tendra la posibilidad de elegir entre 9 y 12 cuotas`);
    }else{
        alert(`Usted no ingreso ninguna de las tarjetas disponibles`);
    } 
}

simuladorDeCompras()