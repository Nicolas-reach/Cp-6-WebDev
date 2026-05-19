import { Link } from 'react-router-dom'

function Error() {
  return (
    <div className="p-10 text-center">
      <h2 className="text-5xl font-bold">404</h2>
      <p className="mt-4 text-gray-600">Página não encontrada.</p>
      <Link
        to="/"
        className="inline-block bg-black text-white px-6 py-3 rounded mt-6"
      >
        Voltar para o início
      </Link>
    </div>
  )
}

export default Error