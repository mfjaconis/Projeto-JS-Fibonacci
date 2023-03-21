// Escreva um programa que exiba a sequência de Fibonacci até um número escolhido pelo usuário.


function fibonacci() {
    const numero = document.getElementById("numero").value
    let resultado = document.getElementById("resultado")
    let fn1 = 0
    let fn2 = 1

    while (fn2 < numero) {
        const soma = fn1 + fn2

        resultado.innerHTML += `${soma} -  `

        fn1 = fn2
        fn2 = soma
    }
    
}
