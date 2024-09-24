const readline = require('readline');

// Importando as operações
const adicionar = require('./operations/add');
const subtrair = require('./operations/subtract');
const multiplicar = require('./operations/multiply');
const dividir = require('./operations/divide');

// Configurando interface para capturar entradas do usuário
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Capturar operação e números
rl.question('Digite a operação ( + | - | * | / ): ', (operacao) => {
    rl.question('Digite o primeiro número: ', (num1) => {
        rl.question('Digite o segundo número: ', (num2) => {
            const a = parseFloat(num1);
            const b = parseFloat(num2);
            let resultado;

            switch (operacao) {
                case '+':
                    resultado = adicionar(a, b);
                    break;
                case '-':
                    resultado = subtrair(a, b);
                    break;
                case '*':
                    resultado = multiplicar(a, b);
                    break;
                case '/':
                    resultado = dividir(a, b);
                    break;
                default:
                    console.log('Operação inválida.');
                    rl.close();
                    return;
            }

            console.log(`Resultado: ${resultado}`);
            rl.close();
        });
    });
});
