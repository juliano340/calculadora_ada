
# Calculadora CLI em Node.js

Este projeto é uma calculadora simples de linha de comando desenvolvida em Node.js. A aplicação permite realizar as quatro operações matemáticas básicas: **adição**, **subtração**, **multiplicação** e **divisão**.

## Funcionalidades

- Adição ( + )
- Subtração ( - )
- Multiplicação ( * )
- Divisão ( / )

## Pré-requisitos

Antes de começar, você precisará ter o [Node.js](https://nodejs.org/) instalado em sua máquina. Se o Node.js não estiver instalado, siga as instruções no site oficial para instalá-lo.

## Instalação

1. Clone este repositório para o seu computador:

```bash
git clone https://github.com/juliano340/calculadora_ada
```

2. Navegue até o diretório do projeto:

```bash
cd calculadora-nodejs
```

## Uso

Para iniciar a calculadora, execute o comando:

```bash
node index.js
```

A calculadora solicitará que você:

1. Digite a operação desejada (`+`, `-`, `*`, `/`).
2. Insira o primeiro número.
3. Insira o segundo número.

O resultado será exibido no terminal.

### Exemplo de uso:

```bash
Digite a operação ( + | - | * | / ): +
Digite o primeiro número: 5
Digite o segundo número: 3
Resultado: 8
```

## Estrutura do Projeto

O projeto está dividido da seguinte forma:

```bash
.
├── index.js
├── operations
│   ├── add.js
│   ├── subtract.js
│   ├── multiply.js
│   └── divide.js
├── package.json
└── README.md
```

- `index.js`: Arquivo principal, responsável pela interface com o usuário e lógica central da calculadora.
- `operations/`: Diretório contendo cada operação como módulo separado.

---

Desenvolvido por [Juliano Pereira](https://github.com/juliano340).
