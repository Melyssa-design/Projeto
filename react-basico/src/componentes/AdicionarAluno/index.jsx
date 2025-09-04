// src\componentes\AdicionarAluno\index.jsx

import { useState } from 'react'
import './styles.css'

function AdicionarAluno({onAdicionarAluno}) {
    const [nome, setNome] = useState('')
    const [idade, setIdade] = useState('')

    const addAluno = (event) => {
        event.preventDefault()
        // previne o comportamento padrão do formulário que é recarregar a página

        onAdicionarAluno({nome, idade})
        setNome('') // limpa o campo de input após adicionar o usuário
        setIdade('') 
    }

    return (
        <>
            <from onSubmit={addAluno}> {/* onSubmit é a propriedade que define a função que será executada quando o formulário for enviado */}
                <h2>Adicionar usuário</h2>
                <input
                  type="text" // type é a propriedade que define o tipo do input
                  placeholder="Nome do aluno" // placeholder é a propriedade que define o texto que aparece dentro do input
                  value={nome}  // value é a propriedade que define o valor do input
                  onChange={(e) => setNome(e.target.value)}  // onChange é a propriedade que define a função que será executada quando o valor do input mudar
                />
                <input
                    type="number"
                    placeholder="Idade do aluno"
                    value={idade}
                    onChange={(e) => setIdade(e.target.value)}
                />
                <button type="submit">Adicionar</button>
            </from> {/* type="submit" define que o botão é do tipo submit, ou seja, envia o formulário */}
        </>
    );

}

export default AdicionarAluno;