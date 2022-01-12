// Criando a entrada do usuário
function calculadora() {
    const operacao = Number(prompt('Escolha um número para operação:\n 1 - Soma (+)\n 2 - Subtração (-)\n 3 - multiplicação (*)\n 4 - Divisão\
 real (/)\n 5 - Divisão Inteira (%)\n 6 - Potenciação (**)'));

    // como se ler: se operacao for diferente de number OU operacao for maior ou igual a 7:
    if (!operacao || operacao >= 7) {
        alert('ERRO INESPERADO!!! Digite outro valor');
        calculadora();
    } else {

        //criando os valores
        let n1 = Number(prompt('Insira o primeiro valor: '));
        let n2 = Number(prompt('Insira o segundo valor: '));
        let resultado;

        if (!n1 || !n2) {
            alert('Valores inválidos!! Digite outro valor')
        } else {
            // Criando as funçoes
            function soma() {
                resultado = n1 + n2;
                alert(`${n1} + ${n2} = ${resultado}`)
                novaOperacao();
            }

            function subtracao() {
                resultado = n1 - n2;
                alert(`${n1} - ${n2} = ${resultado}`)
                novaOperacao();
            }

            function multiplicacao() {
                resultado = n1 * n2;
                alert(`${n1} * ${n2} = ${resultado}`)
                novaOperacao();
            }

            function divisaoReal() {
                resultado = n1 / n2;
                alert(`${n1} / ${n2} = ${resultado}`)
                novaOperacao();
            }

            function divisaoInteira() {
                resultado = n1 % n2;
                alert(`O resto da divisao entre ${n1} e ${n2} é igual a ${resultado}`)
                novaOperacao();
            }

            function potenciacao() {
                resultado = n1 ** n2;
                alert(`${n1} elevado a ${n2}º é igual a ${resultado}`)
                novaOperacao();
            }


            function novaOperacao() {
                let opcao = prompt('Deseja continuar?\n 1 - SIM\n 2 - NÃO');

                if (opcao == 1) {
                    calculadora();
                } else if (opcao == 2) {
                    alert('ATÉ MAIS!!!')
                } else {
                    alert('Digite uma opçao valida')
                    novaOperacao();
                }
            }
        }


        /* Criando as condiçoes COM IF ELSE:
        if (operacao == 1) {
            soma();
        } else if (operacao == 2) {
            subtracao();
        } else if (operacao == 3) {
            multiplicacao();
        } else if (operacao == 4) {
            divisaoReal();
        } else if (operacao == 5) {
            divisaoInteira();
        } else if (operacao == 6) {
            potenciacao();
        }*/

        // CRIANDO CONDIÇOES COM SWITCH CASE
        switch(operacao){
            case 1:
                soma();
                break;
            case 2:
                subtracao();
                break;
            case 3:
                multiplicacao();
            case 4:
                divisaoReal();
                break;
            case 5:
                divisaoInteira();
                break;
            case 6:
                potenciacao();
                break;
        }
    }
}

calculadora();