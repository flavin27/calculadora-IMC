const form = document.querySelector('#formulario');

form.addEventListener('submit', function (e) {
    e.preventDefault();
    const peso = Number((e.target.querySelector('#peso')).value);
    const altura = Number((e.target.querySelector('#altura')).value);
    const resultado = window.document.getElementById('resultado')
    function calcularIMC(peso, altura) {
        const IMC = (peso / (altura * altura)).toFixed(2)
        return IMC
    }
    const imc = calcularIMC(peso, altura)
    if (peso == undefined || peso == 0) {
        window.alert('Digite um peso válido')
    } else if (altura == undefined || altura == 0) {
        window.alert('Digite uma altura valida')
    } else {
        resultado.innerHTML = `<p> Seu IMC vale ${imc}</p>`
    }
    if (imc < 18.5) {
        resultado.innerHTML += `<p id='cor'> Voce está abaixo do peso!</p>`
        document.getElementById("cor").style.color = "red"
    } else if (imc >= 18.5 && imc <= 24.9) {
        resultado.innerHTML += `<p> Seu peso está normal.`
        document.getElementById('cor'),style.color = 'green'
    } else if (imc >= 25 && imc <= 29.9) {
        resultado.innerHTML += `<p id='cor'> Voce esta com excesso de peso!`
        document.getElementById('cor').style.color = 'red'
    } else if (imc >= 30 && imc <= 34.9) {
        resultado.innerHTML += `<p id='cor'> Voce esta com obesidade tipo 1!`
        document.getElementById('cor').style.color = 'red'
    } else if (imc >= 35 && imc <= 39.9 ) {
        resultado.innerHTML += `<p id='cor'> Voce esta com obesidade tipo 2!`
        document.getElementById('cor').style.color = 'red'
    } else if (imc >= 40) {
        resultado.innerHTML += `<p id='cor'> Voce esta com obesidade tipo 3!`
        document.getElementById('cor').style.color = 'red'
    }
})





