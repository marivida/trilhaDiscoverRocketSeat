// 1. Declare uma variável de nome weight
let weight

// 2. Que tipo de dado é a variável acima?
console.log(typeof weight) // undefined

/* 3. Declare uma variável e atribua valores para cada um dos dados:
  - name: String
  - age: Number (integer)
  - stars: Number (float)
  - isSubscribed: Boolean */
let name = 'Mariana'
let age = 26
let stars = 4.9
let isSubscribed = true

// 4. A variável student abaixo é de que tipo de dados?
// é um objeto
let student = {}
console.log(typeof student)

// 4.1 Atribua a ela as mesmas propriedades e valores do exercicio
student = {
  name: 'Mariana',
  age: 26,
  stars: 4.9,
  isSubscribed: true,
  weight: 75.7
}

/* 4.2 Mostre no console a seguinte mensagem:
  
  <name> de idade <age> pesa <weight> kg.
  
  Atenção, substitua <name> <age> e <weight> pelos valores de cada propriedade do objeto*/
console.log(
  `${student.name} de idade ${student.age} pesa ${student.weight} kg.`
)

/* 5. Declare uma variável do tipo array, de nome students e atribua a ela nenhum valor, ou seja, somente o array vazio */
let students = []

/* 6. Reatribua valor para a variável acima, colocando dentro dela o objeto student da questão 4. (Não copiar e colar o objeto, mas usar o objeto criado e inserir ele no array) */
students = [student]
console.log(students)

// 7. Coloque no console o valor da posição zero do array acima
console.log(students[0])

// 8. Crie um novo student e coloque na posição 1 do array students
const student1 = {
  name: 'Rose',
  age: 50,
  stars: 4.2,
  isSubscribed: false,
  weight: 69.9
}
// students = [student, student1]
// students[1] = student1
students.push(student1)
console.log(students)

/* Sem rodar o código responda qual é a resposta do códgio abaixo e porque? Após a sua resposta, rode o código e veja se accertou

  console.log(a)
  var a = 1 */
// resposta: undefined, pois de acordo com o conceito de hoisting (elevação, apenas com var, com let não é feito isso), o JS faz como se a declaração do var estivesse no inicio do código, mas sem atribuição de valor, e como se depois fosse feita apenas a atribuição
/* como se fosse assim:
  var a
  console.log(a)
  a = 1 */
console.log(a)
var a = 1
console.log(a)
