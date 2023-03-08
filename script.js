const nombres = [];
		const nombreInput = document.getElementById('nombre');
		const montoInput = document.getElementById('monto');
		const tarjetaSelect = document.getElementById('tarjeta');
		const cuotasSelect = document.getElementById('cuotas');
		const calcularButton = document.getElementById('calcular');
		const resultadoParagraph = document.getElementById('resultado');

		function cargarCuotas(tarjeta) {
			const cuotas = cuotasSelect.getElementsByTagName('option');
			for (let i = 0; i < cuotas.length; i++) {
				cuotas[i].removeAttribute('disabled');
			}

			if (tarjeta === "visa") {
				for (let i = 0; i < cuotas.length; i++) {
					if (cuotas[i].value < 3 || cuotas[i].value > 6) {
						cuotas[i].setAttribute('disabled', true);
					}
				}
			} else if (tarjeta === "mastercard") {
				for (let i = 0; i < cuotas.length; i++) {
					if (cuotas[i].value < 9 || cuotas[i].value > 12) {
						cuotas[i].setAttribute('disabled', true);
					}
				}
			}
		}

		function calcularInteres() {
			const tarjeta = tarjetaSelect.value;
			const cuotas = parseInt(cuotasSelect.value);
			const monto = parseInt(montoInput.value);
			const tarjetaObj = new Tarjeta(tarjeta, monto);

			resultadoParagraph.innerText = `${nombreInput.value} ingresó: $${monto} y con los intereses te queda en: $${tarjetaObj.interes(cuotas)}`;
		}

		class Tarjeta {
			constructor(tipoDeTarjeta, monto) {
				this.tipoDeTarjeta = tipoDeTarjeta;
				this.monto = monto;
			}
			interes(cuotas) {
				let tasaInteres = 0;
                if (this.tipoDeTarjeta === 'visa') {
                    tasaInteres = 0.05;
                } else if (this.tipoDeTarjeta === 'mastercard') {
                    tasaInteres = 0.07;
                }
    
                let total = this.monto * (1 + tasaInteres);
    
                if (cuotas > 1) {
                    total *= (1 + tasaInteres) ** (cuotas - 1);
                }
    
                return total.toFixed(2);
            }
        }
    
        nombreInput.addEventListener('input', () => {
            nombres.push(nombreInput.value.toLowerCase());
        });
    
        montoInput.addEventListener('input', () => {
            montoInput.value = validarMontoIngresado(montoInput.value);
        });
    
        tarjetaSelect.addEventListener('change', () => {
            cargarCuotas(tarjetaSelect.value);
        });
    
        calcularButton.addEventListener('click', () => {
            calcularInteres();
        });
    

// Modo Dark-Light 
const botonFondo = document.getElementById("botonFondo");

botonFondo.addEventListener("click", ()=>{
    document.body.classList.toggle("dark");
    if(document.body.classList.contains("dark")){
        localStorage.setItem("modo", "dark")
    }else {
        localStorage.setItem("modo", "light");
    }
})

//modo del localStorage 

const modo = localStorage.getItem("modo");
if (modo === "dark"){
    document.body.classList.add("dark");
}else{
    document.body.classList.remove("dark");
};

cargarCuotas();