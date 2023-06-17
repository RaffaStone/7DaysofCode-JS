const numeroCorreto = Math.floor(Math.random() * (10 - 0 + 1) + 0);
let chute = "";
let acertou = false;


for (let contador = 0; contador < 3; contador++) {
  chute = prompt("Tente acertar o número entre 0 a 10.");    
  if (chute == numeroCorreto) {
    alert(`Parabéns, você acertou! O número correto era ${numeroCorreto}`);
    acertou = true;
    break;
  }
  alert("Errado!");
}
if (!acertou) {
  alert(`Você não acertou o número era ${numeroCorreto}`);
}
