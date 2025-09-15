import { useState } from 'react'
import './App.css'
import CadastraUsuario from './componentes/CadastraUsuario'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h2>Bem-Vindo</h2>
    <h2> Realize seu cadastro</h2>
      <CadastraUsuario/>
    </>
  )
}

export default App
