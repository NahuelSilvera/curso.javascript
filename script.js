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

			resultadoParagraph.innerText = `${nombreInput.value} según las opciónes seleccionadas anteriormente te queda a pagar un total de $${tarjetaObj.interes(cuotas)}`;
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
    

//Dark-Light 
const botonFondo = document.getElementById("botonFondo");

botonFondo.addEventListener("click", ()=>{
    document.body.classList.toggle("dark");
    if(document.body.classList.contains("dark")){
        localStorage.setItem("modo", "dark")
    }else {
        localStorage.setItem("modo", "light");
    }
})

//LocalStorage 

const modo = localStorage.getItem("modo");
if (modo === "dark"){
    document.body.classList.add("dark");
}else{
    document.body.classList.remove("dark");
};

//---------------//

const btnMostrarDolar = document.getElementById("conversionBoton");

btnMostrarDolar.addEventListener("click", function() {
    const apiDolarDiv = document.getElementById("conversion");

const myHeaders = new Headers();
myHeaders.append("apikey", "KPA4TtbkCLALNaHEyfnhEElwCcchsdE0");

let requestOptions = {
    method: 'GET',
    redirect: 'follow',
    headers: myHeaders
};

function mostrarDolarOficial() {
    fetch("https://api.apilayer.com/fixer/convert?to=ars&from=usd&amount=1", requestOptions)
    .then(response => response.json())
    .then(result => {
        const dolarOficial = parseFloat(result.result.toFixed(2));
        /*apiDolarDiv.innerHTML = `<p>Dolar Oficial: $${dolarOficial}</p>`;*/
        Toastify({
            text: `Dolar Oficial: $${dolarOficial}`,
            duration: 30000,
            destination: "https://github.com/apvarun/toastify-js",
            newWindow: true,
            close: true,
            gravity: "top", // `top` or `bottom`
            position: "right", // `left`, `center` or `right`
            stopOnFocus: true, // Prevents dismissing of toast on hover
            style: {
            background: "linear-gradient(to right, #111111, #303030)",
            },
            onClick: function(){} // Callback after click
        }).showToast();
    })
    .catch(error => console.log('error', error));
    
    fetch("https://api.apilayer.com/fixer/convert?to=ars&from=eur&amount=1", requestOptions)
    .then(response => response.json())
    .then(result => {
        const euroOficial = parseFloat(result.result.toFixed(2));
        /*apiDolarDiv.innerHTML = `<p>Dolar Oficial: $${dolarOficial}</p>`;*/
        Toastify({
            text: `Euro Oficial: $${euroOficial}`,
            duration: 30000,
            destination: "https://github.com/apvarun/toastify-js",
            newWindow: true,
            close: true,
            gravity: "top", // `top` or `bottom`
            position: "right", // `left`, `center` or `right`
            stopOnFocus: true, // Prevents dismissing of toast on hover
            style: {
            background: "linear-gradient(to right, #111111, #303030)",
            },
            onClick: function(){} // Callback after click
        }).showToast();
    })
    .catch(error => console.log('error', error)); 
}

btnMostrarDolar.addEventListener("click", mostrarDolarOficial);

});

cargarCuotas();

