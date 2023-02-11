/*
  Celsius em fahrenheit

  Crie uma função que receba uma string em celsius ou fahrenheit e faça a tranformação de uma unidade para outra

  C = (F-32) * (5/9)

  F = C * (9/5) +32

*/

function transformar(grau) {
  const celsius = grau.toUpperCase().includes('C')
  const fahrenheit = grau.toUpperCase().includes('F')

  // fluxo de erro
  if (!celsius && !fahrenheit) {
    throw new Error('Grau não identificado')
  }

  // fluxo ideal, F para C
  let novoGrau = Number(grau.toUpperCase().replace('F', ''))
  let formula = fahrenheit => (fahrenheit - 32) * (5 / 9)
  let sinalGrau = 'C'

  // fluxo alternativo, C para F
  if (celsius) {
    novoGrau = Number(grau.toUpperCase().replace('C', ''))
    formula = celsius => celsius * (9 / 5) + 32
    sinalGrau = 'F'
  }

  return formula(novoGrau) + sinalGrau
}

function transformarRefatorado(grau) {
  const celsius = grau.toUpperCase().includes('C')
  const fahrenheit = grau.toUpperCase().includes('F')

  if (fahrenheit) {
    const novoGrau = Number(grau.toUpperCase().replace('F', ''))
    const formula = fahrenheit => (fahrenheit - 32) * (5 / 9)
    return `${formula(novoGrau)}C`
  }

  if (celsius) {
    const novoGrau = Number(grau.toUpperCase().replace('C', ''))
    const formula = celsius => celsius * (9 / 5) + 32
    return `${formula(novoGrau)}F`
  }

  throw new Error('Grau invalido')
}

try {
  console.log(transformarRefatorado('50F'))
  console.log(transformarRefatorado('10c'))
  console.log(transformarRefatorado('10e'))
} catch (error) {
  console.log(error.message)
}

// if (celsius) {
//   novoGrau = grau
// }
