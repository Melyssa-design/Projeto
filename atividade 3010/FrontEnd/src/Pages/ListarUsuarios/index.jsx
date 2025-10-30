// FrontEnd\src\Pages\ListarUsuarios\index.jsx

import React, { useEffect } from 'react'; // Importa React e useEffect para efeitos colaterais
import api from '../../services/api'; // Importa a instância do Axios configurada para a API
import './styles.css';

function ListarUsuarios() {
    const [ usuarios, setUsuarios ] = React.useState([]); // Estado para armazenar os usuários
    const [ loading, setLoading ] = React.useState(true); // Estado para controlar o carregamento

    useEffect(() => {
        async function fetchUsuarios() {
            try { // Busca os usuários da API
                const response = await api.get('/usuarios');
                setUsuarios(response.data);
            } catch (error) { // Trata erros de requisição
                console.error('Erro ao buscar usuários:', error);
            }finally {
                setLoading(false);
            }
        }

        fetchUsuarios();
    }, []);

    if (loading) {
        return <div>Carregando usuários...</div>;
    }

    return (
        <div className="listar-usuarios">
            <h2>Lista de Usuários</h2>
            <ul>
                {usuarios.map((usuario) => (
                    <li key={ usuario.id }>
                        {usuario.nome} <br />
                        {usuario.email} <br />
                        {usuario.telefone}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default ListarUsuarios;
