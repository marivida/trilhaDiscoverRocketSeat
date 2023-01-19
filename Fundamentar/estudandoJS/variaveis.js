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