console.log('> existe x antes do bloco? ', x)

{
  var x = 0
  console.log('> existe x dentro do bloco? ', x)
}

console.log('> existe x depois do bloco? ', x)

// console.log('> existe y antes do bloco? ', y)
// deu erro, diz que y não está definida

{
  // console.log('> existe y dentro do bloco? ', y)
  // dá erro tbm, se tentar acessar o y antes de inicializar ele, dá erro que não consegue acessar a variável

  let y = 0
  console.log('> existe y dentro do bloco? ', y)
}

// console.log('> existe y depois do bloco? ', y)
// deu erro, diz que y não está definida

// const tem o escopo igual do let, apenas dentro do escopo que foi criada


// VARIÁVEIS E TIPOS DE DADOS

// declaração ou declaration
var name

// assignment ou atribuição de valores
name = "Mariana"

// que tipo de dado foi colocado na varíavel
console.log(typeof name)

// let age = 26
// let isHuman = true

// declaração conjunta
let age, isHuman

age = 26
isHuman = true

// multiplos argumentos na função
console.log(name, age, isHuman)

// Escrita de texo + variáveis (concatenar os valores)
console.log("A Mariana tem 26 anos")
console.log("A " + name + " tem " + age + " anos.")

// interpolando valores com template literals ou template strings
console.log(`A ${name} tem ${age} anos.`)

// Object
const person = {
	name: 'John',
	age: 30,
	weight: 88.6,
	isAdmin: true
}
console.log(person.name)
console.log(`${person.name} tem ${person.age} anos.`)

//Arrays
const animals = [
	'Lion',
	'Monkey',
	'Cat'
]
// acessar valores dentro do array
console.log(animals)
//acessar através da posição do array, índices
console.log(animals[0]) // = 'Lion'
// ver tamanho do array
console.log(animals.length)