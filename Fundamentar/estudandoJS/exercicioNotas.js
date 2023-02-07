/* Transformar notas escolares

Crie um algoritmo que transforme as notas do sistema numérico para sistema de notas em caracteres tipo A B C

- de 90 para cima - A
- entre 80 e 89   - B
- entre 70 e 79   - C
- entre 60 e 69   - D
- menor que 60    - F
*/

let nota = 75

function Notas(nota) {
  if (nota >= 90 && nota <= 100) {
    nota = 'A'
  } else if (nota >= 80 && nota <= 89) {
    nota = 'B'
  } else if (nota >= 70 && nota <= 79) {
    nota = 'C'
  } else if (nota >= 60 && nota <= 69) {
    nota = 'D'
  } else if (nota < 60 && nota >= 0) {
    nota = 'F'
  } else {
    nota = 'Nota inválida'
  }
  return nota
}

console.log('Nota: ' + Notas(101))
console.log('Nota: ' + Notas(-1))
console.log('Nota: ' + Notas(0))
console.log('Nota: ' + Notas(1))
console.log('Nota: ' + Notas(45))
console.log('Nota: ' + Notas(60))
console.log('Nota: ' + Notas(61))
console.log('Nota: ' + Notas(75))
console.log('Nota: ' + Notas(85))
console.log('Nota: ' + Notas(95))
// let score = 75
// let scoreA = score >= 90 && score <= 100
// let scoreB = score >= 80 && score <= 89
// let scoreC = score >= 70 && score <= 79
// let scoreD = score >= 60 && score <= 69
// let scoreF = score < 60 && score >= 0

// let scoreFinal

// if (scoreA) {
//   scoreFinal = 'A'
// } else if (scoreB) {
//   scoreFinal = 'B'
// } else if (scoreC) {
//   scoreFinal = 'C'
// } else if (scoreD) {
//   scoreFinal = 'D'
// } else if (scoreF) {
//   scoreFinal = 'F'
// } else {
//   scoreFinal = 'Nota inválida'
// }

// console.log('Nota: ' + scoreFinal)
