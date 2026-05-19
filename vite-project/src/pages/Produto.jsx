import Card from '../components/Card'

const livros = [
  {
    id: 1,
    titulo: 'Código Limpo',
    descricao: 'Como escrever código que outras pessoas conseguem ler.',
    preco: '89,90',
    imagem: 'https://picsum.photos/seed/cleancode/400/300',
  },
  {
    id: 2,
    titulo: 'O Programador Pragmático',
    descricao: 'Dicas pra evoluir como desenvolvedor.',
    preco: '94,50',
    imagem: 'https://picsum.photos/seed/pragmatic/400/300',
  },
  {
    id: 3,
    titulo: 'Estruturas de Dados',
    descricao: 'O clássico que cai em toda entrevista técnica.',
    preco: '120,00',
    imagem: 'https://picsum.photos/seed/algorithms/400/300',
  },
  {
    id: 4,
    titulo: 'Você Não Sabe JS',
    descricao: 'Entendendo JavaScript de verdade.',
    preco: '75,00',
    imagem: 'https://picsum.photos/seed/youdontknowjs/400/300',
  },
]

function Produto() {
  return (
    <div className="p-10">
      <h2 className="text-2xl font-bold text-center mb-6">Nossos livros</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {livros.map((livro) => (
          <Card
            key={livro.id}
            titulo={livro.titulo}
            descricao={livro.descricao}
            preco={livro.preco}
            imagem={livro.imagem}
          />
        ))}
      </div>
    </div>
  )
}

export default Produto