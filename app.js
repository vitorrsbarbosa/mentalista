function executarJogo() {
  var contador = 0
  const secretNumber = parseInt(Math.random() * 1001); // número aleatório para adivinhação
  console.log(secretNumber)

  while (guess != secretNumber) {

    var guess = document.getElementById('valorChute').value; // variável definida pelo usuário
    // estrutura de comparação entre o valor de chute com o valor de número secreto
    if (guess === secretNumber) {
      document.getElementById('resultado').textContent = `parabéns você acertou o valor correto (${guess} = ${secretNumber})`
      break
    } else if (guess < secretNumber) {
      document.getElementById('resultado').textContent = `errou, o número é maior que ${guess}`
    } else if (guess > secretNumber) {
      alert(`errou.. o número é menor que ${guess}`)
    }
    contador += 1;
    document.getElementById('contador').textContent = `Você está na tentativa número ${contador} e tem apenas 10 chances`
    if (contador = 10) {
      break
    }
  }
}
