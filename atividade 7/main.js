let primeiroValor;
let segundoValor;
let operacao = "";

function soma(primeiroValor, segundoValor) {
    return Number(primeiroValor) + Number(segundoValor);
  }
  
  function subtracao(primeiroValor, segundoValor) {
    return Number(primeiroValor) - Number(segundoValor);
  }
  
  function multiplicacao(primeiroValor, segundoValor) {
    return Number(primeiroValor) * Number(segundoValor);
  }
  
  function divisao(primeiroValor, segundoValor) {
    return Number(primeiroValor) / Number(segundoValor);
  }


  do {
    operacao = prompt(`Qual operação você quer realizar? Responda 'soma', 'subtração', 'multiplicação', 'divisão' ou 'sair'.`);
    
    if (operacao === "sair") {
      break;
    }
  
    primeiroValor = prompt(`Insira o primeiro valor: `);
    segundoValor = prompt(`Insira o segundo valor: `);
    switch (operacao) {
      case "soma":
        alert(`O resultado da ${operacao} é ${soma(primeiroValor, segundoValor)}`);
        break;
      case "subtração":
        alert(`O resultado da ${operacao} é ${subtracao(primeiroValor, segundoValor)}`);
        break;
      case "multiplicação":
        alert(`O resultado da ${operacao} é ${multiplicacao(primeiroValor, segundoValor)}`);
        break;
      case "divisão":
        alert(`O resultado da ${operacao} é ${divisao(primeiroValor, segundoValor)}`);
        break;
    }
  } while (
    operacao === "soma" ||
    operacao === "subtração" ||
    operacao === "multiplicação" ||
    operacao === "divisão"
  );
  alert(`Até a próxima!`);
  