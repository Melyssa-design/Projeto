// src\componentes\InforCurso\Index.jsx

import './Styles.css'

function InforCurso() {
    const curso = "Curso tecnológico";
    const nome = " Programação de aplicativos";
    const duração = " 90 horas";
    const local = " Senai Dendezeiros";
    const inicio = " Janeiro de 2025";
    const termino = " Dezembro de 2026";

    // CONST[ CURSO, setCurso] = useSaTE();
     return (
        <div className="infoCurso">
            <h2>Informações do Curso</h2>
            <p>Curso: {curso} {nome}</p>
            <p>Carga Horaria: {duração}</p>
            <p>Local: {local}</p>
            <p>Início: {inicio}</p>
            <p>Término: {termino}</p>
        </div>
    );
}

export default InforCurso