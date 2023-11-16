
function executarJogo() {
  let secretNumber = (parseInt((Math.random() * 100) + 1) + 100); // número aleatório para adivinhação
  let contador = 0; // contador para a estrutura de repetição
  let guess = document.getElementById('valorChute').value; // variável definida pelo usuário
  console.log('secretNumber = ' + secretNumber);
  console.log('contador = ' + contador);

  while (guess != secretNumber && contador <= 10) {
    if (guess < secretNumber) {
      document.getElementById(
        'resultado'
      ).textContent = `errou, o número é maior que ${guess}`;
    }
    if (guess > secretNumber) {
      document.getElementById(
        'resultado'
      ).textContent = `errou.. o número é menor que ${guess}`;
    }
    // estrutura de comparação entre o valor de chute com o valor de número secreto
    if (guess == secretNumber) {
      document.getElementById(
        'resultado'
      ).textContent = `parabéns você acertou!!`;
      document.getElementById(
        'contador'
      ).textContent = `Você acertou com ${contador} tentativas!`;
      break;
    }
    contador += 1;
    document.getElementById(
      'contador'
    ).textContent = `Você está na tentativa número ${contador} e tem apenas 10 chances`;
  }

  document.getElementById('contador').textContent = `Suas chances acabaram :/`;
  document.getElementById('secretNumber').textContent = `o número secreto é ${secretNumber}`
}
