/*
Buscando e contando dados em Arrays

Baseado no array de livros por categoria abaixo, faça os seguintes desafios:

- Contar os numeros de categorias e o numero de livros em cada categoria
- contar o numero de autores
- mostrar os livros do autor Augusto Cury
- transformar a função acima em uma função que irá receber o nome do autor e devolver os livros desse autor
*/

const livrosPorCategoria = [
  {
    categoria: 'Riqueza',
    livros: [
      {
        titulo: 'Os segredos da mente milionária',
        autor: 'T. Harv Eker'
      },
      {
        titulo: 'Os segredos da mente milionária',
        autor: 'T. Harv Eker'
      },
      {
        titulo: 'O homem mais rico da Babilônia',
        autor: 'George S. Clason'
      },
      {
        titulo: 'Pai rico, pai pobre',
        autor: 'Robert T. Kiyosaki e Sharon L. Lechter'
      }
    ]
  },
  {
    categoria: 'Inteligência Emocional',
    livros: [
      {
        titulo: 'Você é Insubstituível',
        autor: 'Augusto Cury'
      },
      {
        titulo: 'Ansiedade – Como enfrentar o mal do século',
        autor: 'Augusto Cury'
      },
      {
        titulo: 'Os 7 hábitos das pessoas altamente eficazes',
        autor: 'Stephen R. Covey'
      }
    ]
  }
]

const totalCategorias = livrosPorCategoria.length
console.log('Total de categorias: ' + totalCategorias)

// for (let i = 0; i < livrosPorCategoria.length; i++) {
//   const element = livrosPorCategoria[i]
//   console.log(
//     'Categoria ' + element.categoria + ': ' + element.livros.length + ' livros'
//   )
// }

for (const itemLista of livrosPorCategoria) {
  console.log(
    'Categoria ' +
      itemLista.categoria +
      ': ' +
      itemLista.livros.length +
      ' livros'
  )
}

let autores = []
let augusto = []

for (const itemLista of livrosPorCategoria) {
  for (const livro of itemLista.livros) {
    if (!autores.includes(livro.autor)) {
      autores.push(livro.autor)
    }

    if (livro.autor == 'Augusto Cury') {
      augusto.push(livro.titulo)
    }
  }
}
console.log('Total de autores: ' + autores.length)
console.log('Livros de Augusto Cury: ' + augusto.join(', '))

function filtrarPorAutor(autor) {
  let autorEscolhido = []

  for (const itemLista of livrosPorCategoria) {
    for (const livro of itemLista.livros) {
      if (livro.autor.toUpperCase() == autor.toUpperCase()) {
        autorEscolhido.push(livro.titulo)
      }
    }
  }
  return autorEscolhido.join(', ')
}

autorEscolhido = 'Robert T. Kiyosaki e Sharon L. Lechter'
console.log('Livros de ' + autorEscolhido + ': ' + filtrarPorAutor(autorEscolhido));

