/* Sistema de gastos familiares

Crie um objeto que possuirá 2 propriedades, ambas do tipo array:
- receitas: []
- despesas: []

Agora crie uma função que irá calcular o total de receitas e despesas e irá mostrar uma mensagem se a família está com saldo positivo ou negativo, seguido do valor do saldo
*/

let familia = {
  receitas: [2000, 3000, 3500],
  despesas: [1500, 4000, 1600]
}

function somar(array) {
  let total = 0
  for (let value of array) {
    total += value
  }
  return total
}

function calcularSaldo() {
  const calcularReceitas = somar(familia.receitas)
  const calcularDespesas = somar(familia.despesas)
  const total = calcularReceitas - calcularDespesas

  let message = 'Negativo '

  if (total >= 0) {
    message = 'Positivo'
  }

  console.log(`Seu saldo é ${message} com R$${total.toFixed(2)}`)
}

calcularSaldo()
