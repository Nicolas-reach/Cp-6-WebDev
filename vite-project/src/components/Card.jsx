function Card({ titulo, descricao, preco, imagem }) {
  return (
    <div className="border border-gray-300 rounded p-4">
      <img src={imagem} alt={titulo} className="w-full h-48 object-cover rounded" />
      <h3 className="font-bold mt-2">{titulo}</h3>
      <p className="text-sm text-gray-600 mt-1">{descricao}</p>
      <p className="font-bold mt-2">R$ {preco}</p>
      <button className="bg-black text-white px-4 py-2 rounded mt-2 w-full">
        Comprar
      </button>
    </div>
  )
}

export default Card