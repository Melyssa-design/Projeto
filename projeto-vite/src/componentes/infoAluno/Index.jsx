// src\componentes\infoAluno\index.jsx

import './Styles.css'

function InfoAluno() {
    const nome = "João Pedro";
    const idade = 21;
    const curso = "Desenvolvimento de sistemas";

    return (
        <div className="infoAluno">
            <h2>Informações do Aluno</h2>
            <p>Nome: {nome}</p>
            <p>Idade: {idade}</p>
            <p>Curso: {curso}</p>
        </div>
    );
}

export default InfoAluno;