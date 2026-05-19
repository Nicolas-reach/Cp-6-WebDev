import { Link } from 'react-router-dom'

function Home() {
  return (
    <div className="p-10 text-center">
      <h2 className="text-3xl font-bold">Bem-vindo à devbooks</h2>
      <p className="mt-4 text-gray-600">
        Sua livraria de livros de tecnologia e programação.
      </p>
      <Link
        to="/produtos"
        className="inline-block bg-black text-white px-6 py-3 rounded mt-6"
      >
        Ver livros
      </Link>
    </div>
  )
}

export default Home