import { Link } from 'react-router-dom'

function Header() {
  return (
    <header className="bg-black text-white p-4 flex justify-between items-center">
      <h1 className="font-bold text-lg">devbooks</h1>
      <nav className="flex gap-4">
        <Link to="/">Início</Link>
        <Link to="/produtos">Livros</Link>
      </nav>
    </header>
  )
}

export default Header