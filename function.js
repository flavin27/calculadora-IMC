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
    
})





