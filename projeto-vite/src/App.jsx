import './App.css'
import InfoAluno from './componentes/infoAluno'
import Mensagem from './componentes/Mensagem'
import DadosCurso from './componentes/DadosCurso'





function App() {
  return (
    // fragment shorthand (dentro dela é possivel por mais de um comoando em html)
    <>
      <h1>Aula ReactJS</h1>
      <Mensagem />
      <hr />
      <InfoAluno />
      <hr />
      <DadosCurso />
      
    </>
  )
}

export default App
