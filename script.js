
const calcular = document.getElementById('calcular');
function IMC() {
    const nome = document.getElementById('nome').value;
    const altura = document.getElementById('altura').value;
    const peso = document.getElementById('peso').value;
    const resultado = document.getElementById('resultado');

    if (nome != ' ' && altura != ' ' && peso != ' ') {
        const valorIMC = (peso / (altura * altura)).toFixed(2);

        resultado.textContent = valorIMC;

        let classificacao = ' ';

        if (valorIMC > 18.5){
            classificacao = 'abaixo do peso.';
        }
        else if (valorIMC < 25) {
            classificacao = 'peso ideal';
        }
        else if (valorIMC < 30) {
            classificacao = 'acima do peso';
        }
        else if (valorIMC < 35) {
            classificacao = 'obesidade grau 1';
        }   
        else if (valorIMC < 40) {
            classificacao = 'obesidade grau 2';
        }
        else {
            classificacao = 'obesidade morbida';
        }
        resultado.textContent = `${nome} seu imc e ${valorIMC} e voce esta ${classificacao}`;
    }
    else {
        resultado.textContent = 'preencha todos os campos!'
    }
}
calcular.addEventListener(click, IMC);







