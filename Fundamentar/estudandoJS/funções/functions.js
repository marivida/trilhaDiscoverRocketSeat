// declaration - declaração da função
// function statement
/* function nomeDaFuncao() {
	código que a função realiza
} */

//executar a função, rodar, chamar, invocar
//nomeDaFuncao()

// function expression
// function anonymous
// number1 e number2 são os parâmetros (parameters)
const sum = function(number1, number2){
	let total = (number1 + number2)
	return total // retorna o resultado para ser usado fora da função
}
sum(2,3) // 2 e 3 são os argumentos (arguments)

// ARROW FUNCTION - com funções anonimas
const sayMyName = (nome) => {
	console.log(nome)
}
sayMyName("Mariana")

// CALLBACK FUNCTION
// é uma função usada como argumento/parametro de outra função
function sayMyName(name) {
	console.log('antes de executar a callback')
	name()
	console.log('depois de executar a callback')
}
sayMyName(
	() => {
		console.log('estou em uma callback')
	}
)

/* Function() constructor
FUNÇÃO CONSTRUTORA
	- expressão new
	- criar um novo objeto
	- this keyword */
function Person() {
	this.name = name
	this.walk = function() {
		return this.name + " esta andando"
	}
}
const mariana = new Person("Mariana")
const joao = new Person("Joao")
console.log(mariana)
console.log(joao.walk())
