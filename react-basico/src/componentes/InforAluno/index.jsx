// src/componentes/InforAlunos/index.jsx

import { useState } from 'react'
import'./styles.css'
import AdicionarAluno from '../AdicionarAluno'

// useState função que cria estados dentro do componente, 
// ou seja, variaveis que quando alteradas, o componente é re-renderizado

function InfoAluno() {
  const [alunos, setAlunos] = useState([])

  const adicionarAluno = (novoAluno) => {
    setAlunos([...alunos, novoAluno]) 
    // cria uma nova array com os alunos antigos e o novo aluno
  };
    
    return (
         <>
            <AdicionarAluno onAdicionarAluno={adicionarAluno} />
            <hr />
              <h2>Lista de Alunos</h2>
              {alunos.length ===0 ? (
                  <p>Nenhum aluno adicionado.</p>
              ) : (
                  <ul>
                      {alunos.map((aluno,index) => ( 
                          <li key={index}>
                            nome: {aluno.nome} <br />
                            idade: {aluno.idade} anos
                            <hr />
                          </li>
                      ))}
                  </ul>
              )}
        </>

    );
}

export default InfoAluno;